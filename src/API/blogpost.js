const shineables = document.querySelectorAll(".diamondShine")
const readProgress = document.querySelector("#readbar")
const readProgressSecond = document.querySelector("#readbarSecond")
const completeSign = document.querySelector(".readCompleteContainer")
const completeText = document.querySelector(".readInner")
const completelist = [
	"Reading Complete!",
	"Story Finished!",
	"Article Done!",
	"End Reached!",
	"Content Consumed!",
	"Done Reading!",
	"Text Concluded!",
	"Post Read!",
	"Finished Article!",
	"Done and Dusted!",
]

const updateReadProgress = (element, event) => {
	if (readProgress.value != 100) readProgress.value += 50
	else readProgressSecond.value += 50
	if (readProgressSecond.value == 100) {
		completeText.innerText = completelist[Math.floor(Math.random() * 9)]
		completeSign.classList.add("container-appear")
	}

	event.classList.remove("diamondShine")
	element.removeEventListener("click", () => {}, false)
}

shineables.forEach((ele, index) => {
	ele.addEventListener("click", (e) => {
		updateReadProgress(ele, e.target)
	})
})
