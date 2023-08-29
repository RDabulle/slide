const leftButton = document.getElementById("left_button")
const rightButton = document.getElementById("right_button")

const slideList = document.getElementsByClassName("slide_list")[0]

const slideCount = slideList.childElementCount

let i = 0

leftButton.addEventListener("click", () => {
    if (i > 0) {
        i = i - 1
    }
    slideList.style.left = `${-100 * i}%`
})

rightButton.addEventListener("click", () => {
    if (i < slideCount - 1) {
        i = i + 1
    }
    slideList.style.left = `${-100 * i}%`
})