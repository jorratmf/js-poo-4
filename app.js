let productos = [];

function agregarProducto() {
  let codigo = document.getElementById("codigo").value;
  let nombre = document.getElementById("nombre").value;
  let precio = document.getElementById("precio").value;
  
  // Validar datos
  if (codigo === "" || nombre === "" || precio === "") {
    alert("Por favor complete todos los campos");
    return;
  }

  // Validar que el precio sea mayor que cero o gratis
  if (isNaN(precio) || precio < 0) {
    alert("Por favor ingrese un precio válido");
    return;
  }
  
  let producto = new Producto(codigo, nombre, precio);
  productos.push(producto);
  actualizarUltimosProductos();
}

function actualizarUltimosProductos() {
  let ultimosProductos = document.getElementById("ultimos-productos");
  ultimosProductos.innerHTML = "";
  let startIndex = Math.max(0, productos.length - 3);
  for (let i = startIndex; i < productos.length; i++) {
    let producto = productos[i];
    let li = document.createElement("li");
    li.innerText = "Código: " + producto.codigo + ", Nombre: " + producto.nombre + ", Precio: $" + producto.precio;
    ultimosProductos.appendChild(li);
  }
}

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
}