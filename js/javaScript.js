//declaracion de Variables
let pax = 10
let estilo
let chef 
let usuario
let bucle = true
let precio 

//declaracion de Funciones para tipo de Chef y presupuesto

function cocinero(estilo){
    if(estilo == "asados internacionales"){ 
    chef = "Sean Brock"
    }else if(estilo == "asiatica"){
    chef= "Dave Chang"
    }else if(estilo == "española"){
        chef= "Joan Roca"
    }else if(estilo == "vegetariana"){
        chef= "Andoni Aduriz"
    }else if(estilo == "molecular"){
        chef= "Heston Blumenthal"
    }else if(estilo == "mexicana"){
        chef= "David Muñoz"
    }else{
        alert("ingrese alguna de las opciones especificadas anteriormente")
        estilo = prompt(usuario + " Ingresa el tipo de comida que te gustaria para sugerirte el mejor chef en tu evento dentro de nuestras especialidades: Asados Internacionales, Asiatica, Española, Vegetariana, Molecular, Mexicana")
    }
}

function presupuesto(pax){
        if((pax >= 10) || (pax <=20)){ 
        precio = "10.000 $"
        }else if((pax <= 20) || (pax >= 50)){
        precio = "20.000 $"
        }else if((pax <= 50) || (pax >= 80)){
        precio = "50.000 $"
        }else if((pax <= 80) || (pax >= 150)){
        precio = "70.000 $"
        }else if((pax <= 150) || (pax >= 250)){
        precio = "90.000 $"
        }else if((pax <= 250) || (pax >= 300)){
        precio = "120.000 $"
        }else if((pax < 10)||(pax >300)){
        alert("ingrese un monto mayor a 10 pax y menor a 300 px")
        }else{
            alert("ingrese alguna de las opciones especificadas anteriormente")
            pax = prompt("Hola " + usuario + " Ingresa la cantidad de personas que asistiran a tu evento minimo de 10 pax maximo de 300 pax")
        }
}

//declaracion de bucle y condicional para solicitud de datos
while(bucle){
    usuario = prompt("¡Bienvenido a MaiorDommo!. Para hacer un presupuesto rapido de tu evento Ingresa tu nombre, en caso contrario escribe no y entraras directo a nuestra WEB")
    if(usuario == "")
    alert("introduzca un nombre")
    else if(usuario == "no"){
    alert("Bienvenido a MaiorDommo!!. Ingresa a nuestras Secciones para conocer mas sobre nosotros!")
    bucle = false 
    }else{
        pax = prompt("Hola " + usuario + " Ingresa la cantidad de personas que asistiran a tu evento minimo de 10 pax maximo de 300 pax")
        presupuesto(pax)
        estilo = prompt(usuario + " Ingresa el tipo de comida que te gustaria para sugerirte el mejor chef en tu evento dentro de nuestras especialidades: Asados Internacionales, Asiatica, Española, Vegetariana, Molecular, Mexicana")
        cocinero(estilo)
        alert(`MaiorDommo recomienda para tu evento el chef ${chef} y tendra un costo por cantidad de pax de ${precio}. Visita nuestra pagina para ver detalladamente nuestros servicio y contactarnos.`)
        bucle = false 
    }
}
















