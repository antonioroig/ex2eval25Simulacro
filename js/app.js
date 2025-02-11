// js/app.js
let idCounter = 0;
let tareas = [];

/**
 * Constructor de objetos Tarea
 * @constructor
 * @param {string} descripcion - Descripción de la tarea
 * @param {string} fecha - Fecha en formato ISO (YYYY-MM-DD)
 * @method modificar - Método para modificar la descripción y la fecha de la tarea.
 * @param {string} nuevaDesc - La nueva descripción de la tarea.
 * @param {string} nuevaFecha - La nueva fecha de la tarea en formato ISO (YYYY-MM-DD).
 */
function Tarea(descripcion, fecha) {
    // TO DO: Implementar la función constructora
}

/**
 * Agrega una nueva tarea al array global
 * @param {object} nuevaTarea - Tarea a añadir al array global
 * @property {number} id - El identificador único de la tarea.
 * @property {boolean} completada - Indica si la tarea está completada (inicialmente false).
 */
function agregarTarea(nuevaTarea) {
    // TO DO: Implementar la función agregarTarea
}

/**
 * Renderiza todas las tareas en el DOM
 * Recorre el array de tareas para ello
 * @returns {void} - No retorna ningún valor
 */
function renderizarTareas() {
    // TO DO: Implementar la función renderizarTareas
}

/**
 * Guarda el array de tareas en localStorage
 * @returns {void} - No retorna ningún valor
 */
function guardarEnLocalStorage() {
    // TO DO: Implementar la función guardarEnLocalStorage
}

/**
 * Borra todas las tareas del localStorage y del array global
 * @returns {void} - No retorna ningún valor
 */
function borrarStorage() {
    // TO DO: Implementar la función borrarStorage
}

/**
 * Carga tareas desde una API externa
 * @async
 * @returns {void} - No retorna ningún valor.
 * @throws {Error} - Si ocurre un error al cargar las tareas desde la API.
 */
async function cargarTareasDesdeAPI() {
    // TO DO: Implementar la función cargarTareasDesdeAPI
    // TO DO: URL de la API: https://jsonplaceholder.typicode.com/todos
    // TO DO: Mostrar un alert con el mensaje 'Se han cargado 5 tareas de la API.'
}

/**
 * Guarda las tareas en una API externa
 * @async
 * @returns {void} - No retorna ningún valor.
 * @throws {Error} - Si ocurre un error al guardar las tareas en la API.
 */
async function guardarTareasEnAPI() {
    // TO DO: Implementar la función guardarTareasEnAPI
    // TO DO: URL de la API: https://jsonplaceholder.typicode.com/todos/{nombreApellidos}
    // TO DO: Mostrar un alert con el mensaje 'Tareas guardadas en API con ID: {ID}'
}

/**
 * Obtiene la fecha y hora actual desde una API externa
 * @async
 * @returns {void} - No retorna ningún valor.
 * @throws {Error} - Si ocurre un error al obtener la fecha y hora actual.
 */
async function obtenerFechaActual() {
    // TO DO: Implementar la función obtenerFechaActual
    // TO DO: URL de la API: https://worldtimeapi.org/api/ip
    // TO DO: Mostrar la fecha y hora actual en el formato 'DD/MM/YYYY HH:MM:SS' en un alert
}

// Evento principal
document.addEventListener('DOMContentLoaded', () => {
    // TO DO: Configurar eventos y cargar datos iniciales
    // TO DO: Cargar tareas desde localStorage
    // TO DO: Configurar eventos de los botones
});

// TO DO: Implementar las funciones manejadoras que sean necesarias tipo edición y borrado.