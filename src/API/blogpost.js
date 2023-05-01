const shineables = document.querySelectorAll(".diamondShine")
const readProgress = document.querySelector("#readbar")
const readProgressSecond = document.querySelector("#readbarSecond")
const completeSign = document.querySelector(".readCompleteContainer")
const completeText = document.querySelector(".readInner")
const spookyMessages = [
	"Watch your back.",
	"Don't look up.",
	"Hear that whisper?",
	"They're watching you.",
	"Follow the shadows.",
	"Darkness envelops all.",
	"Run, don't stop.",
	"You're not alone.",
	"Dread creeps closer.",
	"Eyes in darkness.",
	"Quiet, too quiet.",
	"Door creaks open.",
	"Lost in woods.",
	"Fear the darkness.",
	"Something's coming...",
	"Silence, then scream.",
	"Ghostly presence felt.",
	"Beware the shadows.",
	"Running out time.",
	"Don't trust anyone.",
	"Beyond the portal.",
	"Trapped in limbo.",
	"Can't escape curse.",
	"Desperate for freedom.",
	"Lost in dimension.",
	"Help me escape.",
	"Hear my plea.",
	"Time is running.",
	"Curse grows stronger.",
	"Break the spell.",
]

const updateReadProgress = (element, event) => {
	let halfProgress = 100 / shineables.length
	if (readProgress.value != 100)
		if (readProgress.value + halfProgress * 2 > 100) {
			readProgress.value += halfProgress * 2
			setTimeout(() => {
				readProgressSecond.value = readProgress.value + halfProgress * 2 - 100
			}, 600)
		} else readProgress.value += halfProgress * 2
	else readProgressSecond.value += halfProgress * 2
	if (readProgressSecond.value == 100) {
		completeText.innerText = spookyMessages[Math.floor(Math.random() * 9)]
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
