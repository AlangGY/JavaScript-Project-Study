export default function HexGradientPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "HexGradient Page";

  this.render = () => {
    $target.appendChild($page);

    $page.innerHTML = `
      <div class="text-color">
        <h2>아래의 버튼을 클릭하여 그라데이션을 형성하세요.</h2>
        <h3 class="hex-color"></h3>
      </div>
      <button class="change-color">Click Me</button>
      `;
  };

  $page.addEventListener("click", (e) => {
    const className = e.target.getAttribute("class");
    if (className === "change-color") {
      const startColor = makeRandomColorinHex();
      const endColor = makeRandomColorinHex();

      $page.style.background = `linear-gradient(to right,${startColor},${endColor})`;
      $page.querySelector("h3").innerText = `${startColor} ~ ${endColor}`;
    }
  });

  function getRandomIntWithHexa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
      .toString(16)
      .padStart(2, "0");
  }
  function makeRandomColorinHex() {
    const r = getRandomIntWithHexa(0, 255);
    const g = getRandomIntWithHexa(0, 255);
    const b = getRandomIntWithHexa(0, 255);

    return `#${r}${g}${b}`;
  }
}
