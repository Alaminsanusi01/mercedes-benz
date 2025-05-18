// Array to store tasks
let tasks = [];         //This line creates an empty array called tasks which will store the tasks entered by the user.

// Function to add a task to the end of the list using push()
function addTaskToEnd() {
    const inputElement = document.getElementById('todoInput');
    const task = inputElement.value.trim();     //Retrieves the value entered by the user in the input field, removes whitespace from the start and end, and assigns it to task.


    if (task !== '') {                   //Checks if the task is not an empty string.If true:
        // Add task to the end of the array
        tasks.push(task);

        // Clear the input field
        inputElement.value = '';                              // Clears the input field by setting its value to an empty string.

        // Display updated task list
        displayTasks();
    } else {
        alert('Please enter a task.');
    }
}

// Function to add a task to the start of the list using unshift()
function addTaskToStart() {
    const inputElement = document.getElementById('todoInput');
    const task = inputElement.value.trim();

    if (task !== '') {
        // Add task to the beginning of the array
        tasks.unshift(task);

        // Clear the input field
        inputElement.value = '';

        // Display updated task list
        displayTasks();
    } else {
        alert('Please enter a task.');
    }
}

// Function to remove a task from the end of the list using pop()
function removeTaskFromEnd() {
    if (tasks.length > 0) {
        // Remove the last task from the array
        tasks.pop();

        // Display updated task list
        displayTasks();
    } else {
        alert('No tasks to remove.');
    }
}

// Function to remove a task from the start of the list using shift()
function removeTaskFromStart() {
    if (tasks.length > 0) {
        // Remove the first task from the array
        tasks.shift();

        // Display updated task list
        displayTasks();
    } else {
        alert('No tasks to remove.');
    }
}

// Function to display tasks
function displayTasks() {
    const todoListElement = document.getElementById('todoList');

    // Clear the list before displaying tasks
    todoListElement.innerHTML = '';

    // Display each task as a card
    tasks.forEach((task, index) => {
        const card = document.createElement('div');
        card.className = 'card';

        const taskText = document.createElement('span');
        taskText.textContent = task;

        // Create a "Remove" button for each task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            tasks.splice(index, 1); // Remove the task
            displayTasks(); // Refresh the task list
        };

        card.appendChild(taskText);                         //Adds the task text to the card.
        card.appendChild(removeButton);                       //Adds the remove button to the card.
        todoListElement.appendChild(card);                    //Appends the card to the task list in the DOM.
    });
}