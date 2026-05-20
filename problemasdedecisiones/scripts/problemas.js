function verificarVoto(){

    let edad = document.getElementById("edad").value;

    if(edad >= 18){
        document.getElementById("result").innerHTML =
        "Usted puede votar en las próximas elecciones.";
    }
    else{
        document.getElementById("result").innerHTML =
        "Usted no puede votar en las próximas elecciones.";
    }

}
function calcularSueldo(){

    let horas = parseFloat(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);

    let sueldo;

    if(horas <= 40){
        sueldo = horas * pago;
    }
    else{
        let extras = horas - 40;
        sueldo = (40 * pago) + (extras * pago * 2);
    }

    document.getElementById("result").innerHTML =
    "El sueldo semanal es de $" + sueldo;

}
function verificarRegalo(){

    let dinero = parseFloat(document.getElementById("dinero").value);

    if(dinero <= 10){
        document.getElementById("result").innerHTML =
        "Puede regalar una tarjeta.";
    }
    else if(dinero <= 100){
        document.getElementById("result").innerHTML =
        "Puede regalar chocolates.";
    }
    else if(dinero <= 250){
        document.getElementById("result").innerHTML =
        "Puede regalar flores.";
    }
    else{
        document.getElementById("result").innerHTML =
        "Puede regalar un anillo.";
    }

}
function calcularEstacionamiento(){

    let horas = parseInt(document.getElementById("horas").value);

    let total = 0;

    if(horas <= 2){
        total = horas * 5;
    }
    else if(horas <= 5){
        total = (2 * 5) + ((horas - 2) * 4);
    }
    else if(horas <= 10){
        total = (2 * 5) + (3 * 4) + ((horas - 5) * 3);
    }
    else{
        total = (2 * 5) + (3 * 4) + (5 * 3) + ((horas - 10) * 2);
    }

    document.getElementById("result").innerHTML =
    "Debe pagar $" + total;

}
function menorEdad(){

    let nombre1 = document.getElementById("nombre1").value;
    let edad1 = parseInt(document.getElementById("edad1").value);

    let nombre2 = document.getElementById("nombre2").value;
    let edad2 = parseInt(document.getElementById("edad2").value);

    let nombre3 = document.getElementById("nombre3").value;
    let edad3 = parseInt(document.getElementById("edad3").value);

    let menorNombre = nombre1;
    let menorEdad = edad1;

    if(edad2 < menorEdad){
        menorEdad = edad2;
        menorNombre = nombre2;
    }

    if(edad3 < menorEdad){
        menorEdad = edad3;
        menorNombre = nombre3;
    }

    document.getElementById("result").innerHTML =
    "La persona menor es " + menorNombre +
    " con " + menorEdad + " años.";

}
function calcularDescuento(){

    let precio = parseFloat(document.getElementById("precio").value);

    let descuento;
    let total;

    if(precio >= 200){
        descuento = precio * 0.15;
    }
    else if(precio > 100){
        descuento = precio * 0.12;
    }
    else{
        descuento = precio * 0.10;
    }

    total = precio - descuento;

    document.getElementById("result").innerHTML =
    "El descuento es $" + descuento +
    " y el total a pagar es $" + total;

}
function calcularBeca(){

    let edad = parseInt(document.getElementById("edad").value);
    let promedio = parseFloat(document.getElementById("promedio").value);

    if(edad > 18){

        if(promedio >= 9){
            document.getElementById("result").innerHTML =
            "La beca será de $2000.";
        }
        else if(promedio >= 7.5){
            document.getElementById("result").innerHTML =
            "La beca será de $1000.";
        }
        else if(promedio >= 6){
            document.getElementById("result").innerHTML =
            "La beca será de $500.";
        }
        else{
            document.getElementById("result").innerHTML =
            "Se enviará una carta de invitación.";
        }

    }
    else{

        if(promedio >= 9){
            document.getElementById("result").innerHTML =
            "La beca será de $3000.";
        }
        else if(promedio >= 8){
            document.getElementById("result").innerHTML =
            "La beca será de $2000.";
        }
        else if(promedio >= 6){
            document.getElementById("result").innerHTML =
            "La beca será de $100.";
        }
        else{
            document.getElementById("result").innerHTML =
            "Se enviará una carta de invitación.";
        }

    }

}
function calcularBono(){

    let sueldo = parseFloat(document.getElementById("sueldo").value);
    let antiguedad = parseInt(document.getElementById("antiguedad").value);

    let bonoAntiguedad = 0;
    let bonoSueldo = 0;

    if(antiguedad > 2 && antiguedad < 5){
        bonoAntiguedad = sueldo * 0.20;
    }
    else if(antiguedad >= 5){
        bonoAntiguedad = sueldo * 0.30;
    }

    if(sueldo < 1000){
        bonoSueldo = sueldo * 0.25;
    }
    else if(sueldo <= 3500){
        bonoSueldo = sueldo * 0.15;
    }
    else{
        bonoSueldo = sueldo * 0.10;
    }

    let bonoFinal;

    if(bonoAntiguedad > bonoSueldo){
        bonoFinal = bonoAntiguedad;
    }
    else{
        bonoFinal = bonoSueldo;
    }

    document.getElementById("result").innerHTML =
    "El bono asignado es de $" + bonoFinal;

} 
function calcularPoliza(){

    let tipo = document.getElementById("poliza").value;
    let alcohol = document.getElementById("alcohol").value;
    let lentes = document.getElementById("lentes").value;
    let enfermedad = document.getElementById("enfermedad").value;
    let edad = parseInt(document.getElementById("edadPoliza").value);

    let costo = 0;

    if(tipo == "A" || tipo == "a"){
        costo = 1200;
    }
    else{
        costo = 950;
    }

    if(alcohol == "si"){
        costo += costo * 0.10;
    }

    if(lentes == "si"){
        costo += costo * 0.05;
    }

    if(enfermedad == "si"){
        costo += costo * 0.05;
    }

    if(edad > 40){
        costo += costo * 0.20;
    }
    else{
        costo += costo * 0.10;
    }

    document.getElementById("resultPoliza").innerHTML =
    "El costo total de la póliza es $" + costo;

}
function vacaciones(){

    let dinero = parseFloat(document.getElementById("presupuesto").value);

    let costoKm = parseFloat(document.getElementById("costo").value);

    let mexico = 750 * 2 * costoKm;
    let pv = 800 * 2 * costoKm;
    let acapulco = 1200 * 2 * costoKm;
    let cancun = 1800 * 2 * costoKm;

    let resultado = "";

    if(dinero >= cancun){
        resultado = "Puede ir a Cancún.";
    }
    else if(dinero >= acapulco){
        resultado = "Puede ir a Acapulco.";
    }
    else if(dinero >= pv){
        resultado = "Puede ir a Puerto Vallarta.";
    }
    else if(dinero >= mexico){
        resultado = "Puede ir a México.";
    }
    else{
        resultado = "Tendrá que quedarse en casa.";
    }

    document.getElementById("resultVacaciones").innerHTML =
    resultado;

}
function bonoAntiguedad(){

    let antiguedad = parseInt(document.getElementById("anios").value);

    let bono;

    if(antiguedad > 5){
        bono = 1000;
    }
    else{
        bono = antiguedad * 100;
    }

    document.getElementById("resultBonoAnt").innerHTML =
    "El bono es de $" + bono;

}
function calcularSueldoSemanal(){

    let horas = parseInt(document.getElementById("horasSemana").value);

    let pago = parseFloat(document.getElementById("pagoHora").value);

    let sueldo = 0;

    if(horas > 50){

        document.getElementById("resultSueldoSem").innerHTML =
        "No está permitido trabajar más de 50 horas.";

    }
    else{

        if(horas <= 40){
            sueldo = horas * pago;
        }
        else if(horas <= 45){

            sueldo = (40 * pago) +
                     ((horas - 40) * pago * 2);

        }
        else{

            sueldo = (40 * pago) +
                     (5 * pago * 2) +
                     ((horas - 45) * pago * 3);

        }

        document.getElementById("resultSueldoSem").innerHTML =
        "El sueldo semanal es de $" + sueldo;

    }

}
function calcularPasaje(){

    let alumnos = parseInt(document.getElementById("alumnos").value);

    let costo;

    if(alumnos > 100){
        costo = 20;
    }
    else if(alumnos >= 50){
        costo = 35;
    }
    else if(alumnos >= 20){
        costo = 40;
    }
    else{
        costo = 70;
    }

    let total = alumnos * costo;

    document.getElementById("resultPasaje").innerHTML =
    "Cada alumno pagará $" + costo +
    " y el total será $" + total;

}