import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-4ee8c-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const toDoListInDB = ref(database, "toDoList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const toDoListEl = document.getElementById("todo-list")


addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(toDoListInDB, inputValue)
    
    clearInputFieldEl()
})

onValue(toDoListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearToDoListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToDoListEl(currentItem)
        }    
    } else {
        toDoListEl.innerHTML = "No items here... yet"
        toDoListEl.style.margin = "15px auto"
    }
})

function   clearToDoListEl() {
    toDoListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToDoListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `toDoList/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    toDoListEl.append(newEl)
}



