class Item {
    constructor(name) {
        this.name = name;
        this.purchased = false;
        this.quantity = 1;
    }

    toggle() {
        this.purchased = !this.purchased;
    }

    increment() {
        this.quantity++;
    }

    decrement() {
        this.quantity--;
    }
}

class ItemList {
    constructor(parent) {
        this.items = [];
        this.parent = parent;
    }

    addItem(name) {
        name = name.trim();
        if (name === "") return;

        const existing = this.items.find(item => item.name === name);
        if (existing) {
            existing.increment();
        } else {
            this.items.push(new Item(name));
        }
        this.render();
    }

    removeItem(itemToRemove) {
        this.items = this.items.filter(item => item !== itemToRemove);
        this.render();
    }

    reorder() {
        this.items.sort((a, b) => a.purchased - b.purchased);
    }

    render() {
        this.parent.innerHTML = "";
        this.reorder();

        this.items.forEach(item => {
            const li = document.createElement("li");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = item.purchased;
            checkbox.addEventListener("change", () => {
                item.toggle();
                this.render();
            });

            const text = document.createElement("span");
            text.textContent = ` ${item.name} (${item.quantity}) `;

            if (item.purchased) {
                text.style.textDecoration = "line-through";
            }

            li.appendChild(checkbox);
            li.appendChild(text);

            const plusButton = document.createElement("button");
            plusButton.textContent = "+";
            plusButton.addEventListener("click", () => {
                item.increment();
                this.render();
            });

            const minusButton = document.createElement("button");
            minusButton.textContent = "-";
            minusButton.addEventListener("click", () => {
                item.decrement();
                if (item.quantity === 0) {
                    this.removeItem(item);
                } else {
                    this.render();
                }
            });

            li.appendChild(plusButton);
            li.appendChild(minusButton);

            this.parent.appendChild(li);
        });
    }

    clear() {
        this.items = [];
        this.render();
    }
}

const itemList = new ItemList(document.getElementById("list"));

const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const sortButton = document.getElementById("sortButton");

addButton.addEventListener("click", () => {
    itemList.addItem(itemInput.value);
    itemInput.value = "";
});

itemInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        itemList.addItem(itemInput.value);
        itemInput.value = "";
    }
});

clearButton.addEventListener("click", () => {
    itemList.clear();
});

sortButton.addEventListener("click", () => {
    itemList.reorder();
    itemList.render();
});

itemList.addItem("Pan");
itemList.addItem("Leche");
itemList.addItem("Huevos");


