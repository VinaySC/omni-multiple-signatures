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
  Link as LinkIcon, Undo, Redo, ChevronDown, Check
} from 'lucide-react';
import { Extension } from '@tiptap/core';
import { useEffect } from 'react';

import './ReplySection.css';

// Icons from assets/icons
import replyIcon from '../assets/icons/reply.svg';
import chevronDownIcon from '../assets/icons/s-chevron-down.svg';
import closeChipIcon from '../assets/icons/tabs-close.svg';
import kebabIcon from '../assets/icons/kebab-menu.svg';
import aiIcon from '../assets/icons/title-ai.svg';
import sDateIcon from '../assets/icons/s-date.svg';

// Icons from assets/icons/Read
import attachIcon from '../assets/icons/Read/attach.svg';
import discardIcon from '../assets/icons/Read/discard.svg';
import emojiIcon from '../assets/icons/Read/emoji.svg';
import saveIcon from '../assets/icons/Read/save.svg';
import shareIcon from '../assets/icons/Read/share.svg';
import signatureIcon from '../assets/icons/Read/signature.svg';
import templatesIcon from '../assets/icons/Read/templates.svg';
import textIcon from '../assets/icons/Read/text.svg';

// Custom Extension for Font Size (same as built earlier)
const FontSize = Extension.create({
  name: 'fontSize',
  addOptions() { return { types: ['textStyle'] }; },
  addAttributes() {
    return {
      fontSize: {
        default: null,
        parseHTML: element => element.style.fontSize.replace(/['"]+/g, ''),
        renderHTML: attributes => attributes.fontSize ? { style: `font-size: ${attributes.fontSize}` } : {},
      },
    };
  },
  addCommands() {
    return {
      setFontSize: fontSize => ({ chain }) => chain().setMark('textStyle', { fontSize }).run(),
      unsetFontSize: () => ({ chain }) => chain().setMark('textStyle', { fontSize: null }).run(),
    };
  },
});

const SignatureFlyout = ({ onSelect, selectedSignature }) => {
  const signatures = ['Signature 01', 'Signature 02', 'Signature 03', 'Signature 04'];
  
  return (
    <div className="signature-flyout" onClick={(e) => e.stopPropagation()}>
      <div 
        className={`flyout-item ${selectedSignature === null ? 'selected' : ''}`} 
        onClick={() => onSelect(null)}
      >
        <span>No signature</span>
        {selectedSignature === null && <Check size={14} className="selection-tick" />}
      </div>
      <div className="flyout-divider"></div>
      {signatures.map((sig, i) => (
        <div 
          key={i} 
          className={`flyout-item ${selectedSignature === sig ? 'selected' : ''}`} 
          onClick={() => onSelect(sig)}
        >
          <span>{sig}</span>
          {selectedSignature === sig && <Check size={14} className="selection-tick" />}
        </div>
      ))}
    </div>
  );
};

const SignatureExtension = Extension.create({
  name: 'signature',
  addGlobalAttributes() {
    return [
      {
        types: ['paragraph'],
        attributes: {
          'data-signature': {
            default: null,
            parseHTML: element => element.getAttribute('data-signature'),
            renderHTML: attributes => {
              if (!attributes['data-signature']) return {};
              return { 'data-signature': attributes['data-signature'] };
            },
          },
        },
      },
    ];
  },
});

const ReplySection = ({ recipientEmail, onDiscard }) => {
  const [activeTab, setActiveTab] = useState('templates');
  const [showFormatting, setShowFormatting] = useState(true);
  const [showSignatureFlyout, setShowSignatureFlyout] = useState(false);
  const [selectedSignature, setSelectedSignature] = useState(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      SignatureExtension,
      TextStyle,
      FontFamily,
      Color,
      Highlight.configure({ multicolor: true }),
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: 'Start with ‘/’ to select a email template' }),
      FontSize,
    ],
    content: '',
  });

  // Outside click to close flyout
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSignatureFlyout && !event.target.closest('.signature-flyout-wrapper')) {
        setShowSignatureFlyout(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSignatureFlyout]);

  const replaceSignature = useCallback((sigName) => {
    if (!editor) return;

    // Search for existing signature node
    const { state } = editor;
    let signaturePos = -1;
    let signatureNodeSize = 0;

    state.doc.descendants((node, pos) => {
      // Check if it's our signature paragraph
      if (node.type.name === 'paragraph' && node.attrs['data-signature'] === 'true') {
        signaturePos = pos;
        signatureNodeSize = node.nodeSize;
        return false; // Stop searching
      }
      return true;
    });

    if (signaturePos !== -1) {
      if (sigName) {
        // REPLACE existing signature
        editor.chain().focus()
          .deleteRange({ from: signaturePos, to: signaturePos + signatureNodeSize })
          .insertContent({
            type: 'paragraph',
            attrs: { 'data-signature': 'true' },
            content: [
              { type: 'text', text: `--` },
              { type: 'hardBreak' },
              { type: 'text', text: sigName }
            ]
          })
          .run();
      } else {
        // REMOVE existing signature (No signature selected)
        editor.chain().focus()
          .deleteRange({ from: signaturePos, to: signaturePos + signatureNodeSize })
          .run();
      }
    } else if (sigName) {
      // APPEND new signature if none exists
      editor.chain().focus()
        .insertContent({
          type: 'paragraph',
          attrs: { 'data-signature': 'true' },
          content: [
            { type: 'text', text: `--` },
            { type: 'hardBreak' },
            { type: 'text', text: sigName }
          ]
        })
        .run();
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="reply-section animate-in">
      {/* Header */}
      <div className="reply-header-container">
        <div className="reply-type-selector">
          <div className="reply-icon-wrapper">
             <img src={replyIcon} alt="" className="reply-icon-main" />
          </div>
          <span className="reply-type-text">Reply</span>
        </div>
      </div>

      {/* Recipients */}
      <div className="reply-recipients-row">
        <div className="recipients-left">
          <span className="recipients-label">To</span>
          <div className="recipient-chips">
            {recipientEmail && (
              <div className="recipient-chip">
                {recipientEmail}
                <button className="chip-close">
                  <img src={closeChipIcon} alt="Close" width="10" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="recipients-right">
          <span>Cc</span>
          <span>Bcc</span>
          <span className="edit-subject">Edit Subject</span>
        </div>
      </div>

      {/* Tiptap Editor Content */}
      <div className="reply-editor-wrapper">
        <EditorContent editor={editor} className="reply-tiptap-content" />
      </div>

      {/* Toolbars Container */}
      <div className="reply-footer-toolbars">
        {/* Top Formatting Bar */}
        <div className={`reply-formatting-bar ${showFormatting ? '' : 'hidden'}`}>
          <div className="format-group">
            {/* Font Select */}
            <div className="format-dropdown font-dropdown">
              <span>Serif</span>
              <img src={chevronDownIcon} alt="" width="12" />
            </div>
            {/* Size Select */}
            <div className="format-dropdown size-dropdown">
              <span>N</span>
              <img src={chevronDownIcon} alt="" width="12" />
            </div>
            {/* Color Select */}
            <div className="format-dropdown color-dropdown">
              <span>A</span>
              <img src={chevronDownIcon} alt="" width="12" />
            </div>
            
            <div className="format-divider-v"></div>

            <button 
              className={`format-btn ${editor.isActive('bold') ? 'active' : ''}`}
              onClick={() => editor.chain().focus().toggleBold().run()}
            >
              <Bold size={16} />
            </button>
            <button 
              className={`format-btn ${editor.isActive('italic') ? 'active' : ''}`}
              onClick={() => editor.chain().focus().toggleItalic().run()}
            >
              <Italic size={16} />
            </button>
            <button 
              className={`format-btn ${editor.isActive('underline') ? 'active' : ''}`}
              onClick={() => editor.chain().focus().toggleUnderline().run()}
            >
              <UnderlineIcon size={16} />
            </button>
            <button 
              className={`format-btn ${editor.isActive('strike') ? 'active' : ''}`}
              onClick={() => editor.chain().focus().toggleStrike().run()}
            >
              <Strikethrough size={16} />
            </button>

            <div className="format-divider-v"></div>

            <button 
              className={`format-btn ${editor.isActive({ textAlign: 'left' }) ? 'active' : ''}`}
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
            >
              <AlignLeft size={16} />
            </button>
            <button 
              className={`format-btn ${editor.isActive('link') ? 'active' : ''}`}
              onClick={() => {
                const url = window.prompt('URL');
                if (url) editor.chain().focus().setLink({ href: url }).run();
              }}
            >
              <LinkIcon size={16} />
            </button>
            <button className="format-btn">
              <img src={kebabIcon} alt="More" width="14" />
            </button>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="reply-action-bar">
          <div className="action-bar-left">
            <div className="action-icons-group">
              <button 
                className={`action-item-btn ${showFormatting ? 'active' : ''}`}
                onClick={() => setShowFormatting(!showFormatting)}
              >
                <img src={textIcon} alt="Text" width="16" />
              </button>
              <button className="action-item-btn">
                <img src={emojiIcon} alt="Emoji" width="16" />
              </button>
              <button className="action-item-btn">
                <img src={attachIcon} alt="Attach" width="16" />
              </button>
              <div className="signature-flyout-wrapper">
                <button 
                  className={`action-item-btn ${(showSignatureFlyout || selectedSignature !== null) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSignatureFlyout(!showSignatureFlyout);
                  }}
                  data-tooltip={showSignatureFlyout ? "" : (selectedSignature !== null ? "Edit signature" : "Insert Signature")}
                >
                  <img src={signatureIcon} alt="Signature" width="16" />
                </button>
                {showSignatureFlyout && (
                  <SignatureFlyout 
                    selectedSignature={selectedSignature}
                    onSelect={(sig) => {
                      replaceSignature(sig);
                      setSelectedSignature(sig);
                      setShowSignatureFlyout(false);
                    }}
                    onClose={() => setShowSignatureFlyout(false)}
                  />
                )}
              </div>
              <button className="action-item-btn">
                <img src={templatesIcon} alt="Templates" width="16" />
              </button>
            </div>
          </div>
          <div className="action-bar-right">
            <div className="utility-icons-group">
              <button className="action-item-btn">
                <img src={shareIcon} alt="Share" width="18" />
              </button>
              <button className="action-item-btn">
                <img src={saveIcon} alt="Save" width="18" />
              </button>
              <button className="action-item-btn" onClick={onDiscard}>
                <img src={discardIcon} alt="Discard" width="18" />
              </button>
            </div>
            <button className="reply-send-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplySection;
