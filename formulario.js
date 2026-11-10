

const formulario = document.getElementById("formulario");

function mostrarError(campo, texto) {
  document.getElementById("error-" + campo).textContent = texto;
}


function validar() {
  let correcto = true;

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const aseguradora = document.getElementById("aseguradora").value.trim();
  const poliza = document.getElementById("poliza").value;
  const pago = document.getElementById("pago").value;
  const documentacion = document.getElementById("documentacion").value;


  if (nombre === "") {
    mostrarError("nombre", "El nombre es obligatorio.");
    correcto = false;
  } else if (nombre.length < 3) {
    mostrarError("nombre", "El nombre debe tener al menos 3 letras.");
    correcto = false;
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(nombre)) {
    mostrarError("nombre", "El nombre solo puede tener letras y espacios.");
    correcto = false;
  } else {
    mostrarError("nombre", "");
  }

  if (telefono === "") {
    mostrarError("telefono", "El teléfono es obligatorio.");
    correcto = false;
  } else if (!/^[0-9]+$/.test(telefono)) {
    mostrarError("telefono", "El teléfono solo puede tener números.");
    correcto = false;
  } else if (telefono.length < 7 || telefono.length > 10) {
    mostrarError("telefono", "El teléfono debe tener entre 7 y 10 dígitos.");
    correcto = false;
  } else {
    mostrarError("telefono", "");
  }

  if (aseguradora === "") {
    mostrarError("aseguradora", "La aseguradora es obligatoria.");
    correcto = false;
  } else if (aseguradora.length < 2) {
    mostrarError("aseguradora", "La aseguradora debe tener al menos 2 caracteres.");
    correcto = false;
  } else {
    mostrarError("aseguradora", "");
  }

  if (poliza === "") {
    mostrarError("poliza", "Selecciona un tipo de póliza.");
    correcto = false;
  } else {
    mostrarError("poliza", "");
  }

  if (pago === "") {
    mostrarError("pago", "Selecciona una forma de pago.");
    correcto = false;
  } else {
    mostrarError("pago", "");
  }

  if (documentacion === "") {
    mostrarError("documentacion", "Indica si la documentación está completa.");
    correcto = false;
  } else {
    mostrarError("documentacion", "");
  }

  return correcto;
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validar()) {
    document.getElementById("mensaje").textContent = "";
    return;
  }

  const clientes = JSON.parse(sessionStorage.getItem("clientes")) || [];

  const cliente = {
    nombre: document.getElementById("nombre").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
    aseguradora: document.getElementById("aseguradora").value.trim(),
    poliza: document.getElementById("poliza").value,
    pago: document.getElementById("pago").value,
    documentacion: document.getElementById("documentacion").value
  };

  clientes.push(cliente);
  sessionStorage.setItem("clientes", JSON.stringify(clientes));

  formulario.reset();
  document.getElementById("mensaje").textContent = "Cliente guardado correctamente.";
});