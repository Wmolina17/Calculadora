function agregar(numero){
    document.getElementById("pantalla").value += numero
}

function borrar(){
    document.getElementById("pantalla").value = ''
}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value

    const resultado = eval(valorPantalla)
    
    document.getElementById("pantalla").value = resultado
}   