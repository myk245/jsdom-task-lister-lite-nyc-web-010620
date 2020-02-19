document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form")

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputField = event.target.querySelector("#new-task-description")
    const inputString = inputField.value
    const taskTag = document.createElement("li")
    taskTag.textContent = inputString 

    const tasks = document.getElementById("tasks")
    tasks.appendChild(taskTag)
  })
});


// I should be able to type a task into the input field.
// I should be able to click some form of a submit button.
// the task string that I provided should appear on the DOM after the submit button has been activated.
