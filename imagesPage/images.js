const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    getImages();
})

function getImages (){
    const userInput = document.querySelector("input#search").value
fetch(`https://google-search3.p.rapidapi.com/api/v1/images/q=${userInput}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "64d178367fmsh7cc4921a2172516p1832c3jsnba81f7ea10f5"
	}
})
.then(res => res.json())
.then(data => {
    
    const imageContainer = document.querySelector("div#imageContainer")
    imageContainer.innerHTML = " ";
    console.log(data.image_results)
    const dataImages = data.image_results
    dataImages.map(a => {
        // const aDiv = document.createElement("div")
        const img = document.createElement("img")
        img.src = a.image.src
        // const link = document.createElement("a")
        // link.href = a.link
        // link.textContent = a.link.title
        // link.id = "linkText"
        // aDiv.append(link)
        imageContainer.append(img)
    })
})
.catch(err => {
	console.error(err);
})
}