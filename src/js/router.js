const ROUTE_CHANGE_EVENT_NAME = "route-change";
const ROUTE_REPLACE_EVENT_NAME = "route-replace";

export const routeName = {
  home: "",
  color: "color",
  hexGradient: "hex-gradient",
  randomQuoteGeneratorPage: "random-quote-generator",
  theMessage: "the-message",
  Counter: "counter",
};

export const makeRouter = (onRoute) => {
  window.addEventListener(ROUTE_CHANGE_EVENT_NAME, (e) => {
    const { nextUrl } = e.detail;

    if (nextUrl) {
      history.pushState(null, null, nextUrl);

      onRoute();
    }
  });
  window.addEventListener(ROUTE_REPLACE_EVENT_NAME, (e) => {
    const { nextUrl } = e.detail;

    if (nextUrl) {
      history.replaceState(null, null, nextUrl);

      onRoute();
    }
  });
  window.addEventListener("popstate", () => {
    onRoute();
  });
};

export const push = (nextUrl) => {
  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGE_EVENT_NAME, {
      detail: {
        nextUrl,
      },
    })
  );
};

export const replaceHistory = (nextUrl) => {
  window.dispatchEvent(
    new CustomEvent(ROUTE_REPLACE_EVENT_NAME, {
      detail: {
        nextUrl,
      },
    })
  );
};
