import  fs  from "fs"; //importamos el modulo del sistema de archivos
import path from "path"; //modulo para manejar rutas de archivos
import { fileURLToPath } from "url";

//Importamos la interfaz de persistencia
import TareasDataSource from "./tareasDataSource.mjs";
import { Tarea } from "../models/tarea.mjs";

// obtener la ruta del archivo de tareas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../tareas.txt');

export default class TareaRepository extends TareasDataSource {
    constructor (){
        super ();
    }
    obtenerTodas(){
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            const tareas = JSON.parse(data);
            return tareas.map(tareaData = new Tarea(
                tareaData.id,
                tareaData.titulo,
                tareaData.descripcion,
                tareaData.completado
            ));
        } catch (error){
            console.error('Error al leer el archivo de tareas:', error);
            return[];
        }     
    }

    guardar(tareas){
        try {
            const data = JSON.stringify(tareas, null, 2);
            fs.writeFileSync(filePath, data, 'utf-8');

        }catch (error){
            console.error('Error al guardar las tareas:', error);
        }
    }
    eliminar (id){
        try {
            const tareas = this.obtenerTodas();
            const tareasActualizadas = tareas.filter (tarea => tarea.id !== id);
            this.guardar(tareasActualizadas);

        }catch (error){
            console.error('Error al eliminar la tarea:', error);
        }
    }
}