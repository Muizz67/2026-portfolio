import React from 'react';
import { Download, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import './Resume.css';

const Resume = () => {
  const filename = `${profile.fullName.replace(/\s+/g, '_')}_CV.pdf`;

  return (
    <main className="resume-page">
      <section className="section">
        <div className="container">
          <div className="resume-header">
            <Link className="resume-back" to="/">
              <ArrowLeft size={16} />
              <span>Back to home</span>
            </Link>

            <h1 className="text-title">Resume</h1>
            <p className="text-subtitle">
              {profile.fullName} — the same document recruiters receive by email.
            </p>

            <div className="resume-actions">
              <a className="btn-primary" href={profile.resumeUrl} download={filename}>
                <Download size={20} />
                <span>Download PDF</span>
              </a>
              <a
                className="btn-secondary"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
                <span>Open in new tab</span>
              </a>
            </div>
          </div>

          <div className="resume-viewer">
            <iframe src={profile.resumeUrl} title={`${profile.fullName} resume`} />
          </div>

          <p className="resume-fallback">
            PDF not loading?{' '}
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              Open it directly
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default Resume;