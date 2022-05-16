var input = document.querySelector("input");
var button = document.querySelector("button");
var form = document.querySelector("form");
var todos = document.querySelector(".todos");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let val = input.value.trim();
  if (val) {
    addTodoElement({
      text: val,
    });

  }
  input.value = "";
});

function addTodoElement(todo) {
  var li = document.createElement("li");
  li.innerHTML = `
                <li>
                <span>${todo.text}</span>
                <i class="fa-solid fa-trash"></i>
                </li>
        `;
  if (todo.status === "completed") {
    li.setAttribute("class", "completed");
  }
  li.addEventListener("click", function () {
    this.classList.toggle("compeleted");
  });
  li.querySelector("i").addEventListener("click", function () {
    this.parentElement.remove();
  });
  todos.appendChild(li);
}

saveTodoList(){
  let todoList = document.querySelectorAll('li')
  todoList.forEach(function(item){
    let value =  item.querySelector('span').innerText
     let status = item.querySelector('span').getAttribute('class')
  })
  localStorage.setItem('todolist',)
}
