import App from "./App.js";
const pages = [
  { name: "Home", url: "/" },
  { name: "Color", url: "/color" },
  { name: "Hex Gradient", url: "/hex-gradient" },
  { name: "Random Quote Generator", url: "/random-quote-generator" },
  { name: "The Message", url: "/the-message" },
];
const $target = document.querySelector(".App");

new App({ $target, initialState: { pages, selectedPage: null } });
