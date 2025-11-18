const addButton = document.getElementById("addBtn");
let todos = [];

addButton.addEventListener("click", () => {
  const input = document.getElementById("inputText").value;

  if (!input) {
    return;
  }

  todos.push({ id: Date.now(), title: input, completed: false });

  renderUI();
});

function renderUI() {
  const result = document.getElementById("showResult");
  result.textContent = "";

  todos.forEach((e) => {
    //Edit Button

    const editBtn = document.createElement("input");
    editBtn.type = "text";

    editBtn.addEventListener("check", () => {});

    //CheckBox Field

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = e.completed;

    checkBox.addEventListener("click", () => {
      e.completed = checkBox.checked;
      renderUI();
    });

    const item = document.createElement("h3");
    item.textContent = e.title;

    //Delete Button

    const delButton = document.createElement("button");
    delButton.textContent = "X";

    delButton.addEventListener("click", () => handleDelete(e.id));

    result.appendChild(checkBox);
    result.appendChild(item);
    result.appendChild(delButton);
  });
}

function handleDelete(id) {
  todos = todos.filter((e) => e.id !== id);
  renderUI();
}
