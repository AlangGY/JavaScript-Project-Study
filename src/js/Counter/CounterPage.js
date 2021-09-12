import Counter from "./Counter.js";

export default function CounterPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "Counter Page";

  this.state = 0;

  this.setState = (nextState) => {
    this.state = nextState;
    counter.setState(this.state);
  };

  const counter = new Counter({
    $target: $page,
    initialState: this.state,
    onPlus: () => {
      this.setState(this.state + 1);
    },
    onMinus: () => {
      this.setState(this.state - 1);
    },
  });

  this.render = () => {
    $target.appendChild($page);
  };
}
