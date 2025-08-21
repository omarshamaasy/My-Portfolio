import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import './ProjectDebottom.css';

function ProjectDebottom({ projects, onSelect }) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex + visibleCount < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="project-grid" id="project-grid">
      <div className="section-header">
        <p>Portfolio</p>
        <div className="slide">
          <h1>The Best <span>Projects</span></h1>
          <div className="slider-buttons">
            <button onClick={handlePrev}><FaArrowCircleLeft /></button>
            <button onClick={handleNext}><FaArrowCircleRight /></button>
          </div>
        </div>
      </div>

      <div className="project-cards fade">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => onSelect(project)}
            style={{ cursor: 'pointer' }}
          >
            <img src={project.image} alt={project.title} />
            <div>
              <h3>{project.title}</h3>
            <p>{project.languages}</p>
            <div className="icon">
              <button className="icon-btn"><a href="#"><img src="/visit.svg" alt="" /></a></button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectDebottom;