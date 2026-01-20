const $listMessages = document.querySelector(".messages")
const $replyMessage = document.getElementById("reply")
const $formMessage = document.getElementById("formMessage")

let messages = [{
    id: 1,
    text: "Hola! ¿Querés venir por un cafe?",
    hour: "14:12",
    me: false
},
{
    id: 2,
    text: "Si, perfecto. ¿A las 18 te viene bien?",
    hour: "14:13",
    me: true
},
{
    id: 3,
    text: "Dale, en la plaza entonces 😎😃",
    hour: "14:14",
    me: false
}
]

const loadChats = () => {
  const data = JSON.parse(localStorage.getItem("messages"))
  if(data === null){
    return []
  }
  return data
}

const saveChats = (list) => {
    localStorage.setItem("messages",JSON.stringify(list))
}

const renderMessages = (list) => {
    $listMessages.innerHTML = ""

    list.forEach((message) => {
        $listMessages.innerHTML += `
            <div class="message ${message.me ? 'me' : 'you'}">
                <p class="message-content">${message.text}</p>
                <p class="hour">${message.hour}</p>
            </div>
        `
    });
}

const sendMessage = (e) => {
    const today = new Date()

    if(e.key === "Enter" && !e.shiftKey){
        e.preventDefault()
        const newMessage = {
            text: $replyMessage.value,
            hour: today.getHours() + ":" + today.getMinutes(),
            me: true
        }
        // messages.push(newMessage)
        const messagesInLs = loadChats()
        messages = [...messagesInLs, newMessage]

        saveChats(messages)
        renderMessages(messages)

        $formMessage.reset()
    }
}

// $formMessage.addEventListener("submit",sendMessage)
$replyMessage.addEventListener("keydown", (e) => {
    sendMessage(e)
} )

const initialMessages = loadChats()
renderMessages(initialMessages)