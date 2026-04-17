import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase } from 'lucide-react';
import JobCard from '../components/JobCard';
import { jobsData } from '../data/mockData';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm || location) {
      navigate(`/jobs?search=${encodeURIComponent(searchTerm)}&location=${encodeURIComponent(location)}`);
    } else {
      navigate('/jobs');
    }
  };

  const featuredJobs = jobsData.filter(job => job.featured).slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            Find Your Next <span>Dream Job</span> Today
          </h1>
          <p className="hero-subtitle">
            Connect with thousands of employers and discover opportunities that match your skills and passion.
          </p>
          
          <form className="search-container" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <Search size={20} className="text-muted" />
              <input 
                type="text" 
                placeholder="Job title, keywords, or company" 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="search-divider hidden-mobile"></div>
            <div className="search-input-wrapper">
              <MapPin size={20} className="text-muted" />
              <input 
                type="text" 
                placeholder="City, state, or 'Remote'" 
                className="search-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 2rem', marginLeft: '0.5rem' }}>
              Search Jobs
            </button>
          </form>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            <span>Popular searches:</span>
            <span className="badge badge-purple" style={{cursor: 'pointer'}} onClick={()=>navigate('/jobs?search=Designer')}>Designer</span>
            <span className="badge badge-blue" style={{cursor: 'pointer'}} onClick={()=>navigate('/jobs?search=Developer')}>Developer</span>
            <span className="badge badge-green" style={{cursor: 'pointer'}} onClick={()=>navigate('/jobs?search=Marketing')}>Marketing</span>
            <span className="badge badge-orange" style={{cursor: 'pointer'}} onClick={()=>navigate('/jobs?search=Product')}>Product</span>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-page)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Opportunities</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Hand-picked jobs from top companies</p>
          </div>
          
          <div className="job-grid">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <button onClick={() => navigate('/jobs')} className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>
              View All Jobs <Briefcase size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Simple steps to land your dream job</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'var(--color-bg-page)' }}>
              <div className="btn-icon" style={{ background: 'white', width: '4rem', height: '4rem', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>1</span>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Create an Account</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Sign up and complete your profile to highlight your skills and experience.</p>
            </div>
            
            <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'var(--color-bg-page)' }}>
              <div className="btn-icon" style={{ background: 'white', width: '4rem', height: '4rem', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>2</span>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Search Jobs</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Use our advanced search to find opportunities that match your criteria.</p>
            </div>
            
            <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'var(--color-bg-page)' }}>
              <div className="btn-icon" style={{ background: 'white', width: '4rem', height: '4rem', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>3</span>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Apply & Get Hired</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Apply to jobs with a single click and manage your applications easily.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
