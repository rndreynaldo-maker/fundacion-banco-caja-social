export function mezclarVectores(v1, v2) {
    let resultado = [...v1, ...v2];
    return resultado.sort((a, b) => a - b);
}
