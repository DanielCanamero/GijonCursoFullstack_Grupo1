document.getElementById("formulario").addEventListener("submit", function(e){

    e.preventDefault();

    let formulario = new FormData(document.getElementById("formulario"));

    fetch("registrar.php", {
        method: POST,
        body: formulario
    })
    .then(res=> res.json())
    .then(data =>{
        if(data == "true"){
            document.getElementById("tex_nombres").value = "";
            document.getElementById("tex_apellidos").value = "";
            document.getElementById("tex_username").value = "";
            alert("El usuario se insertó correctamente.");
        }
    })
});