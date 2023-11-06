

var x = document.getElementById("btn-resumen");
x.addEventListener("click",sumar);

var y = document.getElementById("btn-borrar");
y.addEventListener("click",deleteBtn);

function sumar(){

    let cantidadTicket =  parseInt(document.getElementById("cantidad").value);
    let categoria = document.getElementById("categoria");
    let select = categoria.options[categoria.selectedIndex].text.toLowerCase();

    console.log(select);
    console.log(cantidadTicket);
    let resultado;
    

    switch(select){
        case "estudiante":
            resultado = (cantidadTicket*200)-((cantidadTicket*200)*0.8);
            break;
        case "trainee":
            resultado = (cantidadTicket*200)-((cantidadTicket*200)*0.5);
            break;
        case "junior":
            resultado = (cantidadTicket*200)-((cantidadTicket*200)*0.15);
            break;
        case "-":
            resultado = cantidadTicket*200;
            break;
    }

    document.getElementById("pagarInput").innerHTML=resultado;
    console.log(resultado);
}

function deleteBtn(){

    let a = " ";

    document.getElementById("pagarInput").innerHTML=a;

}
