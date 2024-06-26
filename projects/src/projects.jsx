import React, { useState } from 'react';
import './projects.css'; // Import your CSS file for styling
import ThreeBackdrop from './Backdrop.jsx'

const projects = [
  {
    id: 1,
    name: "Artist Portfolio Website",
    desc: "An Artist portfolio website with a full Admin panel and CMS.",
    image: "artport.png",
    technologies: ["Angular", "TypeScript", "HTML", "CSS", "Docker", "PostgreSQL", "C#", ".NET", "Supabase", "S3", "Firebase", "Cloudflare"],
    description: "I created this website for my partner as a present for our 3 year anniversary, so as you can imagine this was a very passionate project. The admin side of this website allows her to have full CRUD operations over her paintings being displayed on the site. I'm very happy with how the project turned out, hidden within the URL's are also a few easter eggs for her to find. For storing the images I used supabases AWS S3 API. This project also made me love the oppinionated nature of angular development.",
    githubLink: "https://github.com/Oia20/artPortfolio",
    liveDemoLink: "https://rosaliasart.com/home", 
  },
  {
    id: 2,
    name: "Monthly-Canvas",
    desc: "A random famous painting is selected every month, and users can log in to comment on the painting.",
    image: "canvas.png",
    technologies: ["React", "JavaScript", "JSX","HTML", "CSS", "Vite", "Docker", "PostgreSQL", "C#", ".NET", "ReactThreeFiber", "Supabase"],
    description: "I love art, and I wanted to create a website where users could log in and comment on a random famous painting. For the backend of this site I used .NET with C# to create an API which generates the random painting for the month. I used supabase for authentication and postgreSQL for the database. I containerized the API and hosed the docker image via railway. The frontend utilizes Reacts component based architecture and ReactThreeFiber to render the background floaties you see.",
    githubLink: "https://github.com/Oia20/monthly-canvas",
    liveDemoLink: "https://oia20.github.io/monthly-canvas/", 
  },
  {
    id: 3,
    name: "CropSQL Educational Website",
    desc: "A site where users learn basic SQL commands and queries by managing a farms' database.",
    image: "cropSQL.png",
    technologies: ["C#", "Blazor", ".NET", "MySQL", "CSS", "HTML"],
    description: "I find that the best way to learn anything is to enjoy the process i.e. have fun while doing it! So that's what I went for here. The goal is to let the user have fun in something a little bit more attractive than a plain terminal, while learning some basic SQL commands and queries by creating and managing a farm. I used .NET's Blazor and C# for this project, and it was a blast. The component based aspect of Blazor is very intuitive to me. I also used a splash of JS for a few DOM interactions, as well as razor pages and CSS.",
    githubLink: "https://github.com/Oia20/CropSQL",
    liveDemoLink: "https://oia20.github.io/CropSQL/", 
  },
  {
    id: 4,
    name: "MuseDrops, Fullstack Thought Sharing Platform",
    desc: "Website where you share your muses or 'Shower thoughts' with others.",
    image: "drops.png",
    technologies: ["JavaScript", "React", "Vite", "Node", "Express", "MySQL", "TailwindCSS", "Redux", "JSX", "CSS"],
    description: "I love the idea of shower thoughts and how they can be so silly, yet make you stop to think, so I made a website for people to share them! Unfortunately I can't keep the backend of the site live at the moment, so new posts and User Auth are currently unavailable. The Authentication encryption is done with the bcrpyt nodejs library to hash passwords. The database for this project uses MySQL, and the server is created using express/Node.js. The client side uses react, tailwindcss, redux for login state management, and vite for build tools.",
    githubLink: "https://github.com/Oia20/MuseDrops",
    liveDemoLink: "https://oia20.github.io/MuseDropsStatic/", 
    yt: "https://youtu.be/T3d1-iLRyFY?si=agofhsfEN72DvT9j"
  },
  {
    id: 5,
    name: "OCR Automation Discord Bot",
    desc: "Text extraction and automated data entry software, saving 10 precious human hours per week. User base of 50+ people daily.",
    image: "eye.png",
    technologies: ["Python", "GCP", "PyTesseractOCR", "OpenCV"],
    description: "Members of an online gaming community I'm a part of were having to do 10+ hrs of manual data entry per week... Which is not what a game is meant for! Games are meant to bring joy, not to make you work. So I along with my partner made this bot which accepts a screenshot from the user, then using open computer vision and Googles TesseractOCR the bot extracts the text from the image. Next the bot automatically updates a spreadsheet using gSpread (A google spreadsheet API) giving each player in the screenshot the appropriate amount of game credits to be spent on in game gear. Lastly the bot returns a message describing which players were at the boss, and how many credits they received. This software is currently being utilized by 50+ people daily and is hosted on Google Cloud.",
    githubLink: null,
    liveDemoLink: null, 
    yt: "https://www.youtube.com/watch?v=8DBiJJX9OX0&ab_channel=JacobDementDemos"
  },
  {
    id: 6,
    name: "3D Portfolio",
    desc: "My personal portfolio made with React Three Fiber.",
    image: "portfolio.png",
    technologies: ["ReactThreeFiber", "ThreeJS", "JavaScript", "Blender", "React", "Vite", "JSX", "CSS"],
    description: "My goal with this portfolio is to evoke a sense of childlike exploration by pulling you into an interactive 3D world. The landing page is a low-poly underwater scene, and the about page is a 3D room with interactive objects you can click on to learn about me. I used blender to customize and add my own touches to these models found on sketchfab. The logic for the site is written in JavaScript/React/JSX, while the rendering and 3D screen creations are done with React Three Fiber/Three.js. This projects page is pure React with Vite as it's build tool.",
    githubLink: "https://github.com/Oia20/personalPortfolio",
    liveDemoLink: "https://oia20.github.io/personalPortfolio/"
  },
  {
    id: 7,
    name: "Browser RPG",
    desc: "A short engaging React RPG which takes about 10 minutes to beat.",
    image: "rpg.png",
    technologies: ["React", "JavaScript", "JSX", "CSS", "Vite"],
    description: "The goal of this game is to defeat the final dragon. This project was my entry to the React world, with it, I learned the basics of react, and had a blast while doing it! I used Vite for the build tools, and all of the styling is done in vanilla CSS. Give it a whirl and see if you can beat the dragon! :)",
    githubLink: "https://github.com/Oia20/browserRPG",
    liveDemoLink: "https://oia20.github.io/browserRPG/"
  },
  {
    id: 8,
    name: "Acre and Lot, Land Site",
    desc: "A website built for my partners family business to help with land acquisition.",
    image: "land.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "This website uses vanilla HTML CSS and Javascript to aid my partners family business in land acquisition. One challenge with this project was finding a creative way to handle form submissions in a way convenient for the user that doesn't require a backend as the project is hosted on github pages for free. The way I found was to utilize a google form's input ID's and send the POST request to the google form, allowing the users to submit a form conveniently and to allow my partners family to view the contents of submissions on a google spreadsheet. We tweaked a free template from templated.com for the design on this site to speed up production, so I cannot take full credit for the design on this site.",
    githubLink: "https://github.com/Oia20/landsite",
    liveDemoLink: "https://acreandlot.com/"
  },
  {
    id: 9,
    name: "What Should I Learn? Website",
    desc: "Learning focused website which gives you a random article in a selected category and three Youtube videos on the topic.",
    image: "learn.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "I built this website for myself, to solve a problem of wanting to learn about a random topic, but not knowing how to find a truly random way to learn about information in a specific genre. This website uses the WikiAPI along with the YoutubeAPI to generate a random article in a specific category and 3 youtube videos on the same topic. I've come a long way in terms of design skills since this project, but it still serves as a wonderful resource for the times whenever I just want to learn!",
    githubLink: "https://github.com/Oia20/What-to-learn-",
    liveDemoLink: "https://oia20.github.io/What-to-learn-/"
  }, {
    id: 10,
    name: "Asynchronous Timer Discord Bot",
    desc: "Asynchronous timer which allows a gaming community to stay on the same page about NPC respawn times. Utilized by 25+ people daily.",
    image: "timer.png",
    technologies: ["Python", "GCP"],
    description: "This bot allows a community of people to stay on the same page about npc respawn times, allowing for better time management and team coordination. It asynchronously times things, for example, one person says `blank boss down` and the bot returns a message notifying that it was timed, after the set time passes the bot sends a message 8 minutes before to remind you, then if the boss is missed (Another group gets it) the bot then predicts the earliest possible time he could respawn. The bot has great humor too! This helps break up monotony in the users experience.",
    githubLink: null,
    liveDemoLink: null
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
        {project.liveDemoLink && <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Site</a>}
        {project.yt && <a href={project.yt} target="_blank" rel="noopener noreferrer">Youtube Video Demo</a>}

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

  const handleClickedPort = () => {
    window.open("https://oia20.github.io/personalPortfolio/", "_blank")
  }
  const handleClickedGit = () => {
    window.open("https://github.com/Oia20", "_blank")
  }
  const handleClickedLink = () => {
    window.open("https://www.linkedin.com/in/jacob-dement-35658b275/", "_blank")
  }

  return (
    <body>
      <ThreeBackdrop />
    <div className='parent'>
      <div className='headerbg'>
      <h1 className="header">Jacob Dement's projects</h1>
      </div>
      <img className='profile' src='IMG_8257_Original.jpg'/>

      <p className='not'>*Full 3D portfolio not recommended for low ram devices*</p>
      <button className="portfolio-button" onClick={handleClickedPort}>View Full 3D Portfolio</button>
      <button className="portfolio-button" onClick={handleClickedLink}>LinkedIn</button>
      <button className="portfolio-button" onClick={handleClickedGit}>Github</button>

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
