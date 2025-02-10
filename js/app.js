// js/app.js
let idCounter = 0;
let tareas = [];

/**
 * FUNCIÓN CONSTRUCTORA DEL OBJETO TAREA
 * @param {string} descripcion - La descripción de la tarea.
 * @param {string} fecha - La fecha de la tarea en formato ISO (YYYY-MM-DD).
 * @property {number} id - El identificador único de la tarea.
 * @property {string} descripcion - La descripción de la tarea.
 * @property {number} fecha - La fecha de la tarea en formato timestamp.
 * @property {boolean} completada - Indica si la tarea está completada (inicialmente false).
 * @method modificar - Método para modificar la descripción y la fecha de la tarea.
 * @param {string} nuevaDesc - La nueva descripción de la tarea.
 * @param {string} nuevaFecha - La nueva fecha de la tarea en formato ISO (YYYY-MM-DD).
 */
function Tarea(descripcion, fecha) {
    // TO DO: Implementar la función constructora
}

/**
 * FUNCIÓN AGREGAR TAREA
 * @param {string} descripcion - La descripción de la tarea.
 * @param {string} fecha - La fecha de la tarea en formato ISO (YYYY-MM-DD).
 * @returns {void} - No retorna ningún valor.
 */
function agregarTarea(descripcion, fecha) {
    // TO DO: Implementar la función agregarTarea
}

/**
 * MANEJO DEL EVENTO DOMContentLoaded (YA SE HA CARGADO LA PÁGINA)
 * - Agregar eventos a los botones con id:
 *   - obtener-fecha: al hacer clic llamará a la función obtenerFechaActual.
 *   - borraStorage: al hacer clic borrará el localStorage y el array tareas.
 * - Seleccionar el formulario con id formulario-tarea que agrega tarea nueva.
 * - Añadir evento submit al formulario y cancelar.
 * - Añadir funciones manejadoras para los botones con id cargar-api y guardar-api.
 * - Cargar los datos guardados en localStorage en la variable tareas si los hay.
 * - Llamar a renderizarTareas.
 */
document.addEventListener('DOMContentLoaded', () => {
    // TO DO: Implementar el manejo del evento DOMContentLoaded
});

/**
 * FUNCIÓN RENDERIZAR TAREAS
 * - Seleccionar el ul con id lista-tareas.
 * - Si el array tareas está vacío, añadir un párrafo al ul que diga "No hay tareas pendientes".
 * - Si no está vacío, recorrer el array tareas.
 * - Por cada tarea, crear un li con clase flex.
 * - Si la tarea está completada, añadir la clase tarea-completada al div con clase contenido-tarea.
 * - Añadir al li el contenido:
 *   - Un div con clase contenido-tarea que contendrá:
 *     - Un h3 con clase descripcion-tarea con la descripción de la tarea.
 *     - Un p con la fecha de la tarea formateada con la función formatearFecha.
 *   - Un div con clase acciones-tarea que contendrá:
 *     - Un botón con clase editar.
 *     - Un botón con clase borrar.
 * - Añadir un evento clic al h3 con clase descripcion-tarea.
 * - Al hacer clic, cambiará el valor de la propiedad completada de la tarea y se guardará en localStorage.
 * - Llamar a renderizarTareas.
 * - Crear un objeto EditarHandle que tendrá dos propiedades: tarea y li.
 * - Al hacer clic en el botón editar, se creará un formulario de edición con la descripción y fecha de la tarea.
 * - Al hacer clic en el botón editar del formulario, se modificará la tarea y se guardará en localStorage.
 * - Al hacer clic en el botón cancelar del formulario, se cerrará el formulario.
 * - Al hacer clic en el botón borrar, se eliminará la tarea del array tareas y se guardará en localStorage.
 * - Al finalizar el bucle, añadir el li al ul.
 * @returns {void} - No retorna ningún valor.
 */
function renderizarTareas() {
    // TO DO: Implementar la función renderizarTareas
}

/**
 * FUNCIÓN MANEJADORA EDITAR (DEBE SER UNA FUNCIÓN CONSTRUCTORA)
 * @param {Event} event - El evento que desencadena la edición.
 * @property {Object} tarea - La tarea que se está editando.
 * @property {HTMLElement} li - El elemento li que contiene la tarea.
 * @method iniciarEdicion - Método para iniciar la edición de la tarea.
 * @method guardarEdicion - Método para guardar los cambios de la tarea.
 * @method cancelarEdicion - Método para cancelar la edición.
 */
function EditarHandle() {
    // TO DO: Implementar la función EditarHandle
}

/**
 * FUNCIÓN QUE DEVUELVE LA FECHA FORMATEADA COMO DD/MM/YYYY
 * @param {string} fecha - La fecha en formato ISO (YYYY-MM-DD).
 * @returns {string} - La fecha formateada como DD/MM/YYYY.
 */
function formatearFecha(fecha) {
    return new Date(fecha).toLocaleDateString('es-ES').slice(0, 10).replace('T', ' ');
}

/**
 * FUNCIÓN QUE GUARDA ARRAY TAREAS EN LOCALSTORAGE
 * @returns {void} - No retorna ningún valor.
 */
function guardarEnLocalStorage() {
    // TO DO: Implementar la función guardarEnLocalStorage
}

/**
 * Función ASYNC para cargar tareas desde una API
 * @async
 * @returns {void} - No retorna ningún valor.
 * @throws {Error} - Si ocurre un error al cargar las tareas desde la API.
 */
async function cargarTareasDesdeAPI() {
    // TO DO: Implementar la función cargarTareasDesdeAPI
    try {
        // TO DO: Implementar el código para cargar tareas desde la API
    } catch (error) {
        // TO DO: Manejar el error
    }
}

/**
 * Función para guardar tareas en una API
 * @async
 * @returns {void} - No retorna ningún valor.
 * @throws {Error} - Si ocurre un error al guardar las tareas en la API.
 */
async function guardarTareasEnAPI() {
    // TO DO: Implementar la función guardarTareasEnAPI
    try {
        // TO DO: Implementar el código para guardar tareas en la API
    } catch (error) {
        // TO DO: Manejar el error
    }
}

/**
 * Función para obtener la fecha y hora actual desde una API
 * @async
 * @returns {void} - No retorna ningún valor.
 * @throws {Error} - Si ocurre un error al obtener la fecha y hora actual.
 */
async function obtenerFechaActual() {
    // TO DO: Implementar la función obtenerFechaActual
    try {
        // TO DO: Implementar el código para obtener la fecha y hora actual
    } catch (error) {
        // TO DO: Manejar el error
    }
}