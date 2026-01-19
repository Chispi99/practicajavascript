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