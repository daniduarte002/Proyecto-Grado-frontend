function saveCont() {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (recargar la página)

    let nombresContact = document.getElementById("nombres").value;
    let apellidosContact = document.getElementById("apellidos").value;
    let tipoIdContact = document.getElementById("tipo-id").value;
    let numeroIdContact = document.getElementById("numero-id").value;
    let telefonoContact = document.getElementById("telefono").value;
    let emailContact = document.getElementById("email").value;
    let profesionContact = document.getElementById("profesion").value;
    let rolContact = document.getElementById("rol").value;

    let cont = {
        nombres: nombresContact,
        apellidos: apellidosContact,
        tipoId: tipoIdContact,
        numeroId: numeroIdContact,
        telefono: telefonoContact,
        email: emailContact,
        profesion: profesionContact,
        rol: rolContact
    };

    console.log(cont);

    let url = "http://localhost/api/requerimientoC";
    let params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cont)
    };

    fetch(url, params)
        .then(response => {
            console.log(response);

            // Leer la respuesta como JSON una sola vez
            return response.json();
        })
        .then(data => {
            console.log(data);

            if (response.status == 201) {
                alert("Registro exitoso"); // Mostrar alerta de registro exitoso
            } else {
                alert("Error en la creación del mensaje");
            }
        })
        .catch(error => {
            console.error(error);

            // Manejar el error de la solicitud
            alert("Error en la solicitud");
        });

    return true;
}
