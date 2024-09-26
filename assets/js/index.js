class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre,
        this.precio = precio
    }
}

class Carrito {
    constructor() {
        this.productos = []
    }

    agregarProductos(producto, cantidad) {
        const existeProducto = this.productos.find(prod => prod.producto.nombre === producto.nombre)

        if (existeProducto) {
            existeProducto.cantidad += cantidad
        } else {
            this.productos.push({ producto, cantidad })
        }
        alert(`${cantidad} ${producto.nombre}(s) agregado(s) al carrito.`)
    }

    totalCompra() {
        let total = 0
        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].producto.precio * this.productos[i].cantidad
        }
        alert(`Total de la compra: $${total} `)
    }

    finalizarCompra() {
        let longitudProductos = this.productos.length
        this.productos.splice(0, longitudProductos)
    }

    detalleCompra() {
        let detalle = "";
        for (var i = 0; i < this.productos.length; i++) {
            let valorTotal = this.productos[i].producto.precio * this.productos[i].cantidad
            detalle += `Producto: ${this.productos[i].producto.nombre}, Cantidad: ${this.productos[i].cantidad}, P. Unitario: ${this.productos[i].producto.precio}, P. Total: ${valorTotal}\n`
        }
        alert(`Detalle Compra\n ${detalle}`)
    }
}

const productoLeche = new Producto("Leche", 1000)
const productoPan = new Producto("Pan de Molde", 2000)
const productoQueso = new Producto("Queso", 1200)
const productoMermelada = new Producto("Mermelada", 890)
const productoAzucar = new Producto("Azucar", 1300)

const miCarrito = new Carrito()

function validarCantidad() {
    let estadoCantidad = true;
    while (estadoCantidad) {
        var cantidad = parseInt(prompt("Ingrese la cantidad de unidades:"), 10)
        if (isNaN(cantidad) || cantidad < 0) {
            alert("Ingrese la información solicitada correctamente")
            continue
        } else {
            estadoCantidad = false
        }
    }
    return cantidad
}


var opcion;
var estado = true;
do {
    alert(`Productos disponibles:\n 1.- Leche $1000\n 2.- Pan de Molde $2000\n 3.- Queso $1200\n 4.- Mermelada\n 5.- Azúcar $1300`)
    let estadoOpcion = true;
    while (estadoOpcion) {
        opcion = parseInt(prompt("Ingresa el número del producto que deseas agregar al carrito:"), 10)
        if (isNaN(opcion) || opcion < 0) {
            alert("Ingrese una opción valida")
            continue;
        }
        estadoOpcion = false;
    }
    switch (opcion) {
        case 1:
            let cantidadUno = validarCantidad()
            miCarrito.agregarProductos(productoLeche, cantidadUno)
            break;
        case 2:
            let cantidadDos = validarCantidad()
            miCarrito.agregarProductos(productoPan, cantidadDos)
            break;
        case 3:
            let cantidadTres = validarCantidad()
            miCarrito.agregarProductos(productoQueso, cantidadTres)
            break;
        case 4:
            let cantidadCuatro = validarCantidad()
            miCarrito.agregarProductos(productoMermelada, cantidadCuatro)
            break;
        case 5:
            let cantidadCinco = validarCantidad()
            miCarrito.agregarProductos(productoAzucar, cantidadCinco)
            break;
        default:
            alert("Ingrese la opción solicitad correctamente");
    }

    let estadoSeguir = true
    while (estadoSeguir) {
        let seguir = prompt("¿Desea seguir agregando productos? (s/n)")

        if (seguir === 's') {
            estadoSeguir = false;
            continue;
        } else if (seguir === 'n') {
            miCarrito.detalleCompra()
            miCarrito.totalCompra()
            miCarrito.finalizarCompra()
            estadoSeguir = false;
            estado = false;
        } else {
            alert("Ingrese la opción solicitada correctamente")
            continue;
        }
    }
} while (estado);
