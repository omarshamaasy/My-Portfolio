import { CgArrowTopRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Projects.css";

const projectData = [
  {
    "id": 1,
    "title": "EduPress",
    "image": "/EduPress.jpg",
    "date": "8-12-2024",
    "description": "An educational web platform built using modern front-end technologies.",
    "languages": "HTML, CSS",
    "framework": "none",
    "libraries": "none",
    "repo": "https://github.com/omarshamaasy/EduPress.git",
    "demo": "https://omarshamaasy.github.io/EduPress/index.html"
  },
  {
    "id": 2,
    "title": "Mini Shop",
    "image": "/MiniShop.jpg",
    "date": "15-02-2025",
    "description": "Electronic Shose Shop.",
    "languages": "HTML, CSS, JS",
    "framework": "none",
    "libraries": "none",
    "repo": "https://github.com/omarshamaasy/mini-shop/tree/master",
    "demo": "https://omarshamaasy.github.io/mini-shop/"
  },
  {
    "id": 3,
    "title": "Blogs",
    "image": "/Blogs.png",
    "date": "20-06-2024",
    "description": "A simple blog website built with React",
    "languages": "HTML, CSS, Js, JSX",
    "framework": "None",
    "libraries": "React",
    "repo": "https://github.com/omarshamaasy/Blogs",
    "demo": "https://omarshamaasy.github.io/Blogs"
  },
  {
    "id": 4,
    "title": "K2skiing",
    "image": "/K2skiing.png",
    "date": "25-10-2024",
    "description": "A website about snow trips built with HTML, CSS",
    "languages": "HTML, CSS",
    "framework": "none",
    "libraries": "none",
    "repo": "https://github.com/omarshamaasy/K2skiing",
    "demo": "https://omarshamaasy.github.io/K2skiing/"
  },
  {
    "title": "Educational Platform",
    "description": "React / CSS / Responsive",
    "image": "/test.png",
    "link": "https://example.com/project3"
  },
  {
    "title": "Educational Platform",
    "description": "React / CSS / Responsive",
    "image": "/test.png",
    "link": "https://example.com/project4"
  }
]

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="title">
        <div className="left">
          <p className="projects-subtitle">Portfolio</p>
          <h1 className="projects-title">
            My Creative Works Latest <span>Projects</span>
          </h1>
        </div>
        <button className="project-btn">
          <a href="https://github.com/omarshamaasy" target="_blank" rel="noopener noreferrer">
            View Github <CgArrowTopRight />
          </a>
        </button>
      </div>

      <div className="projects-grid">
        {projectData.map((project, index) => {
          const projectLink = project.demo || project.link || project.repo;
          return (
            <div className="project-card" key={index}>
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
              <div className="project-card-info">
                <div>
                  <h1>{project.title}</h1>
                  <p className="go-to-projectDetail">
                    <Link to="/ProjectDetails" state={{ project }}>
                      {project.description}
                    </Link>
                  </p>
                </div>
                <a className="visit-btn" href={projectLink} target="_blank" rel="noopener noreferrer">
                  <img src="./visit.svg" alt="Visit Project" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
