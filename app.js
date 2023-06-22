const leftButton = document.getElementById("left_button")
const rightButton = document.getElementById("right_button")

const slideContents = document.querySelectorAll(".slide_contents")

let i = 0

leftButton.addEventListener("click", () => {
    if (i > 0) {
        i = i - 1
    }
    slideContents.forEach((element) => {
        element.style.left = `${-100 * i}%`
    })
})

rightButton.addEventListener("click", () => {
    if (i < slideContents.length - 1) {
        i = i + 1
    }
    slideContents.forEach((element) => {
        element.style.left = `${-100 * i}%`
    })
})