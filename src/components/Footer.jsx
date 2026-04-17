import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Globe, Mail, MessageCircle, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <Briefcase size={28} color="var(--color-primary)" />
              JobPortal
            </Link>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', maxWidth: '300px' }}>
              Connecting top talent with the best opportunities globally. Join our platform to accelerate your career or find perfect candidates.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="btn-icon"><Globe size={20} /></a>
              <a href="#" className="btn-icon"><Mail size={20} /></a>
              <a href="#" className="btn-icon"><MessageCircle size={20} /></a>
              <a href="#" className="btn-icon"><LinkIcon size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">For Candidates</h4>
            <ul className="footer-links">
              <li><Link to="/jobs">Search Jobs</Link></li>
              <li><Link to="/candidate-dashboard">My Applications</Link></li>
              <li><Link to="/">Create Resume</Link></li>
              <li><Link to="/">Job Alerts</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-title">For Employers</h4>
            <ul className="footer-links">
              <li><Link to="/employer-dashboard">Post a Job</Link></li>
              <li><Link to="/">Browse Resumes</Link></li>
              <li><Link to="/">Recruiting Solutions</Link></li>
              <li><Link to="/">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom flex-between">
          <p>&copy; {new Date().getFullYear()} JobPortal Management System. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
