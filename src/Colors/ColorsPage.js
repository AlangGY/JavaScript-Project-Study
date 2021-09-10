export default function ColorPage({ $target }) {
  const $container = document.createElement("div");
  $container.className = "Color Page";
  const $button = document.createElement("button");
  $button.className = "change-color";
  $button.textContent = "Click Me";

  this.render = () => {
    $container.appendChild($button);
    $target.appendChild($container);
  };
  $button.addEventListener("click", (e) => {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    $container.style.backgroundColor = `rgb(${r},${g},${b})`;
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
