// importa la capa de persistencia (repositorio)
 import { TareaRepository } from "../respository/tareaRepository.mjs";
 import { Tarea } from "../models/tarea.mjs";

 //instacia el repositorio para manejar las tareas
 const tareaRepo = new TareaRepository();

 // servicio para obtener todas las tareas
 export function listarTareas() {
    // obtiene todas las tareas desde la capa persistencia
    return tareaRepo.obtenerTodas();   
}
// Servicio para obtener solo las tareas Completadas
export function listarTareasCompletadas() {
    // Obtiene todas las tareas desde la capa de persistencia
    const tareas = tareaRepo.obtenerTodas() ;

    return tareas.filter(tarea => tarea.completado);
}
//Servicio para crear una nueva tarea
export function crearTarea(id, titulo, descripcion, completado = false ) {
    //obtiene todas las tareas
    const tareas = tareaRepo.obtenerTodas();
    // crear una nueva instancia del modelo tarea
    const nuevaTarea = new Tarea (id, titulo, descripcion, completado);
    // Valida que la tarea tenga un titulo valido
    nuevaTarea.validar();
    // añade la nueva tarea a la lista de tareas
    tareas.push(nuevoTarea);
    // guarda la lista actualizada de tareas en el archivo
    tareaRepo.guardar(tareas);
}

// servicio para marcar una tarea como completada
export function completarTarea(id) {
    //obtiene todas las tareas 
    const tareas = tareaRepo.obtenerTodas();
    const tarea = tareas.find(tarea => tarea.id === id);

    if (tarea) {
        tarea.completar ();
        tareaRepo.guardar(tareas);
    }
}

export function elimimarTarea(id){
    //obtiene todas las tareas
    let tareas = tareaRepo.obtenerTodas();
    //elimina la tarea que coincida con el ID
    tareas = tareas.filter(tarea => tarea.id !== id);
    tareaRepo.guardar(tareas);
}