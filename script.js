var ratingDots = document.getElementsByClassName('rating-dot')
var currentRating = 0 // represents the current rating that user has selected; 0 means no rating has been selected
for(let i = 0; i < ratingDots.length; i++) {
    ratingDots[i].addEventListener('click', (ev) => {
        deselectRatingDots()
        ev.target.classList.add('rating-dot-selected')
        currentRating = ev.target.innerHTML
    })
}

const submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', () => {
    if(currentRating == 0) {
        return
    }
    const ratingContainer = document.getElementById('rating-container')
    const submittedContainer = document.getElementById('submitted-container')
    const ratingText = document.getElementById('selected-container')
    ratingText.classList.add('selected-container')
    ratingText.innerText = "You selected " + currentRating + " out of 5"
    ratingContainer.innerHTML = submittedContainer.innerHTML
})

function deselectRatingDots() {
    const ratingDots = document.getElementsByClassName('rating-dot')
    for(let i = 0; i < ratingDots.length; i++) {
        ratingDots[i].classList.remove('rating-dot-selected')
    }
}


