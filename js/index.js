const menu = document.querySelector(".menu-grilla");

const solicitarInfo = async () => {
    const response = await fetch('./js/data.json');
    const data = await response.json();

    data.forEach((producto) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <img class="img-producto" src="${producto.img}">
            <h4 class="nombre-producto">${producto.nombre}</h4>
            <h5 class="precio-producto">$${producto.precio}</h5>
            <button class="btn btn-success btn-add">Agregar</button>
            `;
        document.querySelector(".menu-grilla").appendChild(div);
    });

    let btnAdd = document.querySelectorAll(".btn-add");

    btnAdd.forEach(boton => {
        boton.addEventListener("click", (e) => {
            datosProductos(e.target.parentElement);
        });
    });

    let carrito = [];

    function datosProductos(producto) {
        const informacion = {
            nombre: producto.querySelector(".nombre-producto").textContent,
            precio: producto.querySelector(".precio-producto").textContent,
        };
    
        carrito=[...carrito, informacion]
        pintarCarrito();
    }
    
    const carritoFinal = document.querySelector(".productos-carrito");
    
    function pintarCarrito(){
        resetPintarCarrito();
    
        carrito.forEach((producto)=>{
            const divCarrito = document.createElement("div");
            divCarrito.innerHTML=`
            <img class="img-producto" src="${producto.img}">
            <p>${producto.nombre}</p>
            <p>${producto.precio}</p>
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" id="${producto.id}">Eliminar</button>
            `;
            document.querySelector(".productos-carrito").appendChild(divCarrito);
        })
    }
    
    function resetPintarCarrito(){
        carritoFinal.innerHTML = "";
    }


};
solicitarInfo();