const $search = document.querySelector("search")
const $listChat = document.querySelector(".chats")
const $chats = document.querySelectorAll(".user-chat")

const chatsData = [
    {
        name: "Karina",
        lastMessage: "¿Nos vemos a las 18hs?",
        avatar: "./src/assets/foto-perfil-1.jpg"
    },
    {
        name: "Jennifer",
        lastMessage: "¿Viste el nuevo capitulo de IT?🤯",
        avatar: "./src/assets/foto-perfil-4.jpg"
    },
    {
        name: "Grupo Proyecto",
        lastMessage: "Push a main - revision",
        avatar: "./src/assets/foto-perfil-2.webp"
    },
    {
        name: "Hernan",
        lastMessage: "Suerteeee!!!!",
        avatar: "./src/assets/foto-perfil-5.jpg"
    },
    {
        name: "Soporte",
        lastMessage: "Tu factura esta lista",
        avatar: "./src/assets/foto-perfil-3.webp"
    }
]

const searchUsers = () => {
    const UserName = $search.value
}

$search.addEventListener("input",searchUsers)