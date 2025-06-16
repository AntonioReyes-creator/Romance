
  // Obtener la fecha actual
  const fechaActual = new Date();
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);

  // Mostrar la fecha en el elemento con id "fecha-actual"
  document.getElementById('fecha-actual').textContent = fechaFormateada;// Mostrar la fecha en el elemento con id "fecha-actual"
