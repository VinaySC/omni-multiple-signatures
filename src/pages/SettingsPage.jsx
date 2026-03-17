import React, { useState } from 'react';
import MiniSidebar from '../components/MiniSidebar';
import SignatureEditor from '../components/SignatureEditor';
import SignatureLibrary from '../components/SignatureLibrary';
import './SettingsPage.css';

// Icons
import editIcon from '../assets/icons/new-conversation.svg'; 
import inboxIcon from '../assets/icons/inbox-icon.svg';
import bellIcon from '../assets/icons/notification.svg';

const SettingsPage = ({ 
  signatures, 
  setSignatures, 
  defaultSignatureId, 
  setDefaultSignatureId 
}) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const handleEditorChange = () => {
    setIsDirty(true);
  };

  return (
    <div className="settings-page-root">
      <MiniSidebar 
        showProfileModal={showProfileModal} 
        setShowProfileModal={setShowProfileModal} 
      />
      
      <div className="settings-layout">
        <aside className="settings-subnav">
          <div className="subnav-header">
            <h2>My Settings</h2>
          </div>
          <div className="subnav-items">
            <div className="subnav-item active">
               <img src={editIcon} alt="" width="16" height="16" />
               <span>Compose Settings</span>
            </div>
            <div className="subnav-item">
               <img src={inboxIcon} alt="" width="16" height="16" />
               <span>Personal Inbox</span>
            </div>
            <div className="subnav-item">
               <img src={bellIcon} alt="" width="16" height="16" />
               <span>Notifications Settings</span>
            </div>
          </div>
        </aside>

        <div className="settings-content-wrapper">
          <main className="settings-main-content">
            <header className="content-header">
              <h1>Compose settings</h1>
            </header>

            <section className="settings-section">
              <SignatureLibrary 
                signatures={signatures}
                setSignatures={setSignatures}
                defaultSignatureId={defaultSignatureId}
                setDefaultSignatureId={setDefaultSignatureId}
              />
            </section>

            <section className="settings-section">
              <div className="section-header">
                <h3 className="section-title">Undo Send</h3>
                <p className="section-desc">Undo email sending within your preferred timeframe after pressing Send.</p>
              </div>
              
              <div className="select-box">
                <span>Send immediately (Undo)</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </section>
          </main>
          
          <footer className="settings-footer">
            <button className="btn-save" disabled={!isDirty}>Save</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
