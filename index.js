import dogs from "./data.js"
import Dog from "./Dog.js";

// const rex = new Dog(dogs[0])
// const bella = new Dog(dogs[1])
// const teddy = new Dog(dogs[2])

let dogsArray = [0, 1, 2]

// get new dog avatar
function getNewDogAvatar() {
    const nextDogAvatar = dogs[dogsArray.shift()]
    return nextDogAvatar ? new Dog(nextDogAvatar) : {}
}

// render function
function render() {
    document.getElementById('img-avatar').innerHTML = getNewDogAvatar().getAvatarHtml()
}

// event listener for reject/accept btns
document.getElementById('btn-reject').addEventListener('click', () => {
    document.getElementById('badge-reject').classList.toggle('hidden')
    setTimeout(render, 1500)
})

document.getElementById('btn-accept').addEventListener('click', () => {
    document.getElementById('badge-accept').classList.toggle('hidden')
    setTimeout(render, 1500)
})

// call render function
render()