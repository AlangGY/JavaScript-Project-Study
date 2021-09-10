export default function Message({ $target, onInput }) {
  // Local Variables
  let isInit = true;
  let isStart = false;
  const $container = document.createElement("div");
  $container.className = "messageContainer";
  $target.appendChild($container);

  // State : text(String)
  this.state = null;

  this.setState = (nextState) => {
    let isRender = this.state === nextState ? false : true;
    this.state = typeof nextState === "string" ? nextState : "";
    if (isRender) {
      this.render();
    }
  };

  this.render = () => {
    if (isInit) {
      $container.innerHTML = `
            <h1 class="message__header">Alang Message📫</h1>
            <label class="message__label" for="message-input">메시지를 입력하세요</label>
            <form>
              <div class="wrapper">
                <button class="message__button">✉</button>
                <input type="text" id="message-input" class="message__input" />
              </div>
              <button class="message__submit">Send</button>
            </form>
            <p class="message__result transform">
            </p>
            `;
      isInit = false;
    }
    const $result = $container.querySelector("p");
    $result.innerText = this.state || "";
  };

  this.render();

  $container.addEventListener("input", (e) => {
    const $input = $container.querySelector("input");
    onInput($input.value);
    if (!isStart) {
      const $result = $container.querySelector("p");
      $result.classList.add("show");
      isStart = true;
    }
    if ($input.value.length === 0) {
      isStart = false;
    }
  });

  $container.addEventListener("submit", (e) => {
    e.preventDefault();
    const $input = $container.querySelector("input");
    const $result = $container.querySelector("p");
    $input.value = "";
    $input.focus();
    isStart = false;
    $result.classList.add("send");
  });

  $container.addEventListener("animationend", (e) => {
    const { animationName } = e;
    switch (animationName) {
      case "show":
        e.target.classList.remove("show");
        break;
      case "send":
        e.target.classList.remove("send");
        e.target.innerText = "";
        break;
    }
  });
}
