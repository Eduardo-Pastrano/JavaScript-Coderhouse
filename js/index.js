const menu = document.querySelector(".menu-grilla");

const solicitarInfo = async () => {
    const response = await fetch('./js/data.json');
    const data = await response.json();

    data.forEach((postre) => {
        let div = document.createElement("div");
        div.className = "postres"
        div.innerHTML = `
            <img class="img-postre" src="${postre.img}">
            <span class="nombre-postre">${postre.nombre}</span>
            <h5 class="precio-postre">$${postre.precio}</h5>
            <button class="btn btn-success btn-add" id="${postre.id}">Agregar</button>
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

    function datosProductos(postre) {
        const informacion = {
            nombre: postre.querySelector(".nombre-postre").textContent,
            precio: postre.querySelector(".precio-postre").textContent,
            img: postre.querySelector(".img-postre").src,
            id: postre.querySelector(".btn").getAttribute("id")
        };
    
        carrito=[...carrito, informacion]
        pintarCarrito();
    }

    const carritoFinal = document.querySelector(".postres-carrito");
    
    function pintarCarrito() {
        resetPintarCarrito();

        carrito.forEach((postre) => {
            let divCarrito = document.createElement("div");
            divCarrito.className = "fila-carrito"
            divCarrito.innerHTML=`
                <div class="postre-carrito columna-carrito">
                    <img class="img-postre-carrito" src="${postre.img}">
                    <p class="postre-nombre">${postre.nombre}</p>
                </div>
                <p class="precio-carrito columna-carrito">${postre.precio}</p>
                <div class="cantidad-carrito columna-carrito">
                    <input class="cantidad-carrito-input" type="number" value="1">
                    <button class="btn btn-danger" id="${postre.id}">Eliminar</button>
                </div>
            `;
            document.querySelector(".postres-carrito").appendChild(divCarrito);

            carritoFinal.getElementsByClassName("cantidad-carrito-input")[0].addEventListener("change", cambioCantidad);
            carritoFinal.addEventListener("click", eliminarItem);
            document.getElementsByClassName("btn-comprar")[0].addEventListener("click", btnComprar);
            actTotalCarrito();

            let inputCantidad = document.getElementsByClassName("cantidad-carrito-input")
            for (let i = 0; i < inputCantidad.length; i++) {
                let input = inputCantidad[i]
                input.addEventListener("change", cambioCantidad)
            }
        });
    }

    function btnComprar() {
        alert("Gracias por su compra!")
        let postresCarrito = document.getElementsByClassName("postres-carrito")[0]
        while (postresCarrito.hasChildNodes()) {
            postresCarrito.removeChild(postresCarrito.firstChild)
        }
        actTotalCarrito();
    }

    function actTotalCarrito() {
        let contenedorItemCarrito = document.getElementsByClassName("postres-carrito")[0]
        let filasCarrito = contenedorItemCarrito.getElementsByClassName("fila-carrito")
        let total = 0
        for (let i = 0; i < filasCarrito.length; i++) {
            let filaCarrito = filasCarrito[i]
            let precioPostre = filaCarrito.getElementsByClassName("precio-carrito")[0]
            let cantidadPostre = filaCarrito.getElementsByClassName("cantidad-carrito-input")[0]
            let precio = parseFloat(precioPostre.innerText.replace("$", ''))
            let cantidad = cantidadPostre.value
            total = total + (precio * cantidad)
        }
        document.getElementsByClassName("carrito-total-precio")[0].innerText = "$" + total
    }

    function cambioCantidad(e) {
        let input = e.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        actTotalCarrito();
    }

    function eliminarItem(e) {
        if (e.target.classList.contains("btn-danger")) {
        let postreID = e.target.getAttribute("id");
        carrito = carrito.filter(
            (postre) => postre.id !== postreID
        );
        pintarCarrito();
        actTotalCarrito();
        }
    }

    function resetPintarCarrito(){
        carritoFinal.innerHTML = "";
    }
};
solicitarInfo();