export function registrarPersona(nombre, genero) {
    return {
        nombre,
        genero
    };
}

export function mostrarPersonas(lista) {
    lista.forEach(p => {
        console.log(`${p.nombre} - ${p.genero}`);
    });
}
