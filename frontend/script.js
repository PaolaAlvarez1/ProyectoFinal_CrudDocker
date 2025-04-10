const API = "http://localhost:3000/productos";

async function cargarProductos() {
  const res = await fetch(API);
  const productos = await res.json();

  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  productos.forEach(p => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><input value="${p.nombre}" onchange="editarProducto(${p.id}, this.value, 'nombre')"></td>
      <td><input type="number" value="${p.precio}" onchange="editarProducto(${p.id}, this.value, 'precio')"></td>
      <td>
        <button onclick="eliminarProducto(${p.id})">Eliminar</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

async function crearProducto() {
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;

  if (!nombre || !precio) return;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, precio }),
  });

  document.getElementById("nombre").value = "";
  document.getElementById("precio").value = "";

  cargarProductos();
}

async function editarProducto(id, nombre, precio) {
  const fila = [...document.querySelectorAll("tr")].find(tr =>
    tr.querySelector("button")?.onclick?.toString().includes(`${id}`)
  );

  const nombre = fila.querySelector("td:nth-child(1) input").value;
  const precio = fila.querySelector("td:nth-child(2) input").value;

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, precio }),
  });

  cargarProductos();
}

async function eliminarProducto(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  cargarProductos();
}

cargarProductos();
