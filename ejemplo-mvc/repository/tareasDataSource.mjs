export default class TareasDataSource {
    obtenerTodas(){
        throw new Error ('Este metodo debe ser implementado por las subclase');

    }
    guardar(tareas){
        throw new Error("Este metodo debe ser implementado por la subclase");
    }
    eliminar(id) {
        throw new Error("Este metodo debe ser implementado por la subclase");   
    }
}