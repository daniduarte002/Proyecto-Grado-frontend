function saveCont() {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (recargar la página)

    let NombresContact = document.getElementById("nombres").value;
    let ApellidosContact = document.getElementById("apellidos").value;
    let Tipo_IdentificacionContact = document.getElementById("tipo-id").value;
    let Numero_IdentificacionContact = document.getElementById("numero-id").value;
    let TelefonoContact = document.getElementById("telefono").value;
    let EmailContact = document.getElementById("email").value;
    let ProfesionContact = document.getElementById("profesion").value;
    let RolContact = document.getElementById("rol").value;

    let cont = {
        Nombres: NombresContact,
        Apellidos: ApellidosContact,
        Tipo_Identificacion: Tipo_IdentificacionContact,
        Numero_Identificacion: Numero_IdentificacionContact,
        Telefono: TelefonoContact,
        Email: EmailContact,
        Profesion: ProfesionContact,
        Rol: RolContact
    };

    console.log(cont);
    // Convierte el objeto en una cadena JSON
    var jsonData = JSON.stringify(cont);

    console.log(jsonData);

    // Realiza la petición POST utilizando la cadena JSON
    fetch('http://localhost:8000/api/RequerimientoC', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del API:', data);
    })
    .catch(error => {
        console.error('Error al enviar la petición:', error);
    });

}
