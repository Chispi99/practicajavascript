let items = [
    { name: "Pan", purchased: false },
    { name: "Gelatina", purchased: true },
    { name: "Palomitas", purchased: true },
    { name: "Plátano", purchased: false },
    { name: "Arroz", purchased: false },
    { name: "Pescado", purchased: true },
    { name: "Pasta", purchased: true },
    { name: "Hamburguesa", purchased: false}
];

const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");
const message = document.getElementById("message");
const clearButton = document.getElementById("clearButton");
const sortButton = document.getElementById("sortButton");


function addItem(name) {
    name = name.trim();
    if (name === "") return;
    if (items.some(item => item.name === name)) return;

    items.push({ name: name, purchased: false });
    render();
}

function showMessage(text) {
    message.textContent = text;
}

function reorder() {
    items.sort((a, b) => a.purchased - b.purchased);
}

function render() {
    list.innerHTML = "";

    for (const item of items) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.purchased;

        checkbox.addEventListener("change", () => {
            item.purchased = checkbox.checked;
            reorder();
            render();
        });

        const text = document.createElement("span");
        text.textContent = item.name;

        li.appendChild(checkbox);
        li.appendChild(text);

        if (!item.purchased) {
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.addEventListener("click", () => {
                items = items.filter(i => i !== item);
                render();
            });
            li.appendChild(deleteButton);
        }

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
    reorder();
    render();
});

render();


