// creating an array
let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

// Indexed arrays: start from 0
// console.log(days)
// console.log(days[0])
// length of the array
// console.log(days.length)
// looping through items in the array
// forEach, for, map, filter
days.forEach((value,index)=>{
    document.getElementById("days").innerHTML += "<li>"+ value +"</li>"
})

// for loop
// for (let i = 0; i < days.length; i++) {
//     let day = days[i];
//     console.log("Day", day)
//     console.log("I", i)
// }

// filter
let filtered_days = days.filter( day =>{
    // condition
    if(day.charAt(0) == "S"){
        return day
    }
})

// console.log("Filtered day", filtered_days)
let even_nos = [2,4,6,8,10]
let even_nos_by_two = even_nos.map(callback)

function callback(value, index, array){
    return value * 3
}
// console.log("even_nos_by_two", even_nos_by_two)


// combining arrays
let fruits = ["mangoes","oranges","pawpaw"]
let animals = ["cow","goat","sheep","rabbit"]

// fruits combined with animals
// console.log(fruits.concat(animals))






