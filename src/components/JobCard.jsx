import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Briefcase } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="company-logo flex-center">
          <Briefcase color="var(--color-primary)" size={24} />
        </div>
        <div>
          <Link to={`/jobs/${job.id}`}>
            <h3 className="job-title">{job.title}</h3>
          </Link>
          <div className="job-company">
            <span>{job.company}</span>
            {job.featured && <span className="badge badge-orange" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}>Featured</span>}
          </div>
        </div>
      </div>
      
      <div className="job-meta">
        <div className="job-meta-item">
          <MapPin size={16} />
          {job.location}
        </div>
        <div className="job-meta-item">
          <Clock size={16} />
          {job.type}
        </div>
      </div>
      
      <div className="job-tags">
        {job.tags && job.tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="badge badge-blue">{tag}</span>
        ))}
      </div>
      
      <div className="job-card-footer">
        <div className="job-salary">
          <DollarSign size={16} style={{ display: 'inline', verticalAlign: 'text-bottom' }} />
          {job.salary}
        </div>
        <Link to={`/jobs/${job.id}`} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
