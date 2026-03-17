import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import ConversationList from './components/ConversationList';
import ConversationDetail from './components/ConversationDetail';
import RightPanel from './components/RightPanel';
import SettingsPage from './pages/SettingsPage';
import { useState } from 'react';

const conversationsData = [
  // --- Support: Mine (2) ---
  {
    id: 1,
    inbox: 'Support',
    type: 'Mine',
    sender: 'John Smith',
    initial: 'J',
    avatarColor: '#d04b4f',
    time: 'Feb 4, 02:45 PM',
    subject: 'Issue with the app',
    preview: 'I am seeing a blank screen after login.',
    threadCount: 3,
    messages: [
      {
        id: 'm1',
        sender: 'John Smith',
        email: 'john.smith@gmail.com',
        time: 'Feb 4, 01:20 PM',
        initial: 'J',
        avatarColor: '#d04b4f',
        body: 'Hi Support,\n\nI am experiencing a blank screen after logging in to the mobile app. Can you please help?'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 4, 02:00 PM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Hello John,\n\nI am looking into this. Could you let me know which device you are using?'
      },
      {
        id: 'm3',
        sender: 'John Smith',
        email: 'john.smith@gmail.com',
        time: 'Feb 4, 02:45 PM',
        initial: 'J',
        avatarColor: '#d04b4f',
        body: 'I am using an iPhone 15 Pro with the latest iOS update.'
      }
    ]
  },
  {
    id: 2,
    inbox: 'Support',
    type: 'Mine',
    sender: 'Alice Johnson',
    initial: 'A',
    avatarColor: '#ac80b7',
    time: 'Feb 4, 11:30 AM',
    subject: 'Refund status',
    preview: 'Has the refund been processed yet?',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Alice Johnson',
        email: 'alice.j@outlook.com',
        time: 'Feb 4, 10:00 AM',
        initial: 'A',
        avatarColor: '#ac80b7',
        body: 'Hello,\n\nI requested a refund last week but haven\'t seen it in my account yet. Any updates?'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 4, 11:30 AM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Hi Alice,\n\nI\'ve checked the status and the refund was approved yesterday. It should appear in your account within 3-5 business days.'
      }
    ]
  },

  // --- Support: Unassigned (4) ---
  {
    id: 4,
    inbox: 'Support',
    type: 'Unassigned',
    sender: 'Emily Watson',
    initial: 'E',
    avatarColor: '#f59e0b',
    time: 'Feb 4, 05:10 PM',
    subject: 'Billing inquiry',
    preview: 'Why was I charged twice this month?',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Emily Watson',
        email: 'emily.w@designcorp.com',
        time: 'Feb 4, 04:00 PM',
        initial: 'E',
        avatarColor: '#f59e0b',
        body: 'Hi,\n\nI noticed two separate charges from your service on my bank statement this morning. Can you please explain why?'
      },
      {
        id: 'm2',
        sender: 'System Bot',
        email: 'no-reply@acme.com',
        time: 'Feb 4, 04:05 PM',
        initial: 'S',
        avatarColor: '#94a3b8',
        body: 'Thank you for your inquiry. A support representative will be with you shortly to look into this billing discrepancy.'
      }
    ]
  },
  {
    id: 5,
    inbox: 'Support',
    type: 'Unassigned',
    sender: 'David Chen',
    initial: 'D',
    avatarColor: '#6366f1',
    time: 'Feb 4, 01:20 PM',
    subject: 'API documentation question',
    preview: 'How do I authenticate with the latest version?',
    threadCount: 3,
    messages: [
      {
        id: 'm1',
        sender: 'David Chen',
        email: 'david.chen@tech.io',
        time: 'Feb 4, 10:00 AM',
        initial: 'D',
        avatarColor: '#6366f1',
        body: 'Hello,\n\nI\'m migrating to version 2 of your API but I\'m getting an auth error. The docs seem to only cover version 1.'
      },
      {
        id: 'm2',
        sender: 'Support Bot',
        email: 'support-bot@acme.com',
        time: 'Feb 4, 10:05 AM',
        initial: 'S',
        avatarColor: '#94a3b8',
        body: 'We have received your message. A technical support specialist will review your inquiry about API v2 authentication.'
      },
      {
        id: 'm3',
        sender: 'David Chen',
        email: 'david.chen@tech.io',
        time: 'Feb 4, 01:20 PM',
        initial: 'D',
        avatarColor: '#6366f1',
        body: 'Any update on this? I\'m currently blocked on my development task.'
      }
    ]
  },
  {
    id: 6,
    inbox: 'Support',
    type: 'Unassigned',
    sender: 'Sophia Lee',
    initial: 'S',
    avatarColor: '#ec4899',
    time: 'Feb 3, 11:45 AM',
    subject: 'Integration with Slack',
    preview: 'Is it possible to receive notifications in Slack?',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Sophia Lee',
        email: 'sophia.lee@startup.com',
        time: 'Feb 3, 09:30 AM',
        initial: 'S',
        avatarColor: '#ec4899',
        body: 'Hi Team,\n\nWe love your tool! We were wondering if there\'s an easy way to get real-time alerts in our Slack channels when something happens?'
      },
      {
        id: 'm2',
        sender: 'Support Bot',
        email: 'support-bot@acme.com',
        time: 'Feb 3, 09:35 AM',
        initial: 'S',
        avatarColor: '#94a3b8',
        body: 'Thank you for your feedback! We do have a Slack integration. Our team will send you the setup guide shortly.'
      }
    ]
  },
  {
    id: 13,
    inbox: 'Support',
    type: 'Unassigned',
    sender: 'Mark Wilson',
    initial: 'M',
    avatarColor: '#8b5cf6',
    time: 'Feb 2, 02:10 PM',
    subject: 'Login timeout issue',
    preview: 'I am getting logged out every 5 minutes.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Mark Wilson',
        email: 'mark@wilson.com',
        time: 'Feb 2, 12:00 PM',
        initial: 'M',
        avatarColor: '#8b5cf6',
        body: 'Hi,\n\nYour app keeps logging me out every few minutes today. Is there an issue with the session settings?'
      },
      {
        id: 'm2',
        sender: 'System Bot',
        email: 'system@acme.com',
        time: 'Feb 2, 12:05 PM',
        initial: 'S',
        avatarColor: '#94a3b8',
        body: 'A support technician has been assigned to investigate your session timeout issue.'
      }
    ]
  },

  // --- Finance: Mine (5) ---
  {
    id: 7,
    inbox: 'Finance',
    type: 'Mine',
    sender: 'Robert Brown',
    initial: 'R',
    avatarColor: '#5398cf',
    time: 'Feb 4, 09:00 AM',
    subject: 'Quarterly Audit Report',
    preview: 'Please find the draft audit report for Q4.',
    threadCount: 3,
    messages: [
      {
        id: 'm1',
        sender: 'Robert Brown',
        email: 'robert.b@finance-audit.com',
        time: 'Feb 3, 05:00 PM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Hi Ruben,\n\nI have completed the initial draft of the Q4 audit. Please review the attached findings.'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 4, 08:30 AM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Thanks Robert. I noticed a small discrepancy in the tax section on page 4. Could you double check that?'
      },
      {
        id: 'm3',
        sender: 'Robert Brown',
        email: 'robert.b@finance-audit.com',
        time: 'Feb 4, 09:00 AM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Good catch! You\'re right. I\'ve updated the figures and re-uploaded the report.'
      }
    ]
  },
  {
    id: 8,
    inbox: 'Finance',
    type: 'Mine',
    sender: 'Sarah Miller',
    initial: 'S',
    avatarColor: '#10b981',
    time: 'Feb 4, 12:45 PM',
    subject: 'Travel Reimbursement',
    preview: 'Receipts for the business trip to London.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Sarah Miller',
        email: 'sarah.m@acme.com',
        time: 'Feb 4, 11:00 AM',
        initial: 'S',
        avatarColor: '#10b981',
        body: 'Hi Ruben,\n\nAttaching all receipts for my trip to London last week for the conference. Total comes to $1,450.'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 4, 12:45 PM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Approved! This will be included in your next paycheck. Hope the conference was productive!'
      }
    ]
  },
  {
    id: 9,
    inbox: 'Finance',
    type: 'Mine',
    sender: 'Finance Team',
    initial: 'F',
    avatarColor: '#3b82f6',
    time: 'Feb 3, 02:30 PM',
    subject: 'New Payroll System',
    preview: 'Onboarding to the new platform starts Monday.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Finance Team',
        email: 'payroll@acme.com',
        time: 'Feb 3, 10:00 AM',
        initial: 'F',
        avatarColor: '#3b82f6',
        body: 'Team,\n\nWe are moving to ZenPayroll starting next month. Please ensure all your bank details are updated by Friday.'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 3, 02:30 PM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Will do. Thanks for the heads up!'
      }
    ]
  },
  {
    id: 14,
    inbox: 'Finance',
    type: 'Mine',
    sender: 'Kevin Heart',
    initial: 'K',
    avatarColor: '#f43f5e',
    time: 'Feb 2, 09:45 AM',
    subject: 'Annual bonus question',
    preview: 'When will the bonuses be paid out?',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Kevin Heart',
        email: 'kevin.h@acme.com',
        time: 'Feb 2, 08:30 AM',
        initial: 'K',
        avatarColor: '#f43f5e',
        body: 'Hi Finance,\n\nI was wondering if we have a date for the annual performance bonuses yet?'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 2, 09:45 AM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Hi Kevin,\n\nTarget date is the Feb 28th payroll cycle.'
      }
    ]
  },
  {
    id: 15,
    inbox: 'Finance',
    type: 'Mine',
    sender: 'Julia Roberts',
    initial: 'J',
    avatarColor: '#84cc16',
    time: 'Feb 1, 04:20 PM',
    subject: 'New credit card request',
    preview: 'I need a corporate card for travel.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Julia Roberts',
        email: 'julia.r@acme.com',
        time: 'Feb 1, 02:00 PM',
        initial: 'J',
        avatarColor: '#84cc16',
        body: 'Hello Finance,\n\nI have several trips coming up in Q1 and would like to request a corporate credit card.'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 1, 04:20 PM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Please fill out the request form on the wiki and I will approve it once the department head signs off.'
      }
    ]
  },

  // --- Finance: Unassigned (3) ---
  {
    id: 10,
    inbox: 'Finance',
    type: 'Unassigned',
    sender: 'Vendor Support',
    initial: 'V',
    avatarColor: '#64748b',
    time: 'Feb 4, 11:20 AM',
    subject: 'Unpaid Invoice #8849',
    preview: 'Our records show that invoice #8849 is still outstanding.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Vendor Support',
        email: 'support@cloud-services.com',
        time: 'Feb 4, 09:00 AM',
        initial: 'V',
        avatarColor: '#64748b',
        body: 'Dear Finance Team,\n\nWe would like to remind you that invoice #8849 (dated Jan 15) for $2,400 has not been paid yet. Please process this at your earliest convenience.'
      },
      {
        id: 'm2',
        sender: 'Finance Bot',
        email: 'finance-bot@acme.com',
        time: 'Feb 4, 09:05 AM',
        initial: 'F',
        avatarColor: '#94a3b8',
        body: 'Thank you for your reminder. Your message has been routed to our accounts payable department for review.'
      }
    ]
  },
  {
    id: 11,
    inbox: 'Finance',
    type: 'Unassigned',
    sender: 'Legal Dept',
    initial: 'L',
    avatarColor: '#7c3aed',
    time: 'Feb 4, 03:50 PM',
    subject: 'New contract validation',
    preview: 'Please verify the budget allocation for the new vendor.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Legal Dept',
        email: 'contracts@acme.com',
        time: 'Feb 4, 02:00 PM',
        initial: 'L',
        avatarColor: '#7c3aed',
        body: 'Hi Finance,\n\nWe have a new contract for "Elite Marketing" ready for signature. Before we sign, can someone confirm that the $50k yearly budget is allocated for this?'
      },
      {
        id: 'm2',
        sender: 'Finance Assistant',
        email: 'finance-bot@acme.com',
        time: 'Feb 4, 02:05 PM',
        initial: 'F',
        avatarColor: '#94a3b8',
        body: 'Your request for budget validation has been received and added to the finance review queue.'
      }
    ]
  },
  {
    id: 12,
    inbox: 'Finance',
    type: 'Unassigned',
    sender: 'AWS Billing',
    initial: 'A',
    avatarColor: '#f97316',
    time: 'Feb 3, 10:00 AM',
    subject: 'Monthly usage report',
    preview: 'Your AWS bill for January is now available.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'AWS Billing',
        email: 'billing@amazon.com',
        time: 'Feb 3, 08:00 AM',
        initial: 'A',
        avatarColor: '#f97316',
        body: 'Greetings from Amazon Web Services,\n\nYour monthly billing statement for the period Jan 1 - Jan 31 is now ready for viewing.'
      },
      {
        id: 'm2',
        sender: 'Finance Bot',
        email: 'finance-bot@acme.com',
        time: 'Feb 3, 08:05 AM',
        initial: 'F',
        avatarColor: '#94a3b8',
        body: 'This report has been captured automatically and filed under the Hosting expenses category for reconciliation.'
      }
    ]
  },

  // --- Shipping: Mine (3) ---
  {
    id: 16,
    inbox: 'Shipping',
    type: 'Mine',
    sender: 'FedEx Support',
    initial: 'F',
    avatarColor: '#4f46e5',
    time: 'Feb 4, 10:00 AM',
    subject: 'Package Delay Alert',
    preview: 'Your shipment #99283 is delayed due to weather.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'FedEx Support',
        email: 'support@fedex.com',
        time: 'Feb 4, 08:00 AM',
        initial: 'F',
        avatarColor: '#4f46e5',
        body: 'Hi,\n\nWe are sorry to inform you that your package #99283 is delayed due to severe weather in Memphis. Estimated delivery is now Feb 6.'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 4, 10:00 AM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Thanks for the update. We will inform the client.'
      }
    ]
  },
  {
    id: 17,
    inbox: 'Shipping',
    type: 'Mine',
    sender: 'Warehouse Team',
    initial: 'W',
    avatarColor: '#ea580c',
    time: 'Feb 4, 01:15 PM',
    subject: 'Inventory replenishment',
    preview: 'New stock for Item X has arrived.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Warehouse Team',
        email: 'wh@acme.com',
        time: 'Feb 4, 11:30 AM',
        initial: 'W',
        avatarColor: '#ea580c',
        body: 'Hi Ruben,\n\nJust wanted to let you know that 500 units of Item X are now back in stock and ready for shipping.'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 4, 01:15 PM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Great news. We can start processing the backorders.'
      }
    ]
  },
  {
    id: 18,
    inbox: 'Shipping',
    type: 'Mine',
    sender: 'UPS Billing',
    initial: 'U',
    avatarColor: '#b45309',
    time: 'Feb 3, 03:40 PM',
    subject: 'Weekly shipping invoice',
    preview: 'Invoice for week of Jan 27 is attached.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'UPS Billing',
        email: 'billing@ups.com',
        time: 'Feb 3, 09:00 AM',
        initial: 'U',
        avatarColor: '#b45309',
        body: 'Hello,\n\nPlease find the attached invoice for all shipments processed last week. Total due: $3,210.'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 3, 03:40 PM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Forwarded to Finance for payment.'
      }
    ]
  },

  // --- Shipping: Unassigned (2) ---
  {
    id: 19,
    inbox: 'Shipping',
    type: 'Unassigned',
    sender: 'Logistics Partner',
    initial: 'L',
    avatarColor: '#1e293b',
    time: 'Feb 4, 04:30 PM',
    subject: 'New route optimization',
    preview: 'Proposal for reducing shipping costs to Europe.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Logistics Partner',
        email: 'partners@logistics.com',
        time: 'Feb 4, 02:00 PM',
        initial: 'L',
        avatarColor: '#1e293b',
        body: 'Hi Shipping Team,\n\nWe have developed a new route for your European shipments that could save you 15% on freight costs. Would you like to see the proposal?'
      },
      {
        id: 'm2',
        sender: 'System Bot',
        email: 'shipping-bot@acme.com',
        time: 'Feb 4, 02:05 PM',
        initial: 'S',
        avatarColor: '#94a3b8',
        body: 'Your message has been received and assigned to a logistics manager for review.'
      }
    ]
  },
  {
    id: 20,
    inbox: 'Shipping',
    type: 'Unassigned',
    sender: 'Customs Office',
    initial: 'C',
    avatarColor: '#ef4444',
    time: 'Feb 3, 11:10 AM',
    subject: 'Cleared for export',
    preview: 'Shipment #44102 has passed inspection.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Customs Office',
        email: 'exports@customs.gov',
        time: 'Feb 3, 09:00 AM',
        initial: 'C',
        avatarColor: '#ef4444',
        body: 'Notice: Shipment #44102 destined for Canada has cleared all export requirements and is released for transport.'
      },
      {
        id: 'm2',
        sender: 'Shipping Bot',
        email: 'shipping-bot@acme.com',
        time: 'Feb 3, 09:05 AM',
        initial: 'S',
        avatarColor: '#94a3b8',
        body: 'Automatic status update: Released from Customs. Informing carrier.'
      }
    ]
  },

  // --- Refund: Mine (2) ---
  {
    id: 21,
    inbox: 'Refund',
    type: 'Mine',
    sender: 'George Baker',
    initial: 'G',
    avatarColor: '#ec4899',
    time: 'Feb 4, 10:20 AM',
    subject: 'Double charge refund',
    preview: 'I see a duplicate charge on my statement.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'George Baker',
        email: 'george@baker.com',
        time: 'Feb 4, 09:00 AM',
        initial: 'G',
        avatarColor: '#ec4899',
        body: 'Hello,\n\nI was charged twice for my subscription this month. Can you please refund the second one?'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 4, 10:20 AM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Hi George,\n\nI\'ve processed the refund for the duplicate charge. It should reach your account in 3-5 days.'
      }
    ]
  },
  {
    id: 22,
    inbox: 'Refund',
    type: 'Mine',
    sender: 'Emma Stone',
    initial: 'E',
    avatarColor: '#8b5cf6',
    time: 'Feb 3, 04:15 PM',
    subject: 'Return shipping refund',
    preview: 'Can I get a refund for the return labels?',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Emma Stone',
        email: 'emma@stone.com',
        time: 'Feb 3, 02:00 PM',
        initial: 'E',
        avatarColor: '#8b5cf6',
        body: 'Hi,\n\nI had to pay for return shipping because the item was faulty. Can this be reimbursed?'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 3, 04:15 PM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Yes Emma. Please upload the receipt and I will issue a credit to your account.'
      }
    ]
  },

  // --- Refund: Unassigned (3) ---
  {
    id: 23,
    inbox: 'Refund',
    type: 'Unassigned',
    sender: 'Customer Care',
    initial: 'C',
    avatarColor: '#10b981',
    time: 'Feb 4, 11:00 AM',
    subject: 'Escalated refund request',
    preview: 'Customer is unhappy with the product.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Customer Care',
        email: 'care@acme.com',
        time: 'Feb 4, 08:30 AM',
        initial: 'C',
        avatarColor: '#10b981',
        body: 'Team,\n\nCustomer #9928 wants a full refund. They say the item doesn\'t match the description. Please review.'
      },
      {
        id: 'm2',
        sender: 'Refund Bot',
        email: 'refunds@acme.com',
        time: 'Feb 4, 08:35 AM',
        initial: 'R',
        avatarColor: '#94a3b8',
        body: 'Request received. Analyzing product return history.'
      }
    ]
  },
  {
    id: 24,
    inbox: 'Refund',
    type: 'Unassigned',
    sender: 'Liam Neeson',
    initial: 'L',
    avatarColor: '#3b82f6',
    time: 'Feb 4, 03:20 PM',
    subject: 'Membership cancellation refund',
    preview: 'I want a pro-rated refund for my annual plan.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Liam Neeson',
        email: 'liam@neeson.com',
        time: 'Feb 4, 01:00 PM',
        initial: 'L',
        avatarColor: '#3b82f6',
        body: 'Hi,\n\nI am cancelling my service halfway through the year. I\'d like a refund for the remaining 6 months.'
      },
      {
        id: 'm2',
        sender: 'System Bot',
        email: 'support@acme.com',
        time: 'Feb 4, 01:05 PM',
        initial: 'S',
        avatarColor: '#94a3b8',
        body: 'Your cancellation and refund request has been logged.'
      }
    ]
  },
  {
    id: 25,
    inbox: 'Refund',
    type: 'Unassigned',
    sender: 'Bank Notification',
    initial: 'B',
    avatarColor: '#64748b',
    time: 'Feb 3, 09:45 AM',
    subject: 'Chargeback alert',
    preview: 'A dispute has been opened for transaction #7721.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Bank Notification',
        email: 'alerts@chase.com',
        time: 'Feb 3, 08:00 AM',
        initial: 'B',
        avatarColor: '#64748b',
        body: 'Notice: A chargeback has been initiated for the amount of $120. Reason: Product not received.'
      },
      {
        id: 'm2',
        sender: 'Refund Bot',
        email: 'refunds@acme.com',
        time: 'Feb 3, 08:05 AM',
        initial: 'R',
        avatarColor: '#94a3b8',
        body: 'Automatic case created. Flagging for urgent human review.'
      }
    ]
  },

  // --- IT Support: Mine (3) ---
  {
    id: 26,
    inbox: 'IT Support',
    type: 'Mine',
    sender: 'Tech Team',
    initial: 'T',
    avatarColor: '#4f46e5',
    time: 'Feb 4, 02:00 PM',
    subject: 'Workstation update',
    preview: 'Your laptop is scheduled for an OS upgrade.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Tech Team',
        email: 'it@acme.com',
        time: 'Feb 4, 11:00 AM',
        initial: 'T',
        avatarColor: '#4f46e5',
        body: 'Hi Ruben,\n\nWe need to perform a security patch on your MacBook. Are you free at 3 PM?'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 4, 02:00 PM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Yes, 3 PM works. I\'ll bring it to the IT desk.'
      }
    ]
  },
  {
    id: 27,
    inbox: 'IT Support',
    type: 'Mine',
    sender: 'Slack Admin',
    initial: 'S',
    avatarColor: '#ea580c',
    time: 'Feb 4, 05:30 PM',
    subject: 'Channel guest access',
    preview: 'Access approved for the external partner.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Slack Admin',
        email: 'it-slack@acme.com',
        time: 'Feb 4, 04:00 PM',
        initial: 'S',
        avatarColor: '#ea580c',
        body: 'Ruben, the guest user you requested for the #projects channel has been added.'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 4, 05:30 PM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Thanks! Much appreciated.'
      }
    ]
  },
  {
    id: 28,
    inbox: 'IT Support',
    type: 'Mine',
    sender: 'VPN Service',
    initial: 'V',
    avatarColor: '#0ea5e9',
    time: 'Feb 3, 11:10 AM',
    subject: 'Certificate renewal',
    preview: 'Your VPN certificate expires in 2 days.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'VPN Service',
        email: 'sec@vpn.acme.com',
        time: 'Feb 3, 09:00 AM',
        initial: 'V',
        avatarColor: '#0ea5e9',
        body: 'Attention: Your remote access certificate is nearing expiry. Please click here to renew.'
      },
      {
        id: 'm2',
        sender: 'Ruben Geidt',
        email: 'ruben@acme.com',
        time: 'Feb 3, 11:10 AM',
        initial: 'R',
        avatarColor: '#5398cf',
        body: 'Renewed successfully. Tested and working.'
      }
    ]
  },

  // --- IT Support: Unassigned (2) ---
  {
    id: 29,
    inbox: 'IT Support',
    type: 'Unassigned',
    sender: 'Office Wifi',
    initial: 'O',
    avatarColor: '#94a3b8',
    time: 'Feb 4, 01:25 PM',
    subject: 'Guest network outage',
    preview: 'The 3rd floor AP is offline.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Office Wifi',
        email: 'network-alerts@acme.com',
        time: 'Feb 4, 12:00 PM',
        initial: 'O',
        avatarColor: '#94a3b8',
        body: 'System Alert: Meraki Access Point "AP-3F-Left" is unreachable. Please investigate.'
      },
      {
        id: 'm2',
        sender: 'IT Bot',
        email: 'it-bot@acme.com',
        time: 'Feb 4, 12:05 PM',
        initial: 'I',
        avatarColor: '#94a3b8',
        body: 'Ticket #4492 raised. Assigned to Network Ops.'
      }
    ]
  },
  {
    id: 30,
    inbox: 'IT Support',
    type: 'Unassigned',
    sender: 'Printer Monitor',
    initial: 'P',
    avatarColor: '#6366f1',
    time: 'Feb 3, 02:40 PM',
    subject: 'Low toner alert',
    preview: 'Kitchen printer needs black toner.',
    threadCount: 2,
    messages: [
      {
        id: 'm1',
        sender: 'Printer Monitor',
        email: 'print@acme.com',
        time: 'Feb 3, 01:00 PM',
        initial: 'P',
        avatarColor: '#6366f1',
        body: 'Device status: Toner Level < 5%. Location: Main Kitchen Area.'
      },
      {
        id: 'm2',
        sender: 'IT Bot',
        email: 'it-bot@acme.com',
        time: 'Feb 3, 01:05 PM',
        initial: 'I',
        avatarColor: '#94a3b8',
        body: 'Procurement notified. Supply order pending.'
      }
    ]
  }
];

function App() {
  const [selectedId, setSelectedId] = useState(1);
  const [activeFilter, setActiveFilter] = useState({ inbox: 'Support', type: 'Mine' });

  const filteredConversations = conversationsData.filter(c => 
    c.inbox === activeFilter.inbox && c.type === activeFilter.type
  );

  React.useEffect(() => {
    if (filteredConversations.length > 0) {
      setSelectedId(filteredConversations[0].id);
    } else {
      setSelectedId(null);
    }
  }, [activeFilter.inbox, activeFilter.type]);

  const [signatures, setSignatures] = useState([]);
  const [defaultSignatureId, setDefaultSignatureId] = useState(null);

  const selectedConversation = conversationsData.find(c => c.id === selectedId);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <>
            <Sidebar 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <ConversationList 
              conversations={filteredConversations} 
              selectedId={selectedId} 
              onSelect={setSelectedId} 
              activeFilter={activeFilter}
            />
            <ConversationDetail 
              conversation={selectedConversation} 
              signatures={signatures}
              setSignatures={setSignatures}
              defaultSignatureId={defaultSignatureId}
            />
            <RightPanel />
          </>
        } />
        <Route path="/settings" element={
          <SettingsPage 
            signatures={signatures}
            setSignatures={setSignatures}
            defaultSignatureId={defaultSignatureId}
            setDefaultSignatureId={setDefaultSignatureId}
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
