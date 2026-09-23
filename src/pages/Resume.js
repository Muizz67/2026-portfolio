import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import './Resume.css';

const resumeUrl = '/assets/projects/CV_MUHAMMAD%20MUIZZ%20BIN%20RUSDI.pdf';

const Resume = () => {
  return (
    <main className="resume-page">
      <section className="section">
        <div className="container">
          <div className="resume-header">
            <h1 className="text-title">My Resume</h1>
            <p className="text-subtitle">
              View my resume below or open it in a separate browser tab.
            </p>
            <div className="resume-actions">
              <a className="btn-primary" href={resumeUrl} download="CV_MUHAMMAD_MUIZZ_BIN_RUSDI.pdf">
                <Download size={20} />
                <span>Download PDF</span>
              </a>
              <a className="btn-primary" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
                <span>Open in New Tab</span>
              </a>
            </div>
          </div>

          <div className="resume-viewer">
            <iframe src={resumeUrl} title="Muhammad Muizz bin Rusdi resume" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
