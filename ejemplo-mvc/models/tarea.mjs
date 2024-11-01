export default class Tarea {
    constructor(id, titulo, descripcion, completado = false) {
        this.id = id; // identificador unico de tarea
        this.titulo = titulo; // titulo de la tarea
        this.descripcion = descripcion ; // descripcion de la tarea
        this.completado = completado; //Estado de ccompletado, por defecto es false
    }
    // metodo para marcar una tarea como completada
    completar(){
        this.completado = true; // cambia el completado a true
    }

    //metodo para validar que el titulo de la tarea no este vacio
    validar() {
        if (!this.titulo || this.titulo.trim()=== '') {
            throw new Error(`El titulo de la tarea es obligatorio.`);
        }
    }
} 