import { push } from "./router.js";

export default function Nav({ $target, initialState }) {
  // DOM Create
  const $nav = document.createElement("nav");
  $nav.className = "Navigator";

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    $target.appendChild($nav);
    const { pages, selectedPage } = this.state;
    console.log(selectedPage, pages);
    $nav.innerHTML = `
    ${pages
      .map(
        ({ name, url }) => `
        <div class="Link ${
          selectedPage == url ? "selected" : ""
        }" data-url="${url}">
          ${name}
        </div>`
      )
      .join("")}
`;
  };

  $nav.addEventListener("click", (e) => {
    const $page = e.target.closest(".Link");
    if ($page) {
      const { url } = $page.dataset;
      push(url);
    }
  });
}
