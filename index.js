import dogs from "./data.js"
import Dog from "./Dog.js";

let dogsArray = [0, 1, 2]

// get new dog avatar
function getNewDogAvatar() {
    const nextDogAvatar = dogs[dogsArray.shift()]
    return nextDogAvatar ? new Dog(nextDogAvatar) : {}
}

// dog is rejected
function isRejected() {
    dog.setHasBeenSwiped() 
    document.getElementById('badge-reject').classList.toggle('hidden')
    setTimeout(getMainSectionHtml, 1500)
}

// dog is accepted
function isAccepted() {
    dog.setHasBeenSwiped() 
    dog.setHasBeenLiked()
    document.getElementById('badge-accept').classList.toggle('hidden')
    setTimeout(getMainSectionHtml, 1500)
}

// get HTML for main section
function getMainSectionHtml() {
    if (dogsArray.length > 0) {
        dog = getNewDogAvatar()
        render()
    } else {
        console.log('no more dogs')
        document.getElementById('main-section').innerHTML = '<div class="end-msg">There are no more dogs in your area.</div>'
    }
}

// render function
function render() {
    document.getElementById('img-avatar').innerHTML = dog.getAvatarHtml()
}

// event listener for reject/accept btns
document.getElementById('btn-reject').addEventListener('click', isRejected)

document.getElementById('btn-accept').addEventListener('click', isAccepted)

// create dog
let dog = getNewDogAvatar()

// call render function
render()