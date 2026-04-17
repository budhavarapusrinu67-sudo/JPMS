import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Menu, User, LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="navbar">
      <div className="container flex-between">
        <Link to="/" className="logo">
          <Briefcase size={28} color="var(--color-primary)" />
          JobPortal
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/jobs" className={`nav-link ${location.pathname.startsWith('/jobs') ? 'active' : ''}`}>Find a Job</Link>
          <Link to="/employer-dashboard" className={`nav-link ${location.pathname.includes('/employer') ? 'active' : ''}`}>Post a Job</Link>
        </nav>
        
        <div className="flex-between gap-md" style={{ display: 'flex' }}>
          <Link to="/candidate-dashboard" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center' }}>
            <User size={18} /> Candidate
          </Link>
          <Link to="/employer-dashboard" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center' }}>
            <LogIn size={18} /> Employer
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
