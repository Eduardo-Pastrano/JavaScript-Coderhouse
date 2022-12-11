let opciones = prompt(`Por favor seleccione la opción que desee realizar:
1: Monto total a pagar por productos ingresados.
2: Disponibilidad de venta de una marca en una tienda de celulares.
`);

switch (opciones) {
    case "1":
        alert("Vamos a agregar 5 productos a nuestro carrito y calcular el monto total a pagar.")
        const listaProductos = [];
        const precioProductos = [];
        let montoTotal = 0;
        let cantidad = 5;

        do {
            let producto = prompt("Por favor ingrese el producto.");
            listaProductos.push(producto.toLowerCase());
            let precio = parseInt(prompt("Por favor ingrese el precio."));
            precioProductos.push(precio);
            montoTotal = montoTotal + precio;
            } while (listaProductos.length != cantidad);
            alert(`Los productos en tu carrito son: ${listaProductos.join(", ")}. Y los precios son: ${precioProductos.join(", ")}.`);
            alert(`El monto total a pagar es: ${montoTotal}`);
        break;

    case "2":
        const marcas = [
            {nombre: 'Apple', stock: '15 telefonos'},
            {nombre: 'Samsung', stock: '25 telefonos'},
            {nombre: 'Xiaomi', stock: '20 telefonos'},
            {nombre: 'Motorola', stock: '10 telefonos'}
        ]

        const nombres = marcas.map((disponible) => {
            return {
                nombre: disponible.nombre,
                stock: disponible.stock
            }
        });

        console.log(nombres);
        break;
}

