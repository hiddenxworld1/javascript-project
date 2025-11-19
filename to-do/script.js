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
    //CheckBox Field

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = e.completed;

    checkBox.addEventListener("click", () => {
      e.completed = checkBox.checked;
      result.style.textDecoration=e.completed ? "line-through": "none"
      renderUI();
    });

    const item = document.createElement("h3");
    item.textContent = e.title;

    //Delete Button

    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.addEventListener("click", () => handleDelete(e.id));

    //Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => handleEdit(e));

    result.appendChild(checkBox);
    result.appendChild(item);
    result.appendChild(editButton);
    result.appendChild(delButton);
  });
}

function handleDelete(id) {
  todos = todos.filter((e) => e.id !== id);
  renderUI();
}

function handleEdit(data) {
  const model=document.querySelector(".model");
  model.style.display="block"
  const text = document.getElementById("editInput");
  text.value = data.title;

  //save data

  const saveData = document.getElementById("saveBtn");
  saveData.addEventListener("click", () => {
    const txt=text.value;
    todos = todos.map((e) =>
      e.id === data.id ? { ...e, title: txt } : e
    );
    console.log(todos);

    renderUI();
    const model=document.querySelector(".model");
    model.style.display="none"
  });
}

document.getElementById("close").addEventListener("click", ()=>{
    const model=document.querySelector(".model");
    model.style.display="none"

})


document.getElementById("cancel").addEventListener("click", ()=>{
    const model=document.querySelector(".model");
    model.style.display="none"

})

