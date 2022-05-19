//mensaje de bienvenida que pide el nombre del usuario

let name = prompt('Dinos tu Nombre y empieza tu experiencia MaiorDommo')
if(name != ""){
    alert('Bienvenido a MaiorDommo '+ name )
}
else{
    alert('introduzca su nombre')
}

//solicitud de edad para ingresar a la pagina


let edad = prompt('¿Eres mayor de 18 años?')
if(edad == 'si'){
    alert(name + ' puedes contratar los servicios que presupuestes')
}else if(edad == 'no'){
    alert(name + ' puede presupestar nuestros servicios pero no contratarlos')
}else{
    alert('Si eres Menor de edad podras presupuestar pero con contratar nuestros servicios')
}



//solicitud de recomendacion para indicaciones del evento

let recomend 
while (recomend != 'si'){
    recomend = prompt('¿Deseas saber nuestras recomendaciones para tu evento?')
}
alert("Te recomendamos especificar siempre si tus invitados son celiacos, vegetarianos, veganos o tienen alguna condicion o alergias, para tomar las medidas necesarias.") 






