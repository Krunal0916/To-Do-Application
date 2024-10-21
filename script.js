const todoInput = document.getElementById("todo-input");
const todosContainer = document.querySelector(".todos");

function handleClick() {
    const todoText = todoInput.value;

    if (todoText === "") {
        alert("Please Enter a Task ?");
        return; 
    }

    const todoItem = document.createElement("div");
    const todoPara = document.createElement("p");
    
    todoPara.innerText = todoText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete Task";
    
    completeButton.onclick = function() {
        todoPara.classList.toggle("completed");
        completeButton.disabled = true; 
        completeButton.innerText = "Completed"; 
        completeButton.style.backgroundColor = "#6c757d"; 
        completeButton.style.cursor = "not-allowed"; 
      };

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete Task";
      
      
      deleteButton.onclick = function() {
          todosContainer.removeChild(todoItem);
      };

      // Append paragraph and buttons to the todo item container
      todoItem.appendChild(todoPara);
      todoItem.appendChild(completeButton);
      todoItem.appendChild(deleteButton);

      todosContainer.appendChild(todoItem);
      
      // Clear the Input Box 
      todoInput.value = "";
}