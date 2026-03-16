import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import SignatureEditor from './SignatureEditor';
import './CreateSignatureModal.css';

const CreateSignatureModal = ({ onClose, onSave, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [selectedInbox, setSelectedInbox] = useState(initialData?.inbox || '');
  const [isValid, setIsValid] = useState(false);

  // Validation logic: Enable save if name and content are not empty
  useEffect(() => {
    const isNameValid = name.trim().length > 0;
    // Tiptap content usually has <p></p> when empty, check for actual text
    const strippedContent = content.replace(/<[^>]*>?/gm, '').trim();
    const isContentValid = strippedContent.length > 0;
    
    setIsValid(isNameValid && isContentValid);
  }, [name, content]);

  const handleSave = () => {
    if (isValid) {
      onSave({
        name: name.trim(),
        content: content,
        inbox: selectedInbox || null
      });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{initialData ? 'Edit signature' : 'New signature'}</h2>
          <button className="btn-close" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="modal-content">
          {/* Signature Name */}
          <div className="form-group">
            <label className="form-label">Signature name</label>
            <div className="input-wrapper">
              <input 
                type="text" 
                className="form-input" 
                placeholder="Signature name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          {/* Signature Content (RTE) */}
          <div className="form-group">
            <label className="form-label">Signature</label>
            <div className="rte-container">
              <SignatureEditor 
                initialContent={content}
                onChange={setContent} 
              />
            </div>
          </div>

          {/* Inbox Mapping (Optional) */}
          <div className="form-group">
            <label className="form-label">Set this signature as a default for this inbox (optional)</label>
            <div className="select-wrapper">
              <select 
                className="form-select"
                value={selectedInbox}
                onChange={(e) => setSelectedInbox(e.target.value)}
              >
                <option value="" disabled hidden>Select an inbox</option>
                <option value="General">General</option>
                <option value="Support">Support</option>
                <option value="Sales">Sales</option>
              </select>
              <ChevronDown className="select-arrow" size={16} />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button 
            className="btn-primary" 
            disabled={!isValid}
            onClick={handleSave}
          >
            {initialData ? 'Save changes' : 'Save signature'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSignatureModal;
