import React, { useState, useEffect } from 'react';
import './ConversationDetail.css';
import ReplySection from './ReplySection';

// Icons
import titleUnread from '../assets/icons/title-unreaed.svg';
import titleMailbox from '../assets/icons/title-mailbox.svg';
import titlePrint from '../assets/icons/title-print.svg';
import titleAi from '../assets/icons/title-ai.svg';
import replyIcon from '../assets/icons/reply.svg';
import replyAllIcon from '../assets/icons/reply-all.svg';
import forwardIcon from '../assets/icons/forward.svg';
import kebabIcon from '../assets/icons/kebab-menu.svg';
import smallReplyIcon from '../assets/icons/small-reply.svg';
import smallForwardIcon from '../assets/icons/small-forward.svg';
import chevronDownIcon from '../assets/icons/s-chevron-down.svg';

const ConversationDetail = ({ conversation }) => {
  const [expandedIds, setExpandedIds] = useState([]);
  const [activeReplyId, setActiveReplyId] = useState(null);

  useEffect(() => {
    if (conversation && conversation.messages.length > 0) {
      setExpandedIds([conversation.messages[0].id]);
      setActiveReplyId(null);
    }
  }, [conversation]);

  const toggleExpand = (id) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(mid => mid !== id) : [...prev, id]
    );
  };

  const handleReplyAll = (e, id) => {
    e.stopPropagation();
    setActiveReplyId(prev => prev === id ? null : id);
  };

  if (!conversation) return <div className="conversation-detail">Select a conversation</div>;

  return (
    <div className="conversation-detail">
      {/* Upper Bar */}
      <div className="detail-header">
        <div className="header-left">
          <button className="icon-btn">
             <img src={titleUnread} alt="Unread" width="16" height="16" />
          </button>
          <button className="icon-btn">
             <img src={titleMailbox} alt="Mailbox" width="16" height="16" />
          </button>
          <button className="icon-btn">
             <img src={titlePrint} alt="Print" width="16" height="16" />
          </button>
          <button className="icon-btn">
             <img src={titleAi} alt="AI" width="16" height="16" />
          </button>
        </div>
      </div>

      {/* Scrollable Area */}
      <div className="detail-scroll-area">
        {/* Subject Bar */}
        <div className="subject-bar-detail">
          <h1 className="subject-text-large">{conversation.subject}</h1>
          <div className="subject-actions">
             <button className="icon-btn">
               <img src={replyIcon} alt="Reply" width="16" height="16" />
             </button>
             <button className="icon-btn" onClick={(e) => handleReplyAll(e, expandedIds[0])}>
               <img src={replyAllIcon} alt="Reply All" width="16" height="16" />
             </button>
             <button className="icon-btn">
               <img src={forwardIcon} alt="Forward" width="16" height="16" />
             </button>
          </div>
        </div>
  
        {/* Messages Container */}
        <div className="messages-container">
          {conversation.messages.map((msg) => {
            const isExpanded = expandedIds.includes(msg.id);
            const isReplying = activeReplyId === msg.id;
  
            return (
              <React.Fragment key={msg.id}>
                {isReplying && (
                  <ReplySection 
                    recipientEmail={msg.email} 
                    onDiscard={(e) => {
                      e.stopPropagation();
                      setActiveReplyId(null);
                    }}
                  />
                )}
                
                {isExpanded ? (
                  <div className="convo-card">
                    <div className="convo-card-header">
                      <div className="convo-avatar" style={{ backgroundColor: msg.avatarColor }}>
                        <span>{msg.initial}</span>
                      </div>
                      <div className="convo-info" onClick={() => toggleExpand(msg.id)} style={{ cursor: 'pointer' }}>
                        <h3 className="convo-email">{msg.email}</h3>
                        <div className="convo-to">
                          To: support@acme.com <img src={chevronDownIcon} alt="Expand" width="14" height="14" style={{ marginLeft: 4 }} />
                        </div>
                      </div>
                      <div className="header-actions-right">
                        <span className="convo-time">{msg.time}</span>
                        <button className="icon-btn" onClick={(e) => handleReplyAll(e, msg.id)}>
                           <img src={replyAllIcon} alt="Reply All" width="16" height="16" />
                        </button>
                        <button className="icon-btn">
                           <img src={kebabIcon} alt="More" width="16" height="16" />
                        </button>
                      </div>
                    </div>
                    <div className="convo-body">
                      {msg.body.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}<br />
                        </React.Fragment>
                      ))}
                    </div>
                    <button className="btn-more-content">...</button>
                    <div className="convo-actions">
                      <button className="convo-btn" onClick={(e) => handleReplyAll(e, msg.id)}>
                        <img src={smallReplyIcon} alt="" width="14" height="14" /> Reply
                      </button>
                      <button className="convo-btn">
                        <img src={smallForwardIcon} alt="" width="14" height="14" /> Forward
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="convo-card-collapsed" onClick={() => toggleExpand(msg.id)}>
                    <div className="convo-avatar" style={{ backgroundColor: msg.avatarColor }}>
                      <span>{msg.initial}</span>
                    </div>
                    <div className="convo-info">
                      <h3 className="convo-email">{msg.email}</h3>
                      <p className="collapsed-text">{msg.body.substring(0, 80)}...</p>
                    </div>
                    <span className="convo-time">{msg.time}</span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConversationDetail;
