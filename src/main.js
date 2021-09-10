import App from "./App.js";
const pages = [
  { name: "Home", url: "/" },
  { name: "Color", url: "/color" },
  { name: "Hex-Gradient", url: "/hex-gradient" },
];
const $target = document.querySelector(".App");

new App({ $target, initialState: { pages, selectedPage: null } });
