//clase 19/01/26
class Item
{
    constructor(name)
    {
        this.name = name;
        this.purchased = false;
    }

    toggle(){ //definimos la funcion toggle
        this.purchased = !this.purchased
    }
}

const item = new Item("Ralph"); //creamos una variable de tipo Item
item.toggle(); //llamamos a la función toggle del item que hemos creado

const genericObject = {
    name: "Ralph",
    purchased: false

};

//clases
//variables
//funciones
//eventos
//render

//calse 22/01/26
class Item {
    constructor(name) {
        this.bought = name;
        this.count = 1;
    }

    increment() {
        this.count++;
    }

    decrement() {
            this.count--;  
    }
}

    class ItemList {
        constructor(parent) {
            this.items = [];
            this.parent = parent;
        }
        addItem(name) {
            this.items.push((item));
        }
        removeItem(name) {
            this.items = this.items.filter(item => item.bought !== name);
        }
    }

        render() 
            this.parent.innerHTML = '';

            this.items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.name
                
                const toggleButton = document.createElement('button');
                toggleButton.textContent = "Buy";
                toggleButton.addEventListener('click', () => {
                    item.toggle();
                    this.render();
                });

                const incrementButton = document.createElement('button');
                incrementButton.textContent = "+";
                incrementButton.addEventListener('click', () => {
                    item.increment();
                    this.render();
                });

                li.appendChild(toggleButton);
                li.appendChild(incrementButton);
                this.parent.appendChild(li);

                const decrementButton = document.createElement('button');
                decrementButton.textContent = "-";
                decrementButton.addEventListener('click', () => {
                    item.decrement();
                    if (item.count == 0) {
                        this.removeItem(item.name);
                    }
                    this.render();
                });

                li.appendChild(toggleButton);
                li.appendChild(incrementButton);
                li.appendChild(decrementButton);
                this.parent.appendChild(li);
            });

    let itemList = new ItemList(document.getElementById('item-list'));
    itemList.addItem("Pan");
    itemList.addItem("Leche");
    itemList.removeItem("Pan");
    
    let newItem = new Item("Huevos");
    itemList.addItem(newItem);
    itemList.removeItem(newItem);
    
    itemList.render();