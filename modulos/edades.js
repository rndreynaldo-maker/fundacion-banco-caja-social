export function promedioEdades(edades) {
    let suma = edades.reduce((a, b) => a + b, 0);
    return suma / edades.length;
}

export function mayorEdad(edades) {
    return Math.max(...edades);
}

export function menorEdad(edades) {
    return Math.min(...edades);
}
