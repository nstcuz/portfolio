import StackIcon from "tech-stack-icons";

const projects = [
  {
    title: "JavaScript Card Game",
    gitURL: "https://github.com/nstcuz/JSGame",
    heroImage: "src/assets/JSGame-hero.png",
    description: "A simple matching card game. If the two cards match they will remain face up, and those cards are considered 'matched.' If the two cards do not match, they will flip back over and the player can try again. Once all the cards are matched you win the game.",
    stack: ["html5", "sass", "js"],
  },
  {
    title: "Movie Database",
    gitURL: "https://github.com/nstcuz/movie-database",
    heroImage: "src/assets/MovieDB-hero.png",
    description: "A movie database using TMDB's API to retrieve information about now playing, popular, upcoming & top rated movies. Allowing you to find specific details about every movie in their database. You can find information by scrolling the individual pages, or by using the search option to find a specific movie.",
    stack: ["html5", "sass", "reactjs"],
  },
];

export default projects;