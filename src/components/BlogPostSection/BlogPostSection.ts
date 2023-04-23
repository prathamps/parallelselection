import { monthArr } from "../../API/monthApi"

import { searchData } from "../Header/Header"

// Get the query parameters from the current URL
const queryParams = new URLSearchParams(window.location.search)
const blogPostContainer = document.querySelector(
	"[data-blog-post-container]"
) as HTMLDivElement

const blogPostTemplate = document.querySelector(
	"[data-blog-post-template]"
) as HTMLTemplateElement

const blogPosts = JSON.parse(
	decodeURIComponent(blogPostContainer.dataset["blogPostContainer"] || "")
)

let blogs: any = []

const searchTerm = queryParams.get("search")

let prevSearch: String = "offset"

blogs = blogPosts.map(
	(blog: {
		slug: any
		data: {
			title: string | null
			description: string | null
			date: { getMonth: () => string | number; getDate: () => any }
			readtime: string | null
			share: { image: string }
		}
	}) => {
		const card = (
			blogPostTemplate.content.cloneNode(true) as HTMLTemplateElement
		).children[0]
		const blogTitle = card.querySelector("[data-blog-title]") as HTMLDivElement
		const blogLink = document.createElement("a") as HTMLAnchorElement
		const bloga = "/blog/" + blog.slug
		blogLink.setAttribute("href", bloga)
		blogLink.classList.add("blogPostCard")

		const blogPostCardContent = card.querySelector(
			"[data-post-card-content]"
		) as HTMLElement
		const blogPostImage = card.querySelector(
			"[data-post-image]"
		) as HTMLDivElement
		const blogDescription = card.querySelector(
			"[data-blog-description]"
		) as HTMLDivElement
		const blogMisc = card.querySelector("[data-misc-content]") as HTMLDivElement
		const blogDuration = card.querySelector(
			"[data-duration]"
		) as HTMLSpanElement
		const blogImage = card.querySelector(
			"[data-blog-image]"
		) as HTMLImageElement

		// blogLink.href = `${blog.slug ? "blog/" + blog.slug : "/"}`
		blogTitle.textContent = blog.data.title
		blogDescription.textContent = blog.data.description
		let blogDate = new Date(blog.data.date.toString())
		blogMisc.textContent = `${
			monthArr[blogDate.getMonth()]
		} · ${blogDate.getDate()}`
		blogDuration.textContent = blog.data.readtime
		blogImage.src = blog.data.share.image

		blogLink.appendChild(blogPostCardContent)
		blogLink.appendChild(blogPostImage)

		card.insertBefore(blogLink, card.firstElementChild)
		blogPostContainer.append(card)

		return { title: blog.data.title, element: card }
	}
)

const getDisplayDetails = () => {
	if (searchData != prevSearch) {
		prevSearch = searchData
		console.log("Seach Data", searchData)
		if (!searchData) return
		blogs.forEach((blog: any) => {
			const isVisible = blog.title
				.toLowerCase()
				.trim()
				.includes(searchData.toLowerCase().trim())
			blog.element.classList.toggle("hide", !isVisible)
		})
	}
}

export { getDisplayDetails }
