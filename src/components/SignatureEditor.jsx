import React, { useState, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FontFamily } from '@tiptap/extension-font-family';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import { Underline } from '@tiptap/extension-underline';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import { TextAlign } from '@tiptap/extension-text-align';
import { Placeholder } from '@tiptap/extension-placeholder';

import { 
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, 
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Link as LinkIcon, Image as ImageIcon, Minus, Quote, Code,
  Undo, Redo, Type, ChevronDown, Palette, Highlighter
} from 'lucide-react';

import './SignatureEditor.css';

// Custom Extension for Font Size
import { Extension } from '@tiptap/core';

const FontSize = Extension.create({
  name: 'fontSize',
  addOptions() {
    return {
      types: ['textStyle'],
    };
  },
  addAttributes() {
    return {
      fontSize: {
        default: null,
        parseHTML: element => element.style.fontSize.replace(/['"]+/g, ''),
        renderHTML: attributes => {
          if (!attributes.fontSize) {
            return {};
          }
          return {
            style: `font-size: ${attributes.fontSize}`,
          };
        },
      },
    };
  },
  addCommands() {
    return {
      setFontSize: fontSize => ({ chain }) => {
        return chain()
          .setMark('textStyle', { fontSize })
          .run();
      },
      unsetFontSize: () => ({ chain }) => {
        return chain()
          .setMark('textStyle', { fontSize: null })
          .run();
      },
    };
  },
});

const ColorPickerModal = ({ onSelect, onReset, onClose, title }) => {
  const colors = [
    '#000000', '#FF0000', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#9900FF',
    '#FFFFFF', '#FFCCCC', '#FFE5CC', '#FFFFCC', '#E5FFCC', '#CCFFFF', '#E5CCFF',
    '#CCCCCC', '#FF6666', '#FFB266', '#FFFF66', '#99FF99', '#66CCFF', '#B266FF',
    '#666666', '#990000', '#994C00', '#999900', '#006600', '#003399', '#660099',
    '#333333', '#4C0000', '#4C2600', '#4C4C00', '#003300', '#00194C', '#33004C'
  ];

  return (
    <div className="color-picker-modal" onClick={(e) => e.stopPropagation()}>
      <div className="color-grid">
        {colors.map((color, i) => (
          <button 
            key={i} 
            className="color-cell" 
            style={{ backgroundColor: color }} 
            onClick={() => onSelect(color)}
          />
        ))}
      </div>
      <div className="color-picker-footer">
        <button className="text-btn reset-btn" onClick={onReset}>Reset</button>
        <button className="text-btn cancel-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

const SignatureEditor = ({ onChange }) => {
  const [fontSize, setFontSizeState] = useState('14');
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);
  const [showHighlightColorPicker, setShowHighlightColorPicker] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontFamily,
      Color,
      Highlight.configure({ multicolor: true }),
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: 'Sign here...' }),
      FontSize,
    ],
    content: '<p>Hello!</p>',
    onUpdate({ editor }) {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
    editorProps: {
      handlePaste: (view, event) => {
        const items = Array.from(event.clipboardData?.items || []);
        const imageItem = items.find(item => item.type.startsWith('image'));

        if (imageItem) {
          const file = imageItem.getAsFile();
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const src = e.target?.result;
              if (typeof src === 'string') {
                view.dispatch(view.state.tr.replaceSelectionWith(
                  view.state.schema.nodes.image.create({ src })
                ));
              }
            };
            reader.readAsDataURL(file);
            return true; // Handled
          }
        }
        return false; // Not handled
      },
    },
  });

  const toggleTextColorPicker = useCallback((e) => {
    e.stopPropagation();
    setShowTextColorPicker(!showTextColorPicker);
    setShowHighlightColorPicker(false);
  }, [showTextColorPicker]);

  const toggleHighlightColorPicker = useCallback((e) => {
    e.stopPropagation();
    setShowHighlightColorPicker(!showHighlightColorPicker);
    setShowTextColorPicker(false);
  }, [showHighlightColorPicker]);

  if (!editor) return null;

  const fonts = [
    { label: 'Inter', value: 'Inter' },
    { label: 'Hanken Grotesk', value: 'Hanken Grotesk' },
    { label: 'Roboto', value: 'Roboto' },
    { label: 'Arial', value: 'Arial' },
  ];

  const types = [
    { label: 'Normal', value: '0' },
    { label: 'Heading 1', value: '1' },
    { label: 'Heading 2', value: '2' },
  ];

  return (
    <div className="advanced-tiptap" onClick={() => {
      setShowTextColorPicker(false);
      setShowHighlightColorPicker(false);
    }}>
      <div className="toolbar-container single-line">
        <div className="toolbar-row">
          {/* Selectors */}
          <div className="toolbar-select-wrapper">
             <select onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}>
               {fonts.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
             </select>
             <ChevronDown size={14} className="select-arrow" />
          </div>

          <div className="toolbar-select-wrapper type-select">
             <select onChange={(e) => {
               const level = e.target.value;
               if (level === '0') editor.chain().focus().setParagraph().run();
               else editor.chain().focus().toggleHeading({ level: parseInt(level) }).run();
             }}>
               {types.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
             </select>
             <ChevronDown size={14} className="select-arrow" />
          </div>

          <div className="font-size-input">
            <input 
              type="number" 
              value={fontSize} 
              onChange={(e) => {
                const val = e.target.value;
                setFontSizeState(val);
                editor.chain().focus().setFontSize(`${val}px`).run();
              }}
            />
          </div>

          <div className="divider-v"></div>

          {/* Formatting */}
          <div className="button-group">
            <button 
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'active' : ''}
              data-tooltip="Bold"
            >
              <Bold size={16} />
            </button>
            <button 
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'active' : ''}
              data-tooltip="Italic"
            >
              <Italic size={16} />
            </button>
            <button 
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive('underline') ? 'active' : ''}
              data-tooltip="Underline"
            >
              <UnderlineIcon size={16} />
            </button>
            <button 
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'active' : ''}
              data-tooltip="Strikethrough"
            >
              <Strikethrough size={16} />
            </button>
          </div>

          <div className="divider-v"></div>

          <div className="button-group relative">
            <button onClick={toggleTextColorPicker} data-tooltip="Text Color">
              <Palette size={16} />
            </button>
            {showTextColorPicker && (
              <ColorPickerModal 
                onSelect={(color) => { editor.chain().focus().setColor(color).run(); setShowTextColorPicker(false); }}
                onReset={() => { editor.chain().focus().unsetColor().run(); setShowTextColorPicker(false); }}
                onClose={() => setShowTextColorPicker(false)}
              />
            )}
            <button onClick={toggleHighlightColorPicker} data-tooltip="Highlight Color">
              <Highlighter size={16} />
            </button>
            {showHighlightColorPicker && (
              <ColorPickerModal 
                onSelect={(color) => { editor.chain().focus().setHighlight({ color }).run(); setShowHighlightColorPicker(false); }}
                onReset={() => { editor.chain().focus().unsetHighlight().run(); setShowHighlightColorPicker(false); }}
                onClose={() => setShowHighlightColorPicker(false)}
              />
            )}
          </div>

          <div className="divider-v"></div>

          <div className="button-group">
            <button 
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={editor.isActive({ textAlign: 'left' }) ? 'active' : ''}
              data-tooltip="Align Left"
            >
              <AlignLeft size={16} />
            </button>
            <button 
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={editor.isActive({ textAlign: 'center' }) ? 'active' : ''}
              data-tooltip="Align Center"
            >
              <AlignCenter size={16} />
            </button>
            <button 
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={editor.isActive({ textAlign: 'right' }) ? 'active' : ''}
              data-tooltip="Align Right"
            >
              <AlignRight size={16} />
            </button>
          </div>

          <div className="divider-v"></div>

          <div className="button-group">
            <button onClick={() => {
              const url = window.prompt('URL');
              if (url) editor.chain().focus().setLink({ href: url }).run();
            }} className={editor.isActive('link') ? 'active' : ''} data-tooltip="Link">
              <LinkIcon size={16} />
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()} data-tooltip="Horizontal Rule">
              <Minus size={16} />
            </button>
            <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'active' : ''} data-tooltip="Quote">
              <Quote size={16} />
            </button>
            <button onClick={() => editor.chain().focus().toggleCode().run()} className={editor.isActive('code') ? 'active' : ''} data-tooltip="Code">
              <Code size={16} />
            </button>
            <button onClick={() => {
              const url = window.prompt('Image URL');
              if (url) editor.chain().focus().setImage({ src: url }).run();
            }} data-tooltip="Image">
              <ImageIcon size={16} />
            </button>
            <button onClick={() => editor.chain().focus().undo().run()} data-tooltip="Undo">
              <Undo size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="editor-content-wrapper">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default SignatureEditor;
