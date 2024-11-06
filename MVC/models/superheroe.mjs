export default class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder = [], habilidadEspecial, aliado = [], enemigo = []) {
        this.id = id; //identificador unice de el superheroe
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }

    agregarPoder(poder) {
        this.poder.push(poder)
    }

    agregarAliado(aliado) {
        this.aliado.push(aliado);
    }

    agregarEnemigo(enemigo) {
        this.enemigo.push(enemigo);
    }
}