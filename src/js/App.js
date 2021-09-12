import { makeRouter, routeName } from "./router.js";
import ColorPage from "./Colors/ColorsPage.js";
import HexGradientPage from "./Hex-Gradient/HexGradientPage.js";
import Nav from "./Nav.js";
import RandomQuoteGeneratorPage from "./RandomQuoteGenerator/RandomQuoteGeneratorPage.js";
import TheMessagePage from "./TheMessage/TheMessagePage.js";
import HomePage from "./Home/HomePage.js";
import { pages } from "./Constant.js";
import CounterPage from "./Counter/CounterPage.js";

export default function App({ $target }) {
  const $content = document.createElement("content");
  $content.className = "Content";
  // State
  this.state = { pages, selectedPage: null };

  this.setState = (nextState) => {
    this.state = nextState;

    nav.setState(this.state);
  };

  // Component

  const nav = new Nav({ $target, initialState: this.state });

  $target.appendChild($content);

  const homePage = new HomePage({ $target: $content });

  const colorPage = new ColorPage({ $target: $content });

  const hexGradientPage = new HexGradientPage({ $target: $content });

  const randomQuoteGeneratorPage = new RandomQuoteGeneratorPage({
    $target: $content,
  });

  const theMessagePage = new TheMessagePage({ $target: $content });

  const counterPage = new CounterPage({ $target: $content });

  // Route

  this.route = () => {
    $content.innerHTML = "";
    const { pathname } = window.location;
    this.setState({ ...this.state, selectedPage: pathname || null });
    switch (pathname.split("/")[1]) {
      case routeName.home:
        homePage.render();
        break;
      case routeName.color:
        colorPage.render();
        break;
      case routeName.hexGradient:
        hexGradientPage.render();
        break;
      case routeName.randomQuoteGeneratorPage:
        randomQuoteGeneratorPage.render();
        break;
      case routeName.theMessage:
        theMessagePage.render();
      case routeName.Counter:
        counterPage.render();
    }
  };

  this.init = () => {
    this.route();
    makeRouter(() => this.route());
  };
  this.init();
}
