const speechRecognition = window.webkitSpeechRecognition;

const recogition = new speechRecognition()

const textArea = document.querySelector(".textArea")
const button = document.querySelector(".mainBtn")
const instructions = document.querySelector("p")
let content = "";

recogition.continuous = true;

console.log(recogition)


recogition.onresult = (e) => {
    let current = e.resultIndex
    let transcript = e.results[current][0].transcript
    content += transcript
    textArea.innerText = content
}

button.addEventListener("click", (e) => {
    if (content.length) content += ""
    recogition.start()
    setTimeout(() => {
        recogition.stop();
    }, 3000)
})

recogition.onstart = () => {
    instructions.innerText = "Voice recognition is on"
}

recogition.onspeechend = () => {
    instructions.innerText = "No activity"
}

recogition.onerror = () => {
    instructions.innerText = "Try again"
}

textArea.addEventListener("input", () => {
    content = textArea.value;
})

