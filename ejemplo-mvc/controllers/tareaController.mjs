import { listarTareas, listarTareasCompletadas, crearTarea, completarTarea, eliminarTarea } from "../services/tareaService.mjs";

import { renderizarListaTareas, renderizarMensaje } from "../views/tareaVista.mjs";

// Controlador para listar todas las tareas
export function listarTareasController(req, res) {
    const tareas = listarTareas ();
    res.send(renderizarListaTareas(tareas));
    
}
// Controlador para listar solo las tareas ccompletadas
export function listarTareasCompletadasController(req, res){
    const tareas = listarTareas();
    res.send(renderizarListaTareas(tareas));
}

//controlador para crear una tarea nueva
export function listarTareaController(req, res){
    const {id, titulo, descripcion, completado } = req.body;
    crearTarea(id, titulo, descripcion, completado);
    res.send(renderizarMensaje (`Tarea ccreada con exito`));
}
//Controlador para marcar una tarea como completa
export function completarTereaController(req, res) {
    const { id } = req.params;
    completarTarea (parseInt(id));
    res.send(renderizarMensaje('Tarea marcada como completa'));

}

//controlador para eliminar una tarea
export function eliminarTareaController(req, res) {
    const {id} = req.params;
    eliminarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea eliminada con exito'));
}