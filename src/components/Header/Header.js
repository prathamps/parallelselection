const searchInput = document.querySelector("[data-search]")
let searchData
searchInput.addEventListener("input", (e) => {
	const value = e.target.value
	searchData = value
})

addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		event.preventDefault()
	}
})

const getSearchData = () => searchData

console.log("searchData", searchData)

export { searchData }
