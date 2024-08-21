// URL para acceder a la API
const url = './api/datos.php?tabla=productos';

/**
 * Obtiene de manera asíncrona los artículos
 * @return datos los datos en formato JSON
 */
export async function obtenerArticulos() {
    const res = await fetch(url);
    const datos = await res.json();
    if(res.status !== 200) {
        throw Error('No se pudo obtener los datos');
    }
    return datos;
}