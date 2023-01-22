const toDoList = []
// ვაკავშირებთ html ის თაგებს იდები არ გვაქვს გაწერილი და იმიტომ
const $input = document.getElementsByTagName('input')[0]
const $button = document.getElementsByTagName('button')[0]
const $ul = document.getElementsByTagName('ul')[0]
// ამით ვუწერთ რომ დაამატოს ყოველ ჯერზე ახალი ანუ +1
var id = toDoList.length + 1

// ბუთონ ღილაკს ვანიჭებთ დაჭერის ფუნქციას
$button.addEventListener('click', addTodoItem)
// ფუნქიას ვუწერთ რომ შექმნას ახალი აითემი თავისი აიდით სათაურით და push ით ვეუბნებით რომ დაამატოს
function addTodoItem() {
    let newInput = $input.value
    if (validateInput(newInput)) {
        let newItem = new Object() // {}
        newItem.id = id
        id++
        newItem.title = $input.value
        toDoList.push(newItem)
        $input.value = null
        renderTodoList()
    } else {
        console.log('The input must be filled')
    }
}
//ამ ფუნქციით ვეუბნებით რომ წაშალოს აითემი todolist იდან და დაარენდეროს todolist
function deleteTodoItem(id) {
    deleteTodoItemFromtoDoList(id)
    renderTodoList()
}
// ამ ფუნქციით ვარენდერებთ todolist ს და ვქმნით li ელემენტს ანუ ლისტს ასევე ვქმნით..
//ასევე ვქმნით წაშლის ღილაკს და ვანიჭებთ click ის ანუ რომ დავაჭერთ რომ წაშალოს მაგ ფუნქციას
function renderTodoList() {

    $ul.innerHTML = null

    toDoList.forEach(item => {
        let li = document.createElement('li')
        li.innerHTML = item.title + " ID: " + item.id + " - "
        let delButton = document.createElement('button')
        delButton.innerHTML = "Delete"
        delButton.addEventListener('click', () => {
            deleteTodoItem(item.id)
        })
        li.appendChild(delButton)
        $ul.appendChild(li)
    }
    )
}
// ამ ფუნქციით აითემს ვშლით todolist იდან id ის მიხედვით
function deleteTodoItemFromtoDoList(id) {
    let item = toDoList.find(value => value.id === id)
    toDoList.splice(toDoList.indexOf(item), 1)
}
// ეს ვერ მივხვდი
function validateInput(value) {
    if(value !== ''){
        return true
    }else{
        return false
    }
}

renderTodoList()



