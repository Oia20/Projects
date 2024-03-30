import React, { useState } from 'react';
import './projects.css'; // Import your CSS file for styling

const projects = [
  {
    id: 1,
    name: "OCR Automation Discord Bot",
    desc: "Text extraction, data extry software, saving 10 precious human hours per week.",
    image: "Add a heading (10).png",
    technologies: ["Python", "GCP", "PyTesseractOCR", "OpenCV"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur quam sit amet lacus consequat, in finibus dui ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur quam sit amet lacus consequat, in finibus dui ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur quam sit amet lacus consequat, in finibus dui ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur quam sit amet lacus consequat, in finibus dui ultricies.",
    githubLink: "https://github.com/example/project1",
    liveDemoLink: "https://example.com/project1-demo"
  },
  {
    id: 2,
    name: "3D Portfolio",
    desc: "Text extraction, data extry software, saving 10 hours of precious human hours per week.",
    image: "portfolio.png",
    technologies: ["React Three Fiber", "Three.js", "JavaScript", "Blender", "React"],
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    githubLink: null,
    liveDemoLink: "https://example.com/project2-demo"
  },
  {
    id: 3,
    name: "Project 3",
    desc: "Text extraction, data extry software, saving 10 hours of precious human hours per week.",
    image: "https://via.placeholder.com/300x200",
    technologies: ["Python", "Django", "PostgreSQL"],
    description: "Sed pulvinar ipsum ut lacus tempor, quis porttitor quam hendrerit.",
    githubLink: "https://github.com/example/project3",
    liveDemoLink: null
  },
  {
    id: 4,
    name: "Project 3",
    desc: "Text extraction, data extry software, saving 10 hours of precious human hours per week.",
    image: "https://via.placeholder.com/300x200",
    technologies: ["Python", "Django", "PostgreSQL"],
    description: "Sed pulvinar ipsum ut lacus tempor, quis porttitor quam hendrerit.",
    githubLink: "https://github.com/example/project3",
    liveDemoLink: null
  }
];
// Add quick description, before technoligies
const ProjectCard = ({ project, expanded, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project.id)}>
      <img src={project.image} alt={project.name} className="project-image" />
      <h3>{project.name}</h3>
      <p>{project.desc}</p>

      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} id={tech} className="technology">{tech}</span>
        ))}
      </div>

      <div className="links">
        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {project.liveDemoLink && <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
      </div>

      <div className={`description ${expanded ? 'expanded' : ''}`}>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

const ProjectList = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const handleExpand = (projectId) => {
    setExpandedProjectId(projectId === expandedProjectId ? null : projectId);
  };

  return (
    <div>
      <h1 className="header">Jacob Dement's projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            expanded={project.id === expandedProjectId}
            onClick={handleExpand}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
