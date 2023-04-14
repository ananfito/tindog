class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    // method for getting avatar HTML
    getAvatarHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this

        return `
            <img id="img-avatar" src="${avatar}" alt="the dog's avatar image">
            <div class="avatar-content" id="avatar-content">
                <p class="avatar-info">${name}, ${age}</p>
                <p class="avatar-msg">How you doin?</p>
            </div>
            <div class="badge hidden" id="badge-reject">
                <img src="./images/badge-nope.png" alt="badge">
            </div>
            <div class="badge hidden" id="badge-accept">
                <img src="./images/badge-like.png" alt="badge">
            </div>
            `
    }

    // method for udpating hasBeenSwiped
    setHasBeenSwiped() { this.hasBeenSwiped = true }

    // method for udpating hasBeenLiked
    setHasBeenLiked() { this.hasBeenLiked = true }
}

export default Dog
