// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Rajendra Maharjan",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "With over 7 years of professional experience as a Senior Associate Software Engineer, I bring a wealth of expertise in software development, marked by analytical thinking, creative problem-solving, and strong project management skills. My journey has been anchored in application development, with a significant portion of my career dedicated to mastering Java and designing Web Services, proficient in planning application architecture, I excel in developing, integrating, and delivering robust and scalable components. I am committed to engineering high-quality software solutions that align seamlessly with business needs.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    // svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "GraphQL",
    svg:     'M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z M39.8 272.2h320.3v16.6H39.8z M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9'
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },


];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "SMI Project",
    skills: ["Java, JPA, HTML, CSS, MySQL, IntelliJ Idea"],
    url: "https://github.com/RajendraMaharjan",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Agency Monitor Spider",
    skills: ["Java, Google Guice, JPA, HTML, CSS, JS, Docker, Linux, Shell"],
    url: "",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Risk Customer Service",
    skills: ["Java, Springboot, microservices, Resilience 4j, Docker, Harness, Kibana, Postman"],
    url: "https://github.com/RajendraMaharjan",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "CrsAggregator Business Service",
    skills: ["Springboot, Java, React, Html, CSS, Oracle, Docker, K8, SonarQube, Openshift, CICD, bitbucket, SonarLint, Kibana, Intellij Idea"],
    url: "https://github.com/RajendraMaharjan"  ,
  },
];
// Edit your Education Activities, its name and the url.
const section4Title = "Education";
const education = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "edu1",
    name: "Bachelor's in Computer Engineering",
    url: "https://www.kecktm.edu.np/",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "edu2",
    name: "Master's In Computer Science",
    url: "https://www.miu.edu/",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
      "Excited about my work? Let's connect! Whether you have a project in mind or just want to chat tech, I'm all ears. Drop me a message, and let's explore the possibilities together.",
    copyright: "Rajendra Maharjan",
    name:"Rajendra Maharjan",
    address:"Portland St, Irving, TX, 75038",
    email:"rajendramaharjan666@gmail.com",
    phone:"+1(641)-819-2261", 
  contactUrl: "Post to AWS HERE -- Pending rajendra",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/RajendraMaharjan",
  instagram: "https://www.instagram.com/rajendra_maharjan/",
  linkedin: "https://www.linkedin.com/in/rajendra-maharjan/",
  resume: "https://drive.usercontent.google.com/u/2/uc?id=13k1KdtMnxyFQFshcmsM86ohsGGLnsJaN&export=download",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  education,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
