
/*Con esta función vamos a introducir los valores de nuestro array en una tabla para que la presentación 
sea mejor en pantalla*/

function crear(){

    //Llamamos a la funcion GenerarNumeros() para crear nuestro array
    GeneraNumeros();
    //Reseteamos el valor de suma para no acumular valores anteriores
    suma=0;
    
    /*Creamos una variable llamada tabla e introducimos el codigo necesario para crear elementos en html "<loquesea>", para definir
    atributos de esa tabla se hace como se muestra en pantalla con border*/
    let tabla="<table border=\"2\">";
    
    //Recorremos el array 
    for(let i=0;i<miarray.length;i++){ 
    //Le sumamos un td a cada posicion del array y le concatenamos el valor del array en esa posición
    tabla+="<td>"+ miarray[i];
    // Utilizo la variable suma como un acumulador de los elementos del array para calcular despues la media
    suma=suma+miarray[i]

    }

    /*Ahora presentamos en el elemento con id resultado el contenido de la tabla y reseteamos los valores de los otros elementos
    para que cuando se pulse todo el rato en generar numeros no sigan los resultados anteriores en pantalla*/
    document.getElementById("resultado").innerHTML=tabla;
    document.getElementById("resultadomedia").innerHTML="";
    document.getElementById("resultadomoda").innerHTML="";
    document.getElementById("resultadomediana").innerHTML="";
    
    
    }
    