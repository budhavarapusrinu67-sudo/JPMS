import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Briefcase, ChevronLeft, Building, Share2, BookmarkPlus, CheckCircle } from 'lucide-react';
import { jobsData } from '../data/mockData';

const JobDetails = () => {
  const { id } = useParams();
  const job = jobsData.find(j => j.id === parseInt(id));
  const [applied, setApplied] = useState(false);

  if (!job) {
    return (
      <div className="container text-center" style={{ padding: '6rem 0' }}>
        <h2>Job Not Found</h2>
        <Link to="/jobs" className="btn btn-primary" style={{ marginTop: '1rem' }}>Return to Jobs</Link>
      </div>
    );
  }

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className="animate-fade-in">
      {/* Detail Header */}
      <div className="page-header" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <Link to="/jobs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', marginBottom: '2rem' }}>
            <ChevronLeft size={16} /> Back to jobs
          </Link>
          
          <div className="flex-between" style={{ alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div className="btn-icon" style={{ width: '5rem', height: '5rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)' }}>
                <Briefcase size={36} color="var(--color-primary)" />
              </div>
              <div>
                <h1 className="page-title" style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{job.title}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '1.1rem' }}>
                  <Building size={18} /> {job.company}
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-icon" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Share2 size={20} />
              </button>
              <button className="btn btn-icon" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                <BookmarkPlus size={20} />
              </button>
              {applied ? (
                <button className="btn" style={{ backgroundColor: 'var(--color-success)', color: 'white', pointerEvents: 'none' }}>
                  <CheckCircle size={20} /> Applied
                </button>
              ) : (
                <button className="btn btn-primary" onClick={handleApply}>
                  Apply Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="job-details-layout">
          {/* Main Content */}
          <div className="job-details-content">
            <div className="content-card">
              <h3>Job Description</h3>
              <p style={{ color: 'var(--color-text-base)', marginBottom: '1.5rem' }}>
                {job.description}
              </p>
              
              <h3 style={{ marginTop: '2rem' }}>Requirements</h3>
              <ul style={{ color: 'var(--color-text-base)' }}>
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="job-details-sidebar">
            <div className="content-card">
              <h3 style={{ marginBottom: '1.5rem', border: 'none', padding: 0 }}>Job Overview</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="stat-icon blue" style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.25rem' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Location</div>
                    <div style={{ fontWeight: '500', color: 'var(--color-text-dark)' }}>{job.location}</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="stat-icon purple" style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.25rem' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Job Type</div>
                    <div style={{ fontWeight: '500', color: 'var(--color-text-dark)' }}>{job.type}</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="stat-icon green" style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.25rem' }}>
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Salary</div>
                    <div style={{ fontWeight: '500', color: 'var(--color-text-dark)' }}>{job.salary}</div>
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--color-text-dark)' }}>Skills Required</h4>
                <div className="job-tags">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="badge badge-blue">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="content-card text-center" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(14, 165, 233, 0.1))', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
              <h3 style={{ border: 'none', padding: 0 }}>Company Overview</h3>
              <div className="btn-icon" style={{ width: '4rem', height: '4rem', background: 'white', margin: '1rem auto' }}>
                <Building size={24} color="var(--color-primary)" />
              </div>
              <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{job.company}</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Leading technology company focusing on innovative solutions for the modern world.
              </p>
              <button className="btn btn-outline" style={{ width: '100%' }}>View Company Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
