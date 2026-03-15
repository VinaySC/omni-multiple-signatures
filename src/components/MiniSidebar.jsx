import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileModal from '../ProfileModal';

// SVG Icons from local assets
import analyticsIcon from '../assets/icons/analytics.svg';
import chatSupportIcon from '../assets/icons/chat-support.svg';
import helpIcon from '../assets/icons/help.svg';
import hiverLogo from '../assets/icons/hiver-logo.svg';
import inboxesIcon from '../assets/icons/inboxes.svg';
import notificationIcon from '../assets/icons/notification.svg';
import settingsIcon from '../assets/icons/settings.svg';

const MiniSidebar = ({ showProfileModal, setShowProfileModal }) => {
  const navigate = useNavigate();

  return (
    <div className="mini-sidebar">
      <div className="mini-top">
        <div className="logo-container" onClick={() => navigate('/')}>
          <img src={hiverLogo} alt="Hiver" width="28" height="28" />
        </div>
        <div className="mini-nav">
          <div className="mini-item active">
             <img src={inboxesIcon} alt="Inboxes" width="16" height="16" />
          </div>
          <div className="mini-item notification-wrapper">
            <img src={notificationIcon} alt="Notifications" width="16" height="16" />
            <div className="notification-dot"></div>
          </div>
          <div className="mini-item">
            <img src={analyticsIcon} alt="Analytics" width="16" height="16" />
          </div>
          <div className="mini-item">
            <img src={settingsIcon} alt="Settings" width="16" height="16" />
          </div>
        </div>
      </div>
      <div className="mini-bottom">
         <div className="mini-item">
           <img src={helpIcon} alt="Help" width="16" height="16" />
         </div>
         <div className="mini-item">
           <img src={chatSupportIcon} alt="Support" width="16" height="16" />
         </div>
         <div className="avatar-container" onClick={() => setShowProfileModal(!showProfileModal)}>
           <div className="avatar">A</div>
           <div className="status-indicator online"></div>
           {showProfileModal && <ProfileModal onClose={() => setShowProfileModal(false)} />}
         </div>
      </div>
    </div>
  );
};

export default MiniSidebar;
