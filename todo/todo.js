const myInput = document.querySelector('input')
const inputButton = document.querySelector('#inputButton')
const myTodos = document.querySelector('#myTodos')
const myTodoList = []

// Function to render the todo list
function renderTodoList() {
    // Clear the current list
    myTodos.innerHTML = '';

    // Create and append list items for each todo
    myTodoList.map(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo
        myTodos.appendChild(listItem);
        console.log(todo);
    });
}

// add todo functionality
inputButton.addEventListener('click', () => {
    const myInputValue = myInput.value.trim()
    if (myInputValue.length == 0) {
        alert('todo task must be valid')
        myInput.value = ''
    }
    if (myTodoList.includes(myInputValue)) {
        alert('task already existed')
        myInput.value = ''
    }
    if (myInputValue && !myTodoList.includes(myInputValue)) {
        myTodoList.push(myInputValue)
        console.log(myTodoList);
        renderTodoList()
        myInput.value = ''
    }
})

renderTodoList()