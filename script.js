const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  googleSearch();
  form.reset();
});

function googleSearch() {
  const userInput = document.querySelector("input#search").value;
  fetch(
    `https://google-search3.p.rapidapi.com/api/v1/search/q=${userInput}&num=100`,
    {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "64d178367fmsh7cc4921a2172516p1832c3jsnba81f7ea10f5",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const wholeContainer = document.querySelector("div#whole-container");
      wholeContainer.innerHTML = " ";
      console.log(data);
      // const searchContainer = document.createElement = "div"
      const results = data.results;
      // const text = document.createElement("h3")
      // text.textContent = `Results for {userInput}`
      results.map((a) => {
        const resultsContainer = document.createElement("div");
        const linkContainer = document.createElement("div");
        const link = document.createElement("a");
        link.href = a.link;
        link.id = "link";
        link.textContent = a.link;
        const title = document.createElement("h3");
        title.textContent = a.title;
        linkContainer.append(link, title);
        const description = document.createElement("span");
        description.id = "description";
        description.textContent = a.description;
        const cite = document.createElement("cite");
        cite.textContent = a.cite.domain;
        resultsContainer.append(linkContainer, description, cite);
        wholeContainer.append(resultsContainer);
      });
    });
}
