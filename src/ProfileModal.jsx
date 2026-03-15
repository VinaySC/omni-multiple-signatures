import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileModal.css';

// SVGs
import emailAvailabilityIcon from './assets/icons/email-availability.svg';
import chatSupportIcon from './assets/icons/chat-support.svg';
import teamAvailabilityIcon from './assets/icons/assigned-to-me.svg'; // Using this as proxy
import settingsIcon from './assets/icons/settings.svg';
import logoutIcon from './assets/icons/sent.svg'; 

const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
    onClose();
  };
  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="profile-header">
          <div className="user-name">Vinaykumar C</div>
          <div className="user-email">vinaykumar.c@hiverhq.co.in</div>
        </div>

        <div className="profile-menu">
          <div className="menu-item toggle-item">
            <div className="menu-left">
              <img src={emailAvailabilityIcon} alt="" width="16" height="16" />
              <span>Available on Email</span>
            </div>
            <div className="switch active">
              <div className="switch-handle"></div>
            </div>
          </div>

          <div className="menu-item toggle-item">
            <div className="menu-left">
              <img src={chatSupportIcon} alt="" width="16" height="16" />
              <span>Available for Chat</span>
            </div>
            <div className="switch active">
              <div className="switch-handle"></div>
            </div>
          </div>

          <div className="menu-item">
            <div className="menu-left">
              <img src={teamAvailabilityIcon} alt="" width="16" height="16" />
              <span>Team availability</span>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="caret-icon"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>

          <div className="menu-item">
            <div className="menu-left">
              <img src={settingsIcon} alt="" width="16" height="16" />
              <span>Admin Panel</span>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="caret-icon"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>

          <div className="menu-item" onClick={handleSettingsClick}>
            <div className="menu-left">
               {/* Using SVG for sliders if available, else Lucide */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="item-icon-svg"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="2" y1="14" x2="6" y2="14"></line><line x1="10" y1="8" x2="14" y2="8"></line><line x1="18" y1="16" x2="22" y2="16"></line></svg>
              <span>My Settings</span>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="caret-icon"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>

          <div className="menu-item logout">
            <div className="menu-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="item-icon-svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              <span>Logout</span>
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <div className="brand-logo">
            <span className="brand-hiver">hiver</span>
            <span className="brand-divider">|</span>
            <span className="brand-omni">Omni</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
