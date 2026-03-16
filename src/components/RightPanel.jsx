import React from 'react';
import './RightPanel.css';

// Icons
import tabsMail from '../assets/icons/tabs-mail.svg';
import tabsApps from '../assets/icons/tabs-apps.svg';
import tabsClose from '../assets/icons/tabs-close.svg';
import sAssigned from '../assets/icons/s-assigned.svg';
import sStatus from '../assets/icons/s-status.svg';
import sTags from '../assets/icons/s-tags.svg';
import sDate from '../assets/icons/s-date.svg';
import sPriority from '../assets/icons/s-priority.svg';
import sText from '../assets/icons/s-text.svg';
import addIcon from '../assets/icons/add-icon.svg';
import newConversationIcon from '../assets/icons/new-conversation.svg';
import notificationIcon from '../assets/icons/notification.svg';

const RightPanel = () => {
  return (
    <div className="right-panel">
      {/* Connector Tabs */}
      <div className="panel-tabs">
        <div className="tabs-left">
          <div className="panel-tab active">
            <img src={tabsMail} alt="Mail" width="16" height="16" />
          </div>
          <div className="panel-tab">
            <img src={tabsApps} alt="Apps" width="16" height="16" />
          </div>
        </div>
        <button className="icon-btn">
          <img src={tabsClose} alt="Close" width="16" height="16" />
        </button>
      </div>

      <div className="panel-scroll-content">
        {/* Sales Inbox Section */}
        <div className="section-box">
          <h2 className="section-title-panel">Sales Inbox</h2>
          <div className="property-list">
            <div className="property-item">
              <div className="property-label">
                <img src={sAssigned} alt="" width="14" height="14" /> Assigned
              </div>
              <div className="property-value">Jakob Bergson</div>
            </div>
            <div className="property-item">
              <div className="property-label">
                <img src={sStatus} alt="" width="14" height="14" /> Status
              </div>
              <div className="status-tag">
                <div className="status-dot">
                  <div className="status-dot-inner"></div>
                </div>
                <div className="property-value">Pending</div>
              </div>
            </div>
            <div className="property-item">
              <div className="property-label">
                <img src={sTags} alt="" width="14" height="14" /> Tags
              </div>
              <div className="property-value placeholder">
                <img src={addIcon} alt="" width="16" height="16" style={{ marginRight: 8, verticalAlign: 'middle' }} />
                Add tags
              </div>
            </div>
            <div className="property-item">
              <div className="property-label">
                <img src={sDate} alt="" width="14" height="14" /> Due Date
              </div>
              <div className="property-value">25 May 2025</div>
            </div>
            <div className="property-item">
              <div className="property-label">
                <img src={sPriority} alt="" width="14" height="14" /> Priority
              </div>
              <div className="property-value">High</div>
            </div>
            <div className="property-item" style={{ height: 'auto', alignItems: 'flex-start', paddingTop: 8 }}>
              <div className="property-label">
                <img src={sText} alt="" width="14" height="14" /> Note
              </div>
              <div className="property-value" style={{ whiteSpace: 'normal' }}>This is a high MRR customer</div>
            </div>
          </div>
        </div>

        {/* Activity Panel */}
        <div className="section-box" style={{ borderBottom: 'none' }}>
          <div className="activity-tabs">
            <div className="activity-tab active">All Activities</div>
            <div className="activity-tab">Notes</div>
          </div>
          
          <div className="note-input">
            <img src={addIcon} alt="" width="16" height="16" />
            <span className="note-placeholder">Add a note</span>
          </div>

          <div className="timeline">
            <div className="timeline-date-divider">
              <div className="divider-line"></div>
              <div className="date-pill">Today</div>
              <div className="divider-line"></div>
            </div>

            <div className="activity-card">
              <div className="activity-user">Anna Kennedy</div>
              <p className="activity-msg">Team, could we check what error was received?</p>
              <span className="activity-time">01:02 PM</span>
            </div>

            <div className="system-event">
              <img src={newConversationIcon} alt="" width="14" height="14" className="event-icon" />
              <div className="convo-info">
                 <p className="event-text">New conversation received in support</p>
                 <span className="activity-time">01:02 PM</span>
              </div>
            </div>

            <div className="timeline-date-divider">
              <div className="divider-line"></div>
              <div className="date-pill">Jun 27, 2025</div>
              <div className="divider-line"></div>
            </div>

            <div className="system-event">
              <img src={newConversationIcon} alt="" width="14" height="14" className="event-icon" />
              <div className="convo-info">
                 <p className="event-text">New conversation received in support</p>
                 <span className="activity-time">01:02 PM</span>
              </div>
            </div>

            <div className="system-event">
              <img src={notificationIcon} alt="" width="14" height="14" className="event-icon" />
              <div className="convo-info">
                 <p className="event-text">Main SLA: First response is Overdue.</p>
                 <span className="activity-time">01:02 PM</span>
              </div>
            </div>

            <div className="system-event">
              <img src={sText} alt="" width="14" height="14" className="event-icon" />
              <div className="convo-info">
                 <p className="event-text">Assigned to Shankar Hiver through auto assignment</p>
                 <span className="activity-time">01:02 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
