export default function Counter({ $target, initialState, onPlus, onMinus }) {
  // Local Variable
  let isInit = true;
  // DOM Create
  const $container = document.createElement("div");
  $container.className = "container";
  $target.appendChild($container);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (isInit) {
      $container.innerHTML = `
            <h1 class="title">카운터</h1>
            <h1 class="counter">${this.state}</h1>
            <div class="wrapper"> 
              <button class="increase">Increase</button>
              <button class="decrease">Decrease</button>
            </div>
            `;

      isInit = false;
    }
    const $counter = $container.querySelector(".counter");
    $counter.textContent = this.state;
    this.state >= 0
      ? $counter.classList.add("plus")
      : $counter.classList.remove("plus");
  };

  this.render();

  $container.addEventListener("click", (e) => {
    const $counter = $container.querySelector(".counter");
    const {
      target: { className },
    } = e;
    switch (className) {
      case "increase":
        onPlus();
        $counter.classList.add("up");

        break;
      case "decrease":
        onMinus();
        $counter.classList.add("down");
        break;
    }
  });

  $container.addEventListener("animationend", (e) => {
    const { target } = e;
    target.classList.remove("up");
    target.classList.remove("down");
  });
}
