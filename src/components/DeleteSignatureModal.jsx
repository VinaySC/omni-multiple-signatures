import React from 'react';
import './DeleteSignatureModal.css';
import { X } from 'lucide-react';

const DeleteSignatureModal = ({ isOpen, onClose, onConfirm, signatureName, isDefault }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container delete-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Delete signature</h2>
          <button className="btn-close" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="modal-content">
          <p className="delete-warning">
            {isDefault ? (
              <>
                <span className="sig-name-semibold">{signatureName}</span> is your current default signature. You’ll need to select another default after deleting it.
              </>
            ) : (
              <>
                Are you sure you want to delete <span className="sig-name-semibold">{signatureName}</span>? This action cannot be undone.
              </>
            )}
          </p>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button 
            className="btn-delete" 
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteSignatureModal;
