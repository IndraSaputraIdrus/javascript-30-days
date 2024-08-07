//"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"

function findMatches(wordToMatch) {
  const regex = new RegExp(wordToMatch, "gi");
  return cities.filter(
    (place) => place.city.match(regex) || place.state.match(regex),
  );
}

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function highlightMatch(text, value) {
  const regex = new RegExp(value, "gi");
  return text.replace(regex, (match) => `<span class="hl">${match}</span>`);
}

const res = await fetch("./assets/data/cities.json");
/** @type { Array<{state: string, city: string}> } cities */
const cities = await res.json();

const input = document.getElementById("search-input");
const resultContainer = document.getElementById("result");
const resultCount = document.getElementById("result-count");

input.addEventListener(
  "input",
  debounce((e) => {
    const value = e.target.value;
    const result = findMatches(value);

    const html = result.map((place) => {
      const cityName = highlightMatch(place.city, value);
      const stateName = highlightMatch(place.state, value);
      const population = place.population;
      return `<li class="suggestion-result">${cityName}, ${stateName} <span>${population}</span></li>`;
    });

    if (html.length < 1) {
      resultContainer.innerHTML = `<li class="text-center italic text-muted">Not found</li>`;
    } else {
      resultContainer.innerHTML = html.slice(0, 25).join("");
    }

    resultCount.textContent = html.length || 0;
  }),
);
