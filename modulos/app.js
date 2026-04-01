import { areaCuadrado } from './modulos/figuras.js';
import { promedioEdades } from './modulos/edades.js';
import { mezclarVectores } from './modulos/vectores.js';
import { registrarPersona, mostrarPersonas } from './modulos/musica.js';

// FIGURAS
console.log("Área cuadrado:", areaCuadrado(5));

// EDADES
let edades = [18, 25, 30, 20];
console.log("Promedio edades:", promedioEdades(edades));

// VECTORES
let v1 = [1, 3, 5];
let v2 = [2, 4, 6];
console.log("Vectores mezclados:", mezclarVectores(v1, v2));

// MUSICA
let personas = [
    registrarPersona("Juan", "Rock"),
    registrarPersona("Ana", "Pop")
];
mostrarPersonas(personas);
