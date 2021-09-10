export default function RandomQuoteGeneratorPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "RandomQuoteGenerator Page";

  this.render = () => {
    $target.appendChild($page);
    $page.innerHTML = `
    <div class="quote-container">
      <h1>Quote</h1>
      <p class="quote-text">...</p>
      <p class="quote-author">Author</p>
    </div>
    <button>Generate Quote</button>
    `;
  };

  $page.addEventListener("click", async (e) => {
    const { quote, name } = await getRandomQuote();
    const $quoteContainer = $page.querySelector(".quote-container");
    $quoteContainer.querySelector(".quote-text").innerText = quote;
    $quoteContainer.querySelector(".quote-author").innerText = name;
  });

  const getRandomQuote = async () => {
    try {
      const res = await fetch(
        "https://quotel-quotes.p.rapidapi.com/quotes/random",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-rapidapi-host": "quotel-quotes.p.rapidapi.com",
            "x-rapidapi-key":
              "1272ed783amshe40b9176ec8d6e2p193236jsn7a5df7a8c1fb",
          },
          body: JSON.stringify({}),
        }
      );

      if (res.ok) {
        return res.json();
      }
    } catch (e) {
      throw Error(e);
    }
  };
}
