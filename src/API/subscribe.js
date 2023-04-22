import { addDoc, collection } from "firebase/firestore"

import { db } from "../firebase"

let emailInput = document.getElementById("emailInput")
let subscribeBtn = document.getElementById("subscribe")
let emailStatusText = document.getElementById("emailStatusText")
let email = ""
let loader = false
const validateEmail = (mail) => {
	return String(mail)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
}

const disableSendButton = () => {
	subscribeBtn.disabled = true
	subscribeBtn.classList.add("send-disabled")
}

const enableSendButton = () => {
	subscribeBtn.disabled = false
	subscribeBtn.classList.remove("send-disabled")
}

const handleSubmit = async () => {
	loader = true
	const currentDate = new Date().toLocaleString()
	// Add a new document with a generated id.
	console.log({
		date: currentDate,
		email: email,
	})

	try {
		const docRef = await addDoc(collection(db, "email"), {
			date: currentDate || null,
			email: email || null,
		})
		emailStatusText.innerText = "Successfully subscribed!"
		emailStatusText.classList.add("statussuccess")
		loader = false
	} catch (err) {
		console.log(err)
		loader = false
	}

	// Added null check for sendButton
	disableSendButton()
	// Set a timer to re-enable the button when the cooldown expires
	setTimeout(() => {
		// Re-enable the button
		enableSendButton()
		emailStatusText.classList.add("statussuccess")
		// Remove the cooldown expiration time from the Realtime Database
	}, 2 * 60 * 1000)
}

subscribeBtn?.addEventListener("click", (e) => {
	e.preventDefault()
	email = emailInput.value.trim()
	console.log(email.length)
	if (validateEmail(email)) {
		handleSubmit()
	} else {
		emailStatusText.innerText = "Make sure to enter a valid email"
	}
})
