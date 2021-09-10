import { makeRouter, routeName } from "./router.js";
import ColorPage from "./Colors/ColorsPage.js";
import HexGradientPage from "./Hex-Gradient/HexGradientPage.js";
import Nav from "./Nav.js";
import RandomQuoteGeneratorPage from "./RandomQuoteGenerator/RandomQuoteGeneratorPage.js";
import TheMessagePage from "./TheMessage/TheMessagePage.js";
import HomePage from "./Home/HomePage.js";

export default function App({ $target, initialState }) {
  // State
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
  };

  // Component

  const nav = new Nav({ $target, initialState: this.state });

  const homePage = new HomePage({ $target });

  const colorPage = new ColorPage({ $target });

  const hexGradientPage = new HexGradientPage({ $target });

  const randomQuoteGeneratorPage = new RandomQuoteGeneratorPage({ $target });

  const theMessagePage = new TheMessagePage({ $target });

  // Route

  this.route = () => {
    $target.innerHTML = "";
    const { pathname } = window.location;
    nav.setState({ ...this.state, selectedPage: pathname || null });
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
    }
  };

  this.init = () => {
    this.route();
    makeRouter(() => this.route());
  };
  this.init();
}
