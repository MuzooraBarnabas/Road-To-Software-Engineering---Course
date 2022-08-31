// How to deal with the HTML Document D.O.M
// Two methods:-
    // 1. Id based
    // 2. Class based

let head_one = document.getElementById("head_one")
// change the inner content
// let inner_html = head_one.innerText
// head_one.innerText = "Updated H1 inner text."
// head_one.innerHTML = "This is <b style='color:red'>Hello world</b>"
// change the style (CSS)
head_one.style.backgroundColor = '#ddd'
head_one.style.padding = '10px'
head_one.style.borderWidth = '2px'
head_one.style.borderStyle = 'solid'
head_one.style.borderColor = 'red'


// bulb
let bulb = document.getElementById("bulb")

function turn_bulb_on(){
    console.log("Bulb On")
    head_one.innerHTML = "The bulb is: <b style='color:green'>ON</b>"
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif"
}

function turn_bulb_off(){
    console.log("Bulb off")
    head_one.innerHTML = "The bulb is: <b style='color:red'>OFF</b>"
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif"
}