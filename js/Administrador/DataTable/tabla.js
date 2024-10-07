$(document).ready(function() {
    $('#example').DataTable({
        "ajax": {
            "url": "http://localhost:3000/psico",
            "type": "GET",
            "dataSrc": function(json) {
                let data = [];

                // Agregar pacientes
                if (json.pacientes) {
                    data = data.concat(json.pacientes.map(function(paciente) {
                        return {
                            "id": paciente.id,
                            "nombre": paciente.nombres ?? "",
                            "identificacion": paciente.identificacion ?? "", 
                            "correo_institucional": paciente.correo_institucional ?? "" 
                        };
                    }));
                }

                // Agregar psicólogos
                if (json.psicologos) {
                    data = data.concat(json.psicologos.map(function(psicologo) {
                        return {
                            "id": psicologo.id,
                            "nombre": psicologo.nombre ?? "",
                            "identificacion": psicologo.identificacion ?? "",
                            "correo_institucional": psicologo.correo_institucional ?? ""
                        };
                    }));
                }

                return data;
            }
        },
        "columns": [
            { "data": "id" },
            { "data": "nombre" },
            { "data": "identificacion" },
            { "data": "correo_institucional" }
        ],
        "initComplete": function(settings, json) {
            console.log("Datos recibidos:", json);
        }
    });
});