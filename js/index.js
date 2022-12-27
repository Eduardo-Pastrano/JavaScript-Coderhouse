let menu = document.querySelector(".menu-grilla");

let mostrarProductos = () => {
    localStorage.setItem("productos", JSON.stringify(productos))
    let listadoProductos = JSON.parse(localStorage.getItem("productos"))

    for (let index = 0; index < listadoProductos.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = `
        <h4 class="nombre">${listadoProductos[index].nombre}</h4>
        <h5 class="precio">$${listadoProductos[index].precio}</h5>
        <button class="btn btn-success btn-add">Agregar</button>
        `;
        document.querySelector(".menu-grilla").appendChild(div);
    }
}

if (localStorage.getItem("productos")) {
    console.log("esta guardado");
    mostrarProductos();
} else {
    console.log("no esta guardado");
    localStorage.setItem("productos", JSON.stringify(productos))
    mostrarProductos();
}

let btnAdd = document.querySelectorAll(".btn-add");

btnAdd.forEach(boton => {
    boton.addEventListener("click", (e) => {
        datosProductos(e.target.parentElement);
    });
});

let carrito = [];

function datosProductos(producto) {
    const informacion = {
        nombre: producto.querySelector(".nombre").textContent,
        precio: producto.querySelector(".precio").textContent,
    };

    carrito=[...carrito, informacion]
    pintarCarrito();
}

const carritoFinal = document.querySelector(".info-carrito");

function pintarCarrito(){
    resetPintarCarrito();

    carrito.forEach((producto)=>{
        const divCarrito = document.createElement("div");
        divCarrito.innerHTML=`
        <p>${producto.nombre}</p>
        <p>${producto.precio}</p>
        `;
        document.querySelector(".info-carrito").appendChild(divCarrito);
    })
}

function resetPintarCarrito(){
    carritoFinal.innerHTML = "";
}
