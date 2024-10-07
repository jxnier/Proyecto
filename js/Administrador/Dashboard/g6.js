fetch('http://localhost:3000/contar_registros')
  .then(response => response.json())
  .then(data => {
    // Mostrar los datos en la consola
    console.log('Total de pacientes:', data.total_pacientes);
    console.log('Total de psicólogos:', data.total_psicologos);

    // Opcional: Mostrar los datos en el DOM
    document.getElementById('total_pacientes').innerText = `Total de pacientes: ${data.total_pacientes}`;
    document.getElementById('total_psicologos').innerText = `Total de psicólogos: ${data.total_psicologos}`;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

