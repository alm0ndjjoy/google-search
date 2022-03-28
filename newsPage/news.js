const form = document.querySelector("form")
form.addEventListener("click", (e) => {
    e.preventDefault()
    searchNews()

})

function searchNews(){
    const userInput = document.querySelector("input#search").value
    fetch(`https://google-search3.p.rapidapi.com/api/v1/news/q=${userInput}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "64d178367fmsh7cc4921a2172516p1832c3jsnba81f7ea10f5"
	}
})
.then(res => res.json())
.then(data =>{
    const results = data.entries
    console.log(results)
    results.map(a => {
        console.log(a)
    })
})
}


