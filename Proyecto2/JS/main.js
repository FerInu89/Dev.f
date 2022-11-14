let cuentas = [
    {nombre: 'Fer', usuario: '123456', contraseña: '1234'},
    {nombre: 'Liz', usuario: '789101', contraseña: '4321'},
    {nombre: 'Flor', usuario: '654321', contraseña: '5678'}
]

function loginU(form){
    //alert("validando")
    var user;

    user = document.getElementById("u").value;
    //alert(pass)
    //alert(user)

    for( i = 0; i < cuentas.length; i++){
        if(user == cuentas[i].usuario){
            error = false
            location = "./Password.html";
            return contenido = cuentas[i].nombre;
        }else{
            error = true
        }
    }
    if(error){
        alert("Usuario Invalido")
    }
}

function loginC(form){
    //alert("validando")
    var pass;

    pass = document.getElementById("c").value;
    //alert(pass)
    //alert(user)

    for( i = 0; i < cuentas.length; i++){
        if(pass == cuentas[i].contraseña){
            error = false
            location = "/Proyecto2/html/dashboard.html";
            //alert("Contraseña Valido")
            break
        }else{
            error = true
        }
    }
    if(error){
        alert("Contraseña Invalido")
    }
}

function regresar(){
    location = "/Proyecto2/html/index.html"
}