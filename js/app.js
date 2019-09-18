var estudiantes = [
{	
	"codigo": 1,
	"nombre": "Emiliano Herrera",
    "nota": 5
}];




function registrarEstudiante(){
	var codigo1=parseInt(document.getElementById('inputCodigo').value);
	var nombre1=document.getElementById('inputNombre').value;
	var nota1=parseFloat(document.getElementById('inputNota').value);

	estudiantes.push({
    	codigo: codigo1,
    	nombre: nombre1,
    	nota: nota1
	});




	var fila=document.createElement('tr');
	var columna1=document.createElement('td');
	var columna2=document.createElement('td');
	var columna3=document.createElement('td');

	var texto1=document.createTextNode(codigo1); 
	var texto2=document.createTextNode(nombre1);
	var texto3=document.createTextNode(nota1);

	fila.appendChild(columna1);
	fila.appendChild(columna2);
	fila.appendChild(columna3);

	columna1.appendChild(texto1);
	columna2.appendChild(texto2);
	columna3.appendChild(texto3);

	alert("El usuario ha sido registrado ocon exito.");

	document.getElementById('tableNotas').appendChild(fila);



}

document.getElementById("buttonRegistro").addEventListener("click",registrarEstudiante);

function mostrarPromedio(){
	var promedio=[];
	for (var i = 0; i < estudiantes.length; i++) {
				promedio[i]=parseFloat(estudiantes[i].nota);
	}

	var out=0;
	for (var i = 0; i < promedio.length; i++) {
		out+=promedio[i];
	}
	out=out/promedio.length;

	alert("El promedio es: "+out);
}
document.getElementById("buttonPromedio").addEventListener("click",mostrarPromedio);


function mostrarNotaMenor(){
	var menor=[];
	for (var i = 0; i < estudiantes.length; i++) {
				menor[i]=parseFloat(estudiantes[i].nota);
	}

	var out= Math.min(...menor);
	alert("La nota más baja es: "+out);

}
document.getElementById("buttonMenor").addEventListener("click",mostrarNotaMenor);



function mostrarNotaMayor() {
	var mayor=[];
	for (var i = 0; i < estudiantes.length; i++) {
				mayor[i]=parseFloat(estudiantes[i].nota);
	}



	var out= Math.max(...mayor);
	alert("La nota más alta es: "+out);
}
document.getElementById("buttonMayor").addEventListener("click",mostrarNotaMayor);
