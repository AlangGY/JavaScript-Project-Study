export default function HomePage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "Home Page";

  this.render = () => {
    $target.appendChild($page);
    $page.innerHTML = `
        <h1>✨Alang's JavaScript MiniProject✨</h1>
        <p>해당
          <a href="https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h">
            링크
          </a>
          에 기재된 프로젝트들을 클론하여 만들어보는 페이지입니다.
        </p>
        `;
  };
}
