const message = document.getElementById("usermsg")
const letterCount = document.getElementById("lettercount")
const inputBox = document.getElementById("inputbox")

let count = 0
message.addEventListener("keydown", (e)=> {
    
    let letter = e.key
   
    keyCheck(letter)
    letterCount.innerText = `${count} / 250` 
    if (count === 250) {
        if (letter != "Backspace" || letter != "Delete") {
            inputBox.classList.add("limitover")
            message.classList.add("red")
            e.preventDefault()
        }
    }
})

function keyCheck(word) {
    if((word === "Backspace" || word === "Delete")) {
        count > 0 ? count-- : count
        inputBox.classList.remove("limitover")
        message.classList.remove("red")
    }else {
        count < 250 ? count++ : count
    }
}


    