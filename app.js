const telefonos = [
    { id: "1", nombre: "iPhone 14 Pro Max", precio: 1469 },
    { id: "2", nombre: "Samsung Galaxy S22 Ultra", precio: 999 },
    { id: "3", nombre: "One Plus 10 Pro", precio: 699 },
    { id: "4", nombre: "Vivo X80 Pro", precio: 1199 },
    { id: "5", nombre: "Xiaomi 12T Pro", precio: 779 },
];

let carrito = [];

let decidir = prompt("Bienvenido! Desea comprar algun producto?, por favor escriba 'si' o 'no'.")

while(decidir != "si" && decidir != "no") {
    alert("Por favor ingrese 'si' o 'no'.")
    decidir = prompt("Bienvenido! Desea comprar algun producto?, por favor escriba 'si' o 'no'.")
}

if(decidir === "si"){
    alert("Bienvenido! Disponemos de estos telefonos en stock")
    let listadoTelefonos = telefonos.map((telefono) => telefono.id + ": " + telefono.nombre + " " + "$" + telefono.precio);
    alert(listadoTelefonos.join("\n"));
} else if (decidir === "no") {
    alert("Gracias por su visita!")
}

while(decidir != "no"){
    let telefono = prompt("Por favor agrega un producto a tu carrito")
    let precio = 0

    if(telefono == "1" || telefono == "2" || telefono == "3" || telefono == "4" || telefono == "5"){
        switch(telefono) {
            case "1":
                nombre = "iPhone 14 Pro Max"
                precio = 1469
                break
            case "2":
                nombre = "Samsung Galaxy S22 Ultra"
                precio = 999
                break
            case "3":
                nombre = "One Plus 10 Pro"
                precio = 699
                break
            case "4":
                nombre = "Vivo X80 Pro"
                precio = 1199
                break
            case "5":
                nombre = "Xiaomi 12T Pro"
                precio = 779
                break
            default:
                break;
        }
        let cantidad = parseInt(prompt("¿Cuantos desea llevar?"))

        carrito.push({nombre, cantidad, precio})
        console.log(carrito)
    } else {
        alert("Disculpe no disponemos de ese telefono.")
    }

    decidir = prompt("¿Desea agregar mas telefonos a su carrito? Por favor, escriba 'si' o 'no.'")

    while(decidir === "no"){
        carrito.forEach((carritoFinal) => {
            alert(`Telefono(s): ${carritoFinal.nombre}, cantidad: ${carritoFinal.cantidad}, total a pagar por telefono(s): $${carritoFinal.cantidad * carritoFinal.precio}`)
        })
    break
    }
}

const montoTotal = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
alert(`El total a pagar es: $${montoTotal}. Gracias por su compra, vuelva pronto!`);