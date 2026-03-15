import React from 'react';

// Icons
import allMailIcon from '../assets/icons/all-mail.svg';
import allViewsIcon from '../assets/icons/all-views.svg';
import assignedToMeIcon from '../assets/icons/assigned-to-me.svg';
import draftIcon from '../assets/icons/draft.svg';
import inboxIcon from '../assets/icons/inbox-icon.svg';
import mineIcon from '../assets/icons/mine.svg';
import newConversationIcon from '../assets/icons/new-conversation.svg';
import sentIcon from '../assets/icons/sent.svg';
import tagsIcon from '../assets/icons/tags.svg';
import unassignedIcon from '../assets/icons/unassigned.svg';

const MainSidebarPanel = () => {
  return (
    <div className="side-nav-expanded">
      <div className="panel-header-top">
        <div className="header-row">
          <h1>Conversations</h1>
          <div className="header-actions">
            <img src={newConversationIcon} alt="New" width="16" height="16" />
          </div>
        </div>
        <div className="search-container">
          <div className="search-box">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search conversations" />
          </div>
        </div>
      </div>

      <div className="sidebar-content">
        <div className="section-title">Shared Inbox</div>
        
        <div className="nav-group">
          <div className="nav-item">
            <div className="nav-content">
              <img src={assignedToMeIcon} alt="" width="16" height="16" className="item-icon" />
              <span>Assigned to me</span>
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-content">
              <img src={inboxIcon} alt="" width="16" height="16" className="item-icon" />
              <span>Support</span>
            </div>
          </div>

          <div className="nav-group-nested">
            <div className="nav-item active">
              <div className="nav-content">
                <img src={mineIcon} alt="" width="16" height="16" className="item-icon" />
                <span>Mine</span>
              </div>
              <span className="count">24</span>
            </div>
            
            <div className="nav-item">
              <div className="nav-content">
                <img src={unassignedIcon} alt="" width="16" height="16" className="item-icon" />
                <span>Unassigned</span>
              </div>
              <span className="count">9</span>
            </div>

            <div className="nav-item">
              <div className="nav-content">
                <img src={tagsIcon} alt="" width="16" height="16" className="item-icon" />
                <span>Tags</span>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-content">
                <img src={allViewsIcon} alt="" width="16" height="16" className="item-icon" />
                <span>All Views</span>
              </div>
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-content">
              <img src={inboxIcon} alt="" width="16" height="16" className="item-icon" />
              <span>Finance</span>
            </div>
          </div>
        </div>

        <div className="section-title margin-top">More</div>
        
        <div className="nav-group">
          <div className="nav-item">
            <div className="nav-content">
              <img src={sentIcon} alt="" width="16" height="16" className="item-icon" />
              <span>Sent</span>
            </div>
            <span className="count">2</span>
          </div>

          <div className="nav-item">
            <div className="nav-content">
              <img src={draftIcon} alt="" width="16" height="16" className="item-icon" />
              <span>Draft</span>
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-content">
              <img src={allMailIcon} alt="" width="16" height="16" className="item-icon" />
              <span>All Mail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSidebarPanel;
