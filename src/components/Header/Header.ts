import { getDisplayDetails } from "../BlogPostSection/BlogPostSection"

const searchInput = document.querySelector("[data-search]") as HTMLInputElement
let searchData: String
searchInput &&
	searchInput.addEventListener("input", (e) => {
		const value = (e.target as HTMLInputElement).value
		searchData = value
		getDisplayDetails()
	})

addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		event.preventDefault()
		window.location.href = `/search?result=${searchData}`
	}
})

export { searchData }
