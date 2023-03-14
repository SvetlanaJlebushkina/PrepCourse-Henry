function CuidadoConElConsoleLog (nombre) {
    console.log (nombre);  
    return nombre;
}

function otraFuncion() {
    return (
        "El nombre retornado por la función "CuidadoConElConsoleLog" es: " +
        CuidadoConElConsoleLog ("Camilo")
    );
}

function cuidadoConElReturn (nombre) {
    return nombre;
    console.log (nombre);
}