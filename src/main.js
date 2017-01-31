
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
