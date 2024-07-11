import StackIcon from "tech-stack-icons";

const projects = [
  {
    localURL: "card-game",
    title: "JavaScript Card Game",
    gitURL: "https://github.com/nstcuz/JSGame",
    heroImage: "/assets/JSGame-hero.svg",
    description: "A simple matching card game. If the two cards match they will remain face up, and those cards are considered 'matched.' If the two cards do not match, they will flip back over and the player can try again. Once all the cards are matched you win the game.",
    keypoints: [
      'compiled asprite from source to create all my own art for the site.',
      'learned how to use enable audio with javascript.',
      'match up to two cards at a time, if the cards arent a match they will reset. If the cards are a match they will stay face up until all cards have been matched.'
    ],
    stack: ["html5", "sass", "js"],
    tools: ["linux", "neovim", "xd", "ai"],
  },
  {
    localURL: "movieDB",
    title: "Movie Database",
    gitURL: "https://github.com/nstcuz/movie-database",
    heroImage: "/assets/MovieDB-hero.svg",
    description: "A movie database using TMDB's API to retrieve information about now playing, popular, upcoming & top rated movies. Allowing you to find specific details about every movie in their database. You can find information by scrolling the individual pages, or by using the search option to find a specific movie.",
    keypoints: [
      'connecting to TMDB\'s rest api to fetch data in real time. Using Async/Await syntax.',
      'using react to create a dynamically loading page based on the data passed into it.',
      'collaborating as a group of four, securing confidence in group setting, using github, and management tools to work in close quarters'
    ],
    stack: ["html5", "sass", "reactjs"],
    tools: ["linux", "vscode", "redux"],
  },
  {
    localURL: "capstone",
    title: "Capstone Project",
    gitURL: "https://github.com/htpwebdesign/wcss-theme",
    heroImage: "/assets/capstone-hero.svg",
    description: "The final project for my front-end web development course at BCIT. we had to make a store using the woocommerce plugin for wordpress. it was a 4 person gowup project that taught us how a workflow works with many people. ensuring we learn good communication, managment, and planning skills when creating a website. this project had a very different approach as not only did it help solidify my wordpress, php & development skills. it really put the focus on the importance of non developing stages and reminded me how important is to modularize your tasks, breaking them into tangible pieces.",
    keypoints: [
      'using woocommerce\'s built in hooks and wordpresses function to manipulate the layout of the data on the website.',
      'creating a child theme for wordpress from scratch.',
      'collaborating within a group. using githubs version control, trello for communication, and practicing a waterfall style approach.'
    ],
    stack: ["html5", "sass", "php", "wordpress"],
    tools: ["vscode", "figma", "gulp", "apache", "mysql"],
  },
  {
    localURL: "linux-dots",
    title: ".files",
    gitURL: "https://github.com/nstcuz/arch-dots",
    heroImage: "/assets/dotfiles-hero.png",
    description: "this is my linux config files, including a configuration for the window manager hyprland, a customized desktop theme, a taskbar designed & customized to match my specific needs. including everything from terminal customization, spotify themes, application launcher, as well as my neovim configuration, and plenty more pieces.",
    keypoints: [
      'a fun project to enhance my UI & UX experience while programming, allowing me to significant speed up my workflow with quick access key binds.',
      'a full configuration for a window manager almost fully getting rid of the need to use a mouse.',
      'modularizing plugins for neovim with Lua, settings up the LSP & creating a environment im comfortable programming in.'
    ],
    stack: ["bash", "lua", "json"],
    tools: ["linux", "firefox", "alacritty"],
  },
  {
    localURL: "portfolio",
    title: "Portfolio Site",
    gitURL: "https://github.com/nstcuz/portfolio",
    heroImage: "/assets/portfolio-hero.svg",
    description: "A website I made to showcase my projects. while creating this site i focused on learning TailwindCSS, and put a lot of energy into learning more about animating. Using AnimeJS in the navigation and creating my own movements for the hero, and about section to bring some life to each part. I used an API call to display a playlist so that you can listen to some of the music that inspires these projects.",
    keypoints: [
      'learning to use frameworks including react, tailwind, and importing libraries like animejs, daisyui, etc.',
      'focus on writing my own css animations from scratch.',
      'a change to express full creativity in a project, allowing me to go in my own direction.'
    ],
    stack: ["html5", "tailwindcss", "reactjs"],
    tools: ["vscode", "canva", "bash",],
  },
];

export default projects;
