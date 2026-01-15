const $search = document.querySelector("search")
const $chats = document.querySelectorAll(".user-chat")

const searchUsers = () => {
    const UserName = $search.value

    for(let i = 0; i < $chats.length; i++){
        
    }
}

$search.addEventListener("input",searchUsers)