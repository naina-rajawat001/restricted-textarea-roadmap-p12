const message = document.getElementById("usermsg")
const letterCount = document.getElementById("lettercount")
const inputBox = document.getElementById("inputbox")
let count = 0;
message.addEventListener("input" , (e) => {
    const value = e.target.value
    count = value.length
    letterCount.innerText = `${count} / 250`
    if (value.length === 250) {    
        message.classList.add("red")
        inputBox.classList.add("limitover")
        message.maxLength = "250"
    }

    if(value.length < 250 ) {
        message.classList.remove("red")
        inputBox.classList.remove("limitover")
    }
 }) 
