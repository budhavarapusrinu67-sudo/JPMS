import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, MapPin } from 'lucide-react';
import JobCard from '../components/JobCard';
import { jobsData } from '../data/mockData';

const Jobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialLocation = searchParams.get('location') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [locationTerm, setLocationTerm] = useState(initialLocation);
  const [typeFilter, setTypeFilter] = useState('');
  
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  useEffect(() => {
    // Filter logic
    let result = jobsData;
    
    if (initialSearch) {
      result = result.filter(job => 
        job.title.toLowerCase().includes(initialSearch.toLowerCase()) || 
        job.company.toLowerCase().includes(initialSearch.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(initialSearch.toLowerCase()))
      );
    }
    
    if (initialLocation) {
      result = result.filter(job => 
        job.location.toLowerCase().includes(initialLocation.toLowerCase())
      );
    }

    if (typeFilter) {
      result = result.filter(job => job.type === typeFilter);
    }

    setFilteredJobs(result);
  }, [initialSearch, initialLocation, typeFilter]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ search: searchTerm, location: locationTerm });
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container text-center">
          <h1 className="page-title">Find Your Next Job</h1>
          <p className="page-subtitle">Browse through thousands of job openings across various industries.</p>
        </div>
      </div>

      <div className="container" style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
          
          {/* Search and Filters */}
          <div style={{ background: 'var(--color-bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border)' }}>
            <form onSubmit={handleSearch} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
              <div className="input-group" style={{ marginBottom: 0 }}>
                <label className="input-label">Keywords</label>
                <div style={{ position: 'relative' }}>
                  <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                  <input 
                    type="text" 
                    className="input-field" 
                    style={{ paddingLeft: '2.5rem', width: '100%' }}
                    placeholder="Job title, company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="input-group" style={{ marginBottom: 0 }}>
                <label className="input-label">Location</label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                  <input 
                    type="text" 
                    className="input-field" 
                    style={{ paddingLeft: '2.5rem', width: '100%' }}
                    placeholder="City or remote"
                    value={locationTerm}
                    onChange={(e) => setLocationTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="input-group" style={{ marginBottom: 0 }}>
                <label className="input-label">Job Type</label>
                <div style={{ position: 'relative' }}>
                  <Filter size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                  <select 
                    className="input-field" 
                    style={{ paddingLeft: '2.5rem', width: '100%', appearance: 'none' }}
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="">All Types</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem' }}>
                Search
              </button>
            </form>
          </div>

          {/* Results Summary */}
          <div className="flex-between">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-dark)' }}>
              Showing {filteredJobs.length} Jobs
            </h3>
          </div>

          {/* Jobs Listing */}
          {filteredJobs.length > 0 ? (
            <div className="job-grid">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="content-card text-center" style={{ padding: '4rem 2rem' }}>
              <div className="btn-icon" style={{ width: '4rem', height: '4rem', marginBottom: '1rem', backgroundColor: '#f1f5f9' }}>
                <Search size={24} color="var(--color-text-muted)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No jobs found</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>We couldn't find any jobs matching your criteria. Try adjusting your filters.</p>
              <button 
                className="btn btn-outline" 
                onClick={() => { setSearchTerm(''); setLocationTerm(''); setTypeFilter(''); setSearchParams({}); }}
              >
                Clear all filters
              </button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Jobs;
