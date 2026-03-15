import React, { useState } from 'react';
import './Sidebar.css';
import MiniSidebar from './components/MiniSidebar';
import MainSidebarPanel from './components/MainSidebarPanel';

const Sidebar = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="sidebar-root">
      <MiniSidebar 
        showProfileModal={showProfileModal} 
        setShowProfileModal={setShowProfileModal} 
      />
      <MainSidebarPanel />
    </div>
  );
};

export default Sidebar;
