import Fila from "../comunes/objetos/fila";

export function lineaRecta(articulo){
    if(articulo===null)
        return [];
    
    let filas = []; 
    let depreciacion = 0;
    let depreciacionAcumulada = 0;
    
    for (let anio = 0; anio <= articulo.vidaUtil; anio++) {
        let valorLibros = articulo.valorArticulo - depreciacionAcumulada;
        let fila = new Fila(anio, depreciacion, depreciacionAcumulada, valorLibros);
        depreciacion = (articulo.valorArticulo - articulo.valorResidual) / articulo.vidaUtil;
        depreciacionAcumulada += depreciacion;
        filas.push(fila);
    }

    return filas;
}

export function depreciacionAcelerada(articulo) {
    if (articulo===null)
        return [];

    let filas = [];
    let depreciacionAcumulada = 0;
    let depreciacion = 0;
    let tasaDepreciacion = (
        1 - Math.pow(
                (articulo.valorResidual/articulo.valorArticulo),
                (1/articulo.vidaUtil)
            )
    );
    console.log("tasa de depreciacion: ", tasaDepreciacion);
    for (let anio = 0; anio <= articulo.vidaUtil; anio++) {
        let valorLibros = articulo.valorArticulo - depreciacionAcumulada;
        let fila = new Fila(anio, depreciacion, depreciacionAcumulada, valorLibros);
        filas.push(fila);

        depreciacion = (articulo.valorArticulo - depreciacionAcumulada) * tasaDepreciacion;
        depreciacionAcumulada += depreciacion;
    }

    return filas;
}

export function depreciacionPorUso(articulo) {
    if (articulo===null)
        return []

    let filas = []
    let depreciacionAcumulada = 0
    let depreciacion = 0
    let tasaDepreciacion = depreciacionPorHora(articulo)
    console.log("tasa de depreciacion: ", tasaDepreciacion)
    for (let anio = 0; anio <= articulo.vidaUtil; anio++) {
        let valorLibros = articulo.valorArticulo - depreciacionAcumulada
        let fila = new Fila(anio, depreciacion, depreciacionAcumulada, valorLibros)
        filas.push(fila)

        depreciacion = articulo.promedioUso * tasaDepreciacion
        console.log("Depreciacion: ", depreciacion, " Depreciacion acumulada: ", depreciacionAcumulada)
        depreciacionAcumulada += depreciacion;
    }

    return filas;
}

export function depreciacionPorHora(articulo) {
    return (articulo.valorArticulo - articulo.valorResidual) / (articulo.vidaUtil * articulo.promedioUso)
}