import { makeRouter, routeName } from "./router.js";
import ColorPage from "./Colors/ColorsPage.js";
import HexGradientPage from "./Hex-Gradient/HexGradientPage.js";
import Nav from "./Nav.js";

export default function App({ $target, initialState }) {
  // State
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
  };

  // Component

  const nav = new Nav({ $target, initialState: this.state });

  const colorPage = new ColorPage({ $target });

  const hexGradientPage = new HexGradientPage({ $target });

  // Render
  this.render = () => {
    const { pages } = this.state;
    // $target.innerHTML = ``;
  };
  // Route

  this.route = () => {
    $target.innerHTML = "";
    const { pathname } = window.location;
    nav.setState({ ...this.state, selectedPage: pathname || null });
    switch (pathname.split("/")[1]) {
      case routeName.home:
        break;
      case routeName.color:
        colorPage.render();
        break;
      case routeName.hexGradient:
        hexGradientPage.render();
        break;
    }
  };

  this.init = () => {
    this.render();
    this.route();
    makeRouter(() => this.route());
  };
  this.init();
}
