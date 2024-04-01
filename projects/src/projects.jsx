import React, { useState } from 'react';
import './projects.css'; // Import your CSS file for styling

const projects = [
  {
    id: 1,
    name: "OCR Automation Discord Bot",
    desc: "Text extraction and automated data entry software, saving 10 precious human hours per week. User base of 50+ people daily.",
    image: "eye.png",
    technologies: ["Python", "GCP", "PyTesseractOCR", "OpenCV"],
    description: "Members of an online gaming community I'm a part of were having to do 10+ hrs of manual data entry per week... Which is not what a game is meant for! Games are meant to bring joy, not to make you work. So I along with my partner made this bot which accepts a screenshot from the user, then using open computer vision and Googles TesseractOCR the bot extracts the text from the image. Next the bot automatically updates a spreadsheet using gSpread (A google spreadsheet API) giving each player in the screenshot the appropriate amount of game credits to be spent on in game gear. Lastly the bot returns a message describing which players were at the boss, and how many credits they received. This software is currently being utilized by 50+ people daily and is hosted on Google Cloud.",
    githubLink: "https://github.com/example/project1",
    liveDemoLink: "https://example.com/project1-demo"
  },
  {
    id: 2,
    name: "3D Portfolio",
    desc: "My personal portfolio made with React Three Fiber.",
    image: "portfolio.png",
    technologies: ["React Three Fiber", "Three.js", "JavaScript", "Blender", "React", "Vite", "JSX", "CSS"],
    description: "My goal with this portfolio is to evoke a sense of childlike exploration by pulling you into an interactive 3D world. The landing page is a low-poly underwater scene, and the about page is a 3D room with interactive objects you can click on to learn about me. I used blender to customize and add my own touches to these models found on sketchfab. The logic for the site is written in JavaScript/React/JSX, while the rendering and 3D screen creations are done with React Three Fiber/Three.js. This projects page is pure React with Vite as it's build tool.",
    githubLink: "https://github.com/Oia20/personalPortfolio",
    liveDemoLink: "https://oia20.github.io/personalPortfolio/"
  },
  {
    id: 3,
    name: "Browser RPG",
    desc: "A short engaging React RPG which takes about 10 minutes to beat.",
    image: "rpg.png",
    technologies: ["React", "JavaScript", "JSX", "CSS", "Vite"],
    description: "The goal of this game is to defeat the final dragon. This project was my entry to the React world, with it, I learned the basics of react, and had a blast while doing it! I used Vite for the build tools, and all of the styling is done in vanilla CSS. Give it a whirl and see if you can beat the dragon! :)",
    githubLink: "https://github.com/example/project3",
    liveDemoLink: null
  },
  {
    id: 4,
    name: "Acre and Lot, Land Site",
    desc: "A website built for my partners family business to help with land acquisition.",
    image: "land.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "This website uses vanilla HTML CSS and Javascript to aid my partners family business in land acquisition. One challenge with this project was finding a creative way to handle form submissions in a way convenient for the user that doesn't require a backend as the project is hosted on github pages for free. The way I found was to utilize a google form's input ID's and send the POST request to the google form, allowing the users to submit a form conveniently and to allow my partners family to view the contents of submissions on a google spreadsheet. We tweaked a free template from templated.com for the design on this site to speed up production, so I cannot take full credit for the design on this site.",
    githubLink: null,
    liveDemoLink: null
  },
  {
    id: 5,
    name: "What Should I Learn? Website",
    desc: "Learning focused website which gives you a random article in a selected category and three Youtube videos on the topic.",
    image: "learn.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "I built this website for myself, to solve a problem of wanting to learn about a random topic, but not knowing how to find a truly random way to learn about information in a specific genre. This website uses the WikiAPI along with the YoutubeAPI to generate a random article in a specific category and 3 youtube videos on the same topic. I've come a long way in terms of design skills since this project, but it still serves as a wonderful resource for the times whenever I just want to learn!",
    githubLink: "https://github.com/example/project3",
    liveDemoLink: "https://oia20.github.io/What-to-learn-/"
  }, {
    id: 6,
    name: "Asynchronous Timer Discord Bot",
    desc: "Learning focused website which gives you a random article in a selected category and three Youtube videos on the topic.",
    image: "learn.png",
    technologies: ["Python", "GCP"],
    description: "I built this website for myself, to solve a problem of wanting to learn about a random topic, but not knowing how to find a truly random way to learn about information in a specific genre. This website uses the WikiAPI along with the YoutubeAPI to generate a random article in a specific category and 3 youtube videos on the same topic. I've come a long way in terms of design skills since this project, but it still serves as a wonderful resource for the times whenever I just want to learn!",
    githubLink: "https://github.com/example/project3",
    liveDemoLink: "https://oia20.github.io/What-to-learn-/"
  },
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
    <body>
    <div className='parent'>
      <div className='headerbg'>
      <h1 className="header">Jacob Dement's projects</h1>
      </div>
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
      <footer className='footer'>
        <div className="footer-container">
          <div className="footer-left">
            <p>&copy; 2024 Jacob Dement. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <p><a href='https://oia20.github.io/simpleContact/'>Contact Page</a></p>
          </div>
        </div>
      </footer>
    </div>
    </body>
    
  );
};

export default ProjectList;
