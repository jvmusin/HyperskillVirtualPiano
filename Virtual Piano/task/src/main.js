function findKey(name) {
    let k = document.getElementsByTagName("kbd")
    for (let kElement of k) {
        if (kElement.innerText === name) {
            return kElement
        }
    }
}

const whiteKeys = "ASDFGHJ"
const blackKeys = "WETYU"
const allKeys = whiteKeys + blackKeys

function getInitialColorColor(name) {
    if (whiteKeys.includes(name)) return "white"
    if (blackKeys.includes(name)) return "black"
}

function changeBackgroundColor(key, color) {
    findKey(key).style.backgroundColor = color
}

document.addEventListener("keypress", function (evt) {
    const key = evt.key.toUpperCase()
    const color = getInitialColorColor(key)
    if (color) {
        console.log("The '" + key + "' key is pressed.")
        new Audio(getInitialColorColor(key) + "_keys/" + key + ".mp3").play()
        changeBackgroundColor(key, "gray")
    } else {
        console.warn("The '" + key + "' key is pressed.")
    }
})

document.addEventListener("keyup", function (evt) {
    const key = evt.key.toUpperCase()
    if (allKeys.includes(key)) {
        changeBackgroundColor(key, getInitialColorColor(key))
    }
})