import Message from "./Message.js";

export default function TheMessagePage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "TheMessage Page";

  this.state = null;

  this.setState = (nextState) => {
    if (this.state !== nextState) {
      this.state = nextState;
      message.setState(this.state);
    }
  };
  const message = new Message({
    $target: $page,
    onInput: (text) => {
      this.setState(text);
    },
  });

  this.render = () => {
    $target.appendChild($page);
  };
}
