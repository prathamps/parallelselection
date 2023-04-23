const searchInput = document.querySelector("[data-search]") as HTMLInputElement
let searchData: String
searchInput.addEventListener("input", (e) => {
	const value = (e.target as HTMLInputElement).value
	searchData = value
})

addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		event.preventDefault()
	}
})

export { searchData }
