import React, { useState } from 'react';
import './SignatureLibrary.css';
import emptyStateImg from '../assets/icons/empty-state.png';
import { ChevronDown, Plus, Pencil, Trash2 } from 'lucide-react';
import CreateSignatureModal from './CreateSignatureModal';
import DeleteSignatureModal from './DeleteSignatureModal';

const SignatureLibrary = ({ 
  signatures, 
  setSignatures, 
  defaultSignatureId, 
  setDefaultSignatureId 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSignature, setEditingSignature] = useState(null);
  const [hoveredSigId, setHoveredSigId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [signatureToDelete, setSignatureToDelete] = useState(null);

  const handleOpenModal = () => {
    setEditingSignature(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingSignature(null);
  };

  const handleSaveSignature = (signatureData) => {
    const newInboxes = signatureData.inboxes || (signatureData.inbox ? [signatureData.inbox] : []);

    setSignatures(prev => {
      const updatedList = prev.map(sig => {
        // If we're editing, skip the current signature for conflict check
        if (editingSignature && sig.id === editingSignature.id) return sig;

        let hasChange = false;
        let updatedInboxes = sig.inboxes ? [...sig.inboxes] : [];
        let updatedInbox = sig.inbox;

        // 1. Check and remove conflicts from inboxes array
        if (updatedInboxes.length > 0) {
          const filtered = updatedInboxes.filter(inbox => !newInboxes.includes(inbox));
          if (filtered.length !== updatedInboxes.length) {
            updatedInboxes = filtered;
            hasChange = true;
          }
        }

        // 2. Check and remove conflict from legacy singular inbox
        if (updatedInbox && newInboxes.includes(updatedInbox)) {
          updatedInbox = null;
          hasChange = true;
        }

        if (hasChange) {
          return {
            ...sig,
            inboxes: updatedInboxes.length > 0 ? updatedInboxes : null,
            inbox: updatedInbox
          };
        }
        return sig;
      });

      if (editingSignature) {
        return updatedList.map(s => s.id === editingSignature.id ? { ...s, ...signatureData } : s);
      } else {
        const newSignature = {
          ...signatureData,
          id: Date.now().toString(),
        };
        
        // Handle the first signature being default
        if (prev.length === 0) {
          setTimeout(() => setDefaultSignatureId(newSignature.id), 0);
        }
        
        return [...updatedList, newSignature];
      }
    });

    setIsModalOpen(false);
    setEditingSignature(null);
  };

  const handleEdit = (sig) => {
    setEditingSignature(sig);
    setIsModalOpen(true);
  };

  const openDeleteModal = (sig) => {
    setSignatureToDelete(sig);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSignatureToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (signatureToDelete) {
      const id = signatureToDelete.id;
      setSignatures(prev => prev.filter(s => s.id !== id));
      if (defaultSignatureId === id) {
        setDefaultSignatureId(null);
      }
      closeDeleteModal();
    }
  };

  return (
    <section className="settings-section">
      <div className="section-header-row">
        <div className="section-header">
          <h3 className="section-title">Signature</h3>
          <p className="section-desc">Customize and manage your email signature with ease.</p>
        </div>
        {signatures.length > 0 && (
          <button className="btn-create-secondary" onClick={handleOpenModal}>
            <Plus size={14} />
            <span>Create signature</span>
          </button>
        )}
      </div>

      <div className="signatures-container">
        {signatures.length === 0 ? (
          /* Empty State Section */
          <div className="empty-state-section">
            <div className="empty-state-content">
              <div className="empty-state-icon">
                <img src={emptyStateImg} alt="No signatures" />
              </div>
              <div className="empty-state-text">
                <h4 className="empty-state-title">No signatures yet</h4>
                <p className="empty-state-subtitle">
                  Create and switch between signatures for different inboxes
                </p>
              </div>
              <button className="btn-create-signature" onClick={handleOpenModal}>
                Create signature
              </button>
            </div>
          </div>
        ) : (
          /* Table View */
          <div className="saved-signatures">
            <div className="sig-table">
              <div className="sig-table-header">
                <div className="col-name">Signature name</div>
                <div className="col-inbox">Inbox default</div>
                <div className="col-actions"></div>
              </div>
              <div className="sig-table-body">
                {signatures.map((sig) => (
                  <div key={sig.id} className="sig-table-row">
                    <div 
                      className="col-name"
                      onMouseEnter={() => setHoveredSigId(sig.id)}
                      onMouseLeave={() => setHoveredSigId(null)}
                    >
                      <div className="sig-name-wrapper">
                        <span className="sig-name-text-wrapper">
                          <span className="sig-name-text">{sig.name}</span>
                          {hoveredSigId === sig.id && (
                            <div className="sig-preview-tooltip">
                              <div 
                                className="sig-preview-body"
                                dangerouslySetInnerHTML={{ __html: sig.content }}
                              />
                            </div>
                          )}
                        </span>
                        {sig.id === defaultSignatureId && (
                          <span className="default-tag">PRIMARY</span>
                        )}
                      </div>
                    </div>
                    <div className="col-inbox">
                      {sig.inboxes ? sig.inboxes.join(', ') : (sig.inbox || '-')}
                    </div>
                    <div className="col-actions">
                      <div className="action-btns">
                        <button className="btn-action" onClick={() => handleEdit(sig)}>
                          <Pencil size={14} />
                        </button>
                        <button className="btn-action" onClick={() => openDeleteModal(sig)}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Primary Signature Section */}
        <div className="default-signature-section">
          <div className="default-info">
            <h5 className="default-title">Primary signature</h5>
            <p className="default-subtitle">
              Primary signature is used when no default signature is assigned for an inbox
            </p>
          </div>
          <div className={`default-dropdown-wrapper ${signatures.length === 0 ? 'disabled' : ''}`}>
            <div className="dropdown-content">
              {signatures.length === 0 ? (
                <span className="dropdown-placeholder">No signatures yet</span>
              ) : (
                <select 
                  className="sig-select"
                  value={defaultSignatureId || ''}
                  onChange={(e) => setDefaultSignatureId(e.target.value || null)}
                >
                  <option value="">None</option>
                  {signatures.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              )}
            </div>
            <ChevronDown className="dropdown-icon" size={16} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <CreateSignatureModal 
          onClose={handleCloseModal}
          onSave={handleSaveSignature}
          initialData={editingSignature}
          signatures={signatures}
        />
      )}

      {/* Delete Confirmation Modal */}
      <DeleteSignatureModal 
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleConfirmDelete}
        signatureName={signatureToDelete?.name}
        isDefault={signatureToDelete?.id === defaultSignatureId}
      />
    </section>
  );
};

export default SignatureLibrary;
