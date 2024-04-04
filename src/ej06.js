let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);

function parsearUrl(laURL) {
    let params = {};

    try {
        let urlObjeto = new URL(laURL);
        params.host = urlObjeto.origin;
        params.ruta = urlObjeto.pathname;
        params.parametros = Object.fromEntries(urlObjeto.searchParams.entries());
    } catch (error) {
        console.error('Error al parsear la URL:', error);
        // Si ocurre una excepción, establecer todas las propiedades en null
        params.host = null;
        params.ruta = null;
        params.parametros = {};
    }

    return params;
}