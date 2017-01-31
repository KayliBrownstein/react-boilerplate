require('./app.scss')

let textContent = require('./content')

let appendListItem = () => {
  let newItem = document.createElement("li")
  let text = document.createTextNode(textContent)
  newItem.appendChild(text)

  let list = document.getElementById("list")
  list.insertBefore(newItem, list.childNodes[0])
}

let button = document.getElementById("add_button")
button.addEventListener("click", appendListItem)

let mainDiv = document.getElementById('main')

// ES2016 test
let numbers = [1, 2, 3]
let includesTestResult = numbers.includes(2)
let includesTestResultDiv = document.createElement('div')
includesTestResultDiv.innerHTML = `ES2016 test: Array ${numbers} includes 2: ${includesTestResult}`
mainDiv.appendChild(includesTestResultDiv)

// ES2017 test
let ages = { Stacy: 32, Richard: 36 }
let objectValuesTestResult = Object.values(ages)
let objectValuesTestResultDiv = document.createElement('div')
objectValuesTestResultDiv.innerHTML = `ES2017 test: Object ${ages} has values: ${objectValuesTestResult}`
mainDiv.appendChild(objectValuesTestResultDiv)
