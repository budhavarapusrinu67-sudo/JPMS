import React, { useState } from 'react';
import { User, FileText, Bookmark, Settings, Bell, ChevronRight, Briefcase } from 'lucide-react';
import { myApplications } from '../data/mockData';

const CandidateDashboard = () => {
  const [activeTab, setActiveTab] = useState('applications');

  return (
    <div className="container dashboard-layout animate-fade-in">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '6rem', height: '6rem', borderRadius: '50%', backgroundColor: '#e2e8f0', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={40} color="var(--color-text-muted)" />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-dark)' }}>Alex Johnson</h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Frontend Developer</p>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`sidebar-link ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <User size={20} /> My Profile
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'applications' ? 'active' : ''}`}
            onClick={() => setActiveTab('applications')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <Briefcase size={20} /> My Applications
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => setActiveTab('saved')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <Bookmark size={20} /> Saved Jobs
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'resume' ? 'active' : ''}`}
            onClick={() => setActiveTab('resume')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <FileText size={20} /> Manage Resume
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'alerts' ? 'active' : ''}`}
            onClick={() => setActiveTab('alerts')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <Bell size={20} /> Job Alerts
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <Settings size={20} /> Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-text-dark)' }}>
          Candidate Dashboard
        </h1>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue"><Briefcase size={24} /></div>
            <div>
              <div className="stat-value">{myApplications.length}</div>
              <div className="stat-label">Total Applications</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon green"><Bookmark size={24} /></div>
            <div>
              <div className="stat-value">12</div>
              <div className="stat-label">Saved Jobs</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon orange"><Bell size={24} /></div>
            <div>
              <div className="stat-value">4</div>
              <div className="stat-label">Active Alerts</div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ border: 'none', padding: 0, margin: 0 }}>Recent Applications</h3>
            <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>View All</button>
          </div>
          
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Date Applied</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myApplications.map(app => (
                  <tr key={app.id}>
                    <td style={{ fontWeight: 500, color: 'var(--color-text-dark)' }}>{app.jobTitle}</td>
                    <td>{app.company}</td>
                    <td>{app.appliedDate}</td>
                    <td>
                      <span className={`badge ${app.status === 'Interviewed' ? 'badge-green' : app.status === 'Rejected' ? 'badge-orange' : 'badge-blue'}`}>
                        {app.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-icon" title="View details">
                        <ChevronRight size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateDashboard;
