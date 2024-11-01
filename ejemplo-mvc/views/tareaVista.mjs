// Funcion para rederizar una lista de tareas en formato JSON
export function renderizarListaTareas(tareas) {
    //Formatea el array de tareas en formato JSON con indentacion
    return JSON.stringify(tareas, null, 2);
}
// Funcion para Renderizar un mensaje generico en formato JSON
export function renderizarMensaje(mensaje) {
    // Envvuelve un mensaje en formato JSON
    return JSON.stringify({ mensaje }, null, 2);
}
// funcion para renderizar una tarea especifica en Formato JSON
export function renderizarTarea(tarea) {
    //Formatea una tarea induvidual en formato JSON con indentacion
    return JSON.stringify(tarea, null, 2);
}