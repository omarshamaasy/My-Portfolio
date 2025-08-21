import { useState } from 'react';
import './PDetails.css';
import { MdOutlineZoomOutMap } from 'react-icons/md';

function PDetails({ project }) {
    const [showZoom, setShowZoom] = useState(false);
    if (!project) return null;
  return (
    <section className="p-details">
      <div className="p-images">
        <div className="image-wrapper">
          <img src={project.image} alt={project.title} className="main-image" />
          <div className="image-hover-overlay">
            <button onClick={() => setShowZoom(true)}><MdOutlineZoomOutMap size={"55px"} /></button>
            <button onClick={() => window.open(project.repo, '_blank')}> <img src="/visit2.svg" alt="" /> </button>
          </div>
        </div>
      </div>
      <div className="p-info">
        <div className="p-title">
          <h2>{project.title}</h2>
          <button><a href={project.demo}><img src="/visit.svg" alt="" /></a></button>
        </div>
        <p className="date">{project.date}</p>
        <p className="description">{project.description}</p>
        <p><strong>Languages:</strong> {project.languages}</p>
        <p><strong>Framework:</strong> {project.framework}</p>
        <p><strong>Libraries:</strong> {project.libraries}</p>
        <a href={project.repo} className="github-btn" target="_blank" rel="noreferrer">Github Repo</a>
      </div>

      {showZoom && (
        <div className="zoom-popup" onClick={() => setShowZoom(false)}>
          <img src={project.image} alt="Zoomed Project" />
        </div>
      )}
    </section>
  );
}


export default PDetails;
