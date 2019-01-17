const mongoose = require("mongoose");
const Project = require("../models/project-model.js");

mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const projects = [
  {
    name: "Pairs",
    creators: [
      {
        name: "Paul Abarnou",
        linkedInUrl: "https://www.linkedin.com/in/paul-abarnou-1b389080/"
      }
    ],
    screenshotUrl: "https://www.thoughtco.com/thmb/fkB7M4niWhKwstAaCDgbu_vEBEY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Getty_word_pairs-245000011-585a0fff3df78ce2c30310ab-5bb3813bc9e77c0026039a6b.jpg",
    description:
      "Pairs allows people to rent an appartment for small periods on a regular basis (e.g few days per week during few months)",
    gitHubUrl: "https://github.com/PaulAbarnou37",
    projectUrl: "http://pairs-in-paris.herokuapp.com/",
    projectType: "fullstack",
    display: "web",
    tools: ["MongoDB", "Node.js", "Express.js", "React.js"],
    likes: 56,
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "notverified",
    squad: "#111 - August 18"
  },
  {
    name: "Custom React App",
    creators: [
      {
        name: "Mohammed Zamama",
        linkedInUrl: "https://www.linkedin.com/in/mohammed-1b389080/"
      },
      {
        name: "Emmanuelle Jaldoreau",
        linkedInUrl: "https://www.linkedin.com/in/mohammed-1b389080/"
      },
      {
        name: "Pauline Brothier",
        linkedInUrl: "https://www.linkedin.com/in/mohammed-1b389080/"
      }
    ],
    screenshotUrl: "http://www.rudebaguette.com/assets/ecommerce-12.jpg",
    description:
      "Custom React App is an e-commerce platform that you can manage on Wordpress and developped with React",
    gitHubUrl: "https://github.com/MomoPauletteEmmanuelle",
    projectUrl: "http://customreactapp.herokuapp.com/",
    projectType: "fullstack",
    display: "web",
    tools: ["MongoDB", "Node.js", "Express.js", "React.js"],
    likes: 60,
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "verified",
    squad: "#121 - March 18"
  },
  {
    name: "Facebook",
    creators: [
      {
        name: "Marie Gilier",
        linkedInUrl: "https://www.linkedin.com/in/marie-gillier/"
      },
      {
        name: "Paul Abarnou",
        linkedInUrl: "https://www.linkedin.com/in/paul-abarnou-1b389080/"
      },
      {
        name: "Abi Summers",
        linkedInUrl: "https://www.linkedin.com/in/abisummers/"
      }
    ],
    screenshotUrl:
      "https://i.kinja-img.com/gawker-media/image/upload/s--8mfRXFFg--/c_scale,f_auto,fl_progressive,q_80,w_800/lerhtnwejopgb63yvs8m.jpg",
    description: "Facebook is a social platform that connects the world",
    gitHubUrl: "https://github.com/PaulAbarnou37",
    projectUrl: "https://facebooook.herokuapp.com/",
    projectType: "front-end",
    display: "mobile",
    tools: ["MongoDB", "Node.js", "Express.js", "React.js"],
    likes: 32,
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "verified",
    squad: "#111 - August 18"
  },
  {
    name: "LinkedIn",
    creators: [
      {
        name: "Nizar Khalife",
        linkedInUrl: "https://www.linkedin.com/in/nizarr-1b389080/"
      }
    ],
    screenshotUrl:
      "https://lh3.googleusercontent.com/z0gMa0aRAkLxjS-lVaSOO1Ygb48rttOcR5iRpgJPTM6_enkfeCuN37JWm_9qcHJaJw",
    description:
      "Custom React App is an e-commerce platform that you can manage on Wordpress and developped with React",
    gitHubUrl: "https://github.com/nizarkhalife",
    projectUrl: "http://nizarrrrrr.herokuapp.com/",
    projectType: "fullstack",
    display: "web",
    tools: ["MongoDB", "Node.js", "Express.js", "React.js"],
    likes: 87,
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Part Time",
    verified: "notverified",
    squad: "#111 - August 18"
  },
  {
    name: "Twitter",
    creators: [
      {
        name: "Maya Despretz",
        linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/"
      }
    ],
    screenshotUrl:
      "https://www.vu-du-web.com/wp-content/uploads/2014/02/1657806-1024x576.jpg",
    description: "Twitter is a social platform where you can post stuff on",
    gitHubUrl: "https://github.com/twitterofgithub",
    projectUrl: "http://twiwiter.herokuapp.com/",
    projectType: "UX",
    display: "web",
    tools: ["MongoDB", "Node.js", "Express.js", "React.js"],
    likes: 13,
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "UX/UI Part Time",
    verified: "verified",
    squad: "#51 - May 17"
  },
  {
    name: "Github",
    creators: [
      {
        name: "Guy Theub",
        linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/"
      }
    ],
    screenshotUrl: "https://github.githubassets.com/images/modules/explore/social.jpg",
    description:
      "Github is platform for developpers to collaborate and share blahblah",
    gitHubUrl: "https://github.com/twitterofgithub",
    projectUrl: "http://twiwiter.herokuapp.com/",
    projectType: "UI",
    display: "web",
    tools: ["MongoDB", "Node.js", "Express.js", "React.js"],
    likes: 13,
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "UX/UI Part Time",
    verified: "notverified",
    squad: "#101 - October 18"
  },
  {
    name: "IronHack",
    creators: [
      {
        name: "Aillero Nack",
        linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/"
      }
    ],
    screenshotUrl:
      "https://wydden.com/wp-content/uploads/2018/10/EVENTBRITE_1-FINAL.png",
    description:
      "Github is platform for developpers to collaborate and share blahblah",
    gitHubUrl: "https://github.com/twitterofgithub",
    projectUrl: "http://ironhacck.herokuapp.com/",
    projectType: "front-end",
    display: "mobile",
    tools: ["MongoDB", "Node.js", "Express.js", "React.js"],
    likes: 71,
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Data Analytics",
    verified: "verified",
    squad: "#119 - May 19"
  },
  {
    name: "Crapfounder",
    creators: [
      {
        name: "John Dimitroff",
        linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/"
      }
    ],
    screenshotUrl:
      "https://www.thegatewayonline.ca/wp-content/uploads/2017/01/Arts-Supplied-The-Founder-Movie-Review.jpg",
    description:
      "Github is platform for developpers to collaborate and share blahblah",
    gitHubUrl: "https://github.com/twitterofgithub",
    projectUrl: "http://ironhacck.herokuapp.com/",
    projectType: "data",
    display: "mobile",
    tools: ["MongoDB", "Node.js", "Express.js", "React.js"],
    likes: 83,
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Data Analytics",
    verified: "verified",
    squad: "#61 - March 17"
  },
  {
    name: "Amazon",
    creators: [
      {
        name: "Jeff Bezos",
        linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/"
      },
      {
        name: "Paul Abarnou",
        linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/"
      }
    ],
    screenshotUrl:
      "https://dyw7ncnq1en5l.cloudfront.net/optim/news/71/71319/1_amazon.jpg",
    description:
      "Github is platform for developpers to collaborate and share blahblah",
    gitHubUrl: "https://github.com/twitterofgithub",
    projectUrl: "http://ironhacck.herokuapp.com/",
    projectType: "data",
    display: "mobile",
    tools: ["MongoDB", "Node.js", "Express.js", "React.js"],
    likes: 14,
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Data Analytics",
    verified: "verified",
    squad: "#111 - August 18"
  }
];

Project.create(projects)
  .then(projectResult => {
    console.log(`inserted ${projectResult.length} PROJECTS YAY`);
  })
  .catch(err => {
    console.log("Created failure!!", err);
  });
