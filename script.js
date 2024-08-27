var btnEncriptar = document.querySelector(".boton-encriptar");
var btnDesencriptar = document.querySelector(".boton-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var contenedor = document.querySelector(".contenedor-mensaje");
var resultado = document.querySelector(".contenedor-resultado");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultaradelante();
    var cajatexto = recuperartxt();
    //validar entrada
    if(validaingreso(cajatexto)) {
    resultado.textContent = encriptartxt(cajatexto);
    }
}

function desencriptar(){
    ocultaradelante();
    var cajatexto = recuperartxt();
    //validar entrada
    if(validaingreso(cajatexto)) {
    resultado.textContent = desencriptartxt(cajatexto);    
    }
}

function validaingreso (texto) {
        const valido = /^[a-z\s\W\d]+$/;
        const acentos = /[áéíóúÁÉÍÓÚ]/;
        if(!valido.test(texto) || acentos.test(texto)) {
            alert("El texto solo debe contener letras minúsculas y sin acentos.");
            return false;
        }
        return true;
}

function recuperartxt(){
    var cajatexto = document.querySelector(".cajadetexto");
    return cajatexto.value
}

function ocultaradelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptartxt(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }

        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }

        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }

        else if (texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }

        else if (texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }

        else{
            textoFinal=textoFinal + texto[i]
        }
    }

    return textoFinal;

}

function desencriptartxt(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".boton-copiar");

btnCopiar.addEventListener("click", copiar = ()=> {
    var contenido = document.querySelector(".contenedor-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Funciona");
});

