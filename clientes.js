// Muestra en la tabla los clientes guardados en sessionStorage

const clientes = JSON.parse(sessionStorage.getItem("clientes")) || [];
const cuerpo = document.getElementById("cuerpo");
const tabla = document.getElementById("tabla");
const vacio = document.getElementById("vacio");

if (clientes.length === 0) {
  tabla.style.display = "none";
} else {
  vacio.style.display = "none";

  clientes.forEach(function (c) {
    const fila = document.createElement("tr");

    [c.nombre, c.telefono, c.poliza, c.pago].forEach(function (dato) {
      const celda = document.createElement("td");
      celda.textContent = dato; 
      fila.appendChild(celda);
    });

    cuerpo.appendChild(fila);
  });
}
