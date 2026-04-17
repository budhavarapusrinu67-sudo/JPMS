import React, { useState } from 'react';
import { Building, PlusCircle, Users, BarChart2, MessageSquare, Settings, Briefcase, Edit, Trash2 } from 'lucide-react';
import { postedJobs } from '../data/mockData';

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState('manage-jobs');

  return (
    <div className="container dashboard-layout animate-fade-in">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '6rem', height: '6rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-bg-page)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)' }}>
            <Building size={40} color="var(--color-primary)" />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-dark)' }}>TechInnovate Inc.</h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>San Francisco, CA</p>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`sidebar-link ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <Building size={20} /> Company Profile
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'post-job' ? 'active' : ''}`}
            onClick={() => setActiveTab('post-job')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <PlusCircle size={20} /> Post a New Job
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'manage-jobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('manage-jobs')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <Briefcase size={20} /> Manage Jobs
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'candidates' ? 'active' : ''}`}
            onClick={() => setActiveTab('candidates')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <Users size={20} /> All Candidates
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <MessageSquare size={20} /> Messages
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main>
        <div className="flex-between" style={{ marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--color-text-dark)' }}>Employer Dashboard</h1>
          <button className="btn btn-primary" onClick={() => setActiveTab('post-job')}>
            <PlusCircle size={18} /> Post Job
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue"><Briefcase size={24} /></div>
            <div>
              <div className="stat-value">{postedJobs.length}</div>
              <div className="stat-label">Active Jobs</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon green"><Users size={24} /></div>
            <div>
              <div className="stat-value">146</div>
              <div className="stat-label">Total Candidates</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon purple"><BarChart2 size={24} /></div>
            <div>
              <div className="stat-value">1,240</div>
              <div className="stat-label">Profile Views</div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ border: 'none', padding: 0, margin: 0 }}>Recent Job Postings</h3>
            <div className="input-field" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'auto' }}>
              Sort by: <strong>Newest</strong>
            </div>
          </div>
          
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Applications</th>
                  <th>Status</th>
                  <th>Posted Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {postedJobs.map(job => (
                  <tr key={job.id}>
                    <td style={{ fontWeight: 500, color: 'var(--color-text-dark)' }}>{job.title}</td>
                    <td>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', backgroundColor: '#f1f5f9', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}>
                        <Users size={14} color="var(--color-primary)" /> {job.applicants}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${job.status === 'Active' ? 'badge-green' : 'badge-orange'}`}>
                        {job.status}
                      </span>
                    </td>
                    <td>{job.postedDate}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn btn-icon" title="Edit Job" style={{ padding: '0.375rem' }}>
                          <Edit size={16} />
                        </button>
                        <button className="btn btn-icon" title="Delete Job" style={{ padding: '0.375rem', color: 'var(--color-danger)' }}>
                          <Trash2 size={16} />
                        </button>
                      </div>
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

export default EmployerDashboard;
