import React from 'react';
import './ConversationList.css';

// Icons
import sideBarIcon from '../assets/icons/side-bar-icon.svg';
import selectIcon from '../assets/icons/select-icon.svg';
import filterIcon from '../assets/icons/filter-icon.svg';

const ConversationList = ({ conversations, selectedId, onSelect, activeFilter }) => {
  return (
    <div className="conversation-list">
      <div className="subject-bar">
        <div className="subject-left">
          <button className="icon-btn">
            <img src={sideBarIcon} alt="Sidebar" width="16" height="16" />
          </button>
          <div className="subject-title-wrapper">
            <div className="vertical-divider"></div>
            <h2 className="subject-title">{activeFilter.type}</h2>
          </div>
        </div>
        <div className="subject-right">
          <button className="icon-btn">
            <img src={selectIcon} alt="Select" width="16" height="16" />
          </button>
          <button className="icon-btn">
            <img src={filterIcon} alt="Filter" width="16" height="16" />
          </button>
        </div>
      </div>

      <div className="card-list">
        {conversations.map((convo) => (
          <div 
            key={convo.id}
            className={`email-card ${selectedId === convo.id ? 'active' : ''}`}
            onClick={() => onSelect(convo.id)}
          >
            <div className="card-header">
              <div className="card-sender-info">
                <div className="avatar" style={{ backgroundColor: convo.avatarColor }}>
                  <span className="avatar-text">{convo.initial}</span>
                </div>
                <div className="sender-names">
                  {convo.sender.split('.. ').map((name, i) => (
                    <span key={i} className="sender-name-primary">{name}</span>
                  ))}
                  {convo.threadCount && <span className="thread-count">{convo.threadCount}</span>}
                </div>
              </div>
              <span className="card-time">{convo.time}</span>
            </div>
            <div className="card-body">
              <div className="subject-line">
                <h3 className="subject-text">{convo.subject}</h3>
              </div>
              <p className="preview-text">{convo.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
