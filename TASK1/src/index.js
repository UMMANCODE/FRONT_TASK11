const boxes = document.querySelectorAll(".box");

const todoList = document.querySelector("#todo-list");
const doneList = document.querySelector("#done-list");

const todoListItems = Array.from(document.querySelectorAll("#todo-list li"));
const doneListItems = Array.from(document.querySelectorAll("#done-list li"));

todoListItems.forEach((item, index) => {
  item.setAttribute("data-id", index);
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("id", event.target.getAttribute("data-id"));
  });
});

doneListItems.forEach((item, index) => {
  item.setAttribute("data-id", index);
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("id", event.target.getAttribute("data-id"));
  });
});

boxes.forEach((box, index) => {
  box.addEventListener("dragover", (e) => e.preventDefault());
});

boxes.forEach((box, index) => {
  box.addEventListener("drop", (e) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("id");
    const draggedItem = document.querySelector(`[data-id="${itemId}"]`);
    switch (index) {
      case 0:
        todoList.appendChild(draggedItem);
        draggedItem.style.textDecoration = "none";
        break;
      case 1:
        doneList.appendChild(draggedItem);
        draggedItem.style.textDecoration = "line-through";
        break;
    }
  });
});
