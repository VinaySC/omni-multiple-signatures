import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronDown } from 'lucide-react';
import SignatureEditor from './SignatureEditor';
import './CreateSignatureModal.css';

const CreateSignatureModal = ({ onClose, onSave, initialData, signatures = [] }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [selectedInboxes, setSelectedInboxes] = useState(initialData?.inboxes || (initialData?.inbox ? [initialData.inbox] : []));
  const [tempInboxes, setTempInboxes] = useState([...selectedInboxes]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef(null);
  const [isValid, setIsValid] = useState(false);
  const [nameError, setNameError] = useState('');
  const [inboxWarning, setInboxWarning] = useState('');

  // Validation logic: Enable save if name and content are not empty + direct error states
  useEffect(() => {
    const isNameEmpty = name.trim().length === 0;
    
    // Check for duplicate name
    const isDuplicateName = signatures.some(s => 
      s.name.toLowerCase() === name.trim().toLowerCase() && s.id !== initialData?.id
    );

    if (isDuplicateName) {
      setNameError('This name is already in use. Please use a different name.');
    } else {
      setNameError('');
    }

    // Tiptap content usually has <p></p> when empty, check for actual text
    const strippedContent = content.replace(/<[^>]*>?/gm, '').trim();
    const isContentValid = strippedContent.length > 0;
    
    setIsValid(!isNameEmpty && !isDuplicateName && isContentValid);
  }, [name, content, signatures, initialData]);

  // Inbox warning logic: Check if any of the selected inboxes already has a signature
  useEffect(() => {
    if (tempInboxes.length > 0) {
      const conflicts = tempInboxes.map(inbox => {
        const existingSig = signatures.find(s => 
          s.inboxes?.includes(inbox) && s.id !== initialData?.id ||
          s.inbox === inbox && s.id !== initialData?.id
        );
        return existingSig ? { inbox, sigName: existingSig.name } : null;
      }).filter(Boolean);

      if (conflicts.length > 0) {
        const conflictNames = conflicts.map(c => `"${c.inbox}" (already has "${c.sigName}")`).join(', ');
        setInboxWarning(`The following inboxes already have a signature: ${conflictNames}. Saving this will replace them.`);
      } else {
        setInboxWarning('');
      }
    } else {
      setInboxWarning('');
    }
  }, [tempInboxes, signatures, initialData]);

  // Handle dropdown position calculation
  useEffect(() => {
    if (isDropdownOpen && triggerRef.current) {
      const updatePosition = () => {
        const rect = triggerRef.current.getBoundingClientRect();
        setDropdownPos({
          top: rect.top - 4,
          left: rect.left,
          width: rect.width
        });
      };

      updatePosition();
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isDropdownOpen]);

  const handleInboxToggle = (inbox) => {
    setTempInboxes(prev => 
      prev.includes(inbox) 
        ? prev.filter(i => i !== inbox) 
        : [...prev, inbox]
    );
  };

  const handleConfirmInboxes = () => {
    setSelectedInboxes([...tempInboxes]);
    setIsDropdownOpen(false);
  };

  const handleCancelInboxes = () => {
    setTempInboxes([...selectedInboxes]);
    setIsDropdownOpen(false);
  };

  const handleSave = () => {
    if (isValid) {
      onSave({
        name: name.trim(),
        content: content,
        inboxes: selectedInboxes.length > 0 ? selectedInboxes : null,
        // Keep single inbox for backward compatibility if needed, but primary is now inboxes
        inbox: selectedInboxes.length > 0 ? selectedInboxes[0] : null
      });
    }
  };

  const availableInboxes = ["Support", "Finance", "Shipping", "Refund", "IT Support"];

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
                className={`form-input ${nameError ? 'has-error' : ''}`} 
                placeholder="Signature name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              {nameError && <span className="validation-error">{nameError}</span>}
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
            <div className="multi-select-container">
              <div 
                ref={triggerRef}
                className={`multi-select-trigger ${isDropdownOpen ? 'active' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="selected-labels">
                  {selectedInboxes.length > 0 
                    ? selectedInboxes.join(', ') 
                    : 'Select inboxes'}
                </div>
                <ChevronDown className="select-arrow" size={16} />
              </div>

              {isDropdownOpen && createPortal(
                <div 
                  className="multi-select-dropdown" 
                  style={{ 
                    position: 'fixed',
                    top: dropdownPos.top,
                    left: dropdownPos.left,
                    width: dropdownPos.width,
                    transform: 'translateY(-100%)', // Shift up by its own height
                    zIndex: 2000 
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="dropdown-header">
                    Select Inboxes
                  </div>
                  <div className="dropdown-list">
                    {availableInboxes.map(inbox => (
                      <div 
                        key={inbox} 
                        className={`dropdown-item ${tempInboxes.includes(inbox) ? 'selected' : ''}`}
                        onClick={() => handleInboxToggle(inbox)}
                      >
                        <div className={`checkbox-custom ${tempInboxes.includes(inbox) ? 'checked' : ''}`}>
                          {tempInboxes.includes(inbox) && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 4.5L3.5 6.5L8.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <span className="inbox-name">{inbox}</span>
                      </div>
                    ))}
                  </div>
                  <div className="dropdown-footer">
                    <button className="btn-dropdown-cancel" onClick={handleCancelInboxes}>Cancel</button>
                    <button className="btn-dropdown-confirm" onClick={handleConfirmInboxes}>Confirm</button>
                  </div>
                </div>,
                document.body
              )}
            </div>
            {inboxWarning && <span className="validation-warning">{inboxWarning}</span>}
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
