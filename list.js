let items = [];

const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");
const message = document.getElementById("message");
const clearButton = document.getElementById("clearButton");
const sortButton = document.getElementById("sortButton");

function showMessage(text)
{
    message.textContent = text;
}

function addItem(name)
{
    name = name.trim();
    if (name === "") return;
    if (items.includes(name)) return;

    items.push(name);
    render();
}

function render()
{
    list.innerHTML = "";

    for (const item of items)
    {
        const li = document.createElement("li");
        const text = document.createElement("span");
        text.textContent = item;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            items = items.filter(i => i !== item);
             render();
        });

        li.appendChild(text);
        li.appendChild(deleteButton);
         list.appendChild(li);
    }

    showMessage("renderizado completado");
}

addButton.addEventListener("click", () => addItem(itemInput.value));

itemInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
         addItem(itemInput.value);
    }
});

clearButton.addEventListener("click", () => {
    items = [];
        render();
});

sortButton.addEventListener("click", () => {
    items.sort();
        render();
});

render();

