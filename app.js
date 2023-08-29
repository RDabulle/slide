const leftButton = document.getElementById("left_button")
const rightButton = document.getElementById("right_button")

const slideList = document.getElementsByClassName("slide_list")[0]

const slideCount = slideList.childElementCount

let currentIndex = 0

leftButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex = currentIndex - 1
    }
    slideList.style.left = `${-100 * currentIndex}%`
})

rightButton.addEventListener("click", () => {
    if (currentIndex < slideCount - 1) {
        currentIndex = currentIndex + 1
    }
    slideList.style.left = `${-100 * currentIndex}%`
})