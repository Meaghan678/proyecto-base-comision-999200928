const $search = document.getElementById("search")
const $listChat = document.querySelector(".chats")
const $chats = document.querySelectorAll(".user-chat")
const $noChats = document.querySelector(".noChats")

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
        name: "Papá",
        lastMessage: "Suerteeee!!!!",
        avatar: "./src/assets/foto-perfil-5.jpg"
    },
    {
        name: "Soporte",
        lastMessage: "Tu factura esta lista",
        avatar: "./src/assets/foto-perfil-3.webp"
    }
]

const renderChats = (list) => {
    $listChat.innerHTML = ""

    list.forEach((chat) => {
        $listChat.innerHTML += `
        <div class="user-chat">
            <img src="${chat.avatar}"  alt="foto de perfil de maria">
            <div>
                <h3>${chat.name}</h3>
                <p>${chat.lastMessage}</p>
            </div>
        </div>
        `
    });
}

const searchUsers = () => {
        const userName = $search.value.toLowerCase().replace(/[áéíóú]/gi,'a','e','i','o','u')

        const filteredChats = chatsData.filter((user) => user.name.toLowerCase().replace(/[áéíóú]/gi,'a','e','i','o','u').includes(userName))

        const valid = filteredChats.length === 0
        if(valid){
            $noChats.style.display = "flex"
            $listChat.innerHTML = ""
        }else{
            $noChats.style.display = "none"
            renderChats(filteredChats)
        }

}

$search.addEventListener("input",searchUsers)
renderChats(chatsData)