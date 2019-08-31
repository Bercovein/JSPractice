function validate(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    

    //EXPRESIONES REGULARES

    var aToz = new RegExp(/[A-z]/);
    var alphNumb = new RegExp(/[0-9]/);
    var passExp = new RegExp (/\w{9,20}/);
    var domain = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    //var domainBonus = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


    var string="";
    var vacio = " no debe estar vacio ";
    var flag = false;


    //NOMBRE
    if(nombre.length > 20 || nombre == ""){
        string+="\n" + "El campo nombre" + vacio + "ni superar los 20 caracteres";
        if(!flag) flag = true;
    }

    //APELLIDO
    if(apellido.length > 20 || apellido == ""){
        string+="\n" + "El campo apellido" + vacio + "ni superar los 20 caracteres";
        if(!flag) flag = true;
    }
    
    //FALTAN CARACTERES ESPECIALES
    
    //EDAD
    if(edad != ""){
        if(aToz.test(edad)){
            string += "\n" + "El campo edad debe contener solo numeros";
            if(!flag) flag = true;
        }
    }

    //EMAIL
    if(email == ""){
        string += "\n" + "El campo email" + vacio;
        if(!flag) flag = true;
    }else if(!domain.test(email)){
        string += "\n" + "El campo email debe ser de la forma 'usuario@dominio.com'";
        if(!flag) flag = true;
    }

    //PASSWORD (falta mayuscula y minuscula y numero)
    if(password == ""){
        string += "\n" + "El campo contraseña" + vacio;
        if(!flag) flag = true;
    }else if(!passExp.test(password)){
        string += "\n" + "El campo contraseña debe tener entre 9 y 20 caracteres."
        if(!flag) flag = true;
    }

    
    if(alphNumb.test(password)){
        string += "\n" + "El campo contraseña debe contener al menos 1 numero"
        flag = true;
    }

    if(flag){
        alert(string);
        return false;
    }else{
        alert("El formulario pudo ser enviado correctamente!");
    }

    return true;
}

function add(){
    
}
