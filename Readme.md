# EXAMEN 2ª EVALUACIÓN
# APLICACIÓN DE GESTIÓN DE TAREAS

Tenemos 3 archivos en el repositorio (`index.html`, `app.js`, `styles.css`).
Debemos incluir el script app.js como módulo en index.html.
Trabajaremos sobre el fichero app.js.

Los estilos ya están definidos y hay que incluirlos en index.html.
Tenemos un array global de objetos tarea en la app


## Tareas de evaluación:

**1. Define la función constructora del objeto `Tarea` con los siguientes parámetros:** (1 punto)

* `descripcion`: (string) Descripción de la tarea.
* `fecha`: (string) Cadena compatible para convertirla en TimeStamp internamente.

**La función constructora debe:**

* Asignar un `id` único a cada tarea, utilizando un contador global `idCounter`.
* Almacenar la `descripcion` y la `fecha` como propiedades del objeto.
* Incluir una propiedad `completada` que se inicialice en `false`.
* Incluir un método `modificar(nuevaDesc, nuevaFecha)` que permita cambiar la descripción y la fecha de una tarea existente.


**2. Crea una función `agregarTarea(nuevaTarea)` que:** (1 punto)

* Le añada una nueva propiedad id a la nueva tarea que se asigne de la variable global idCounter (incrementándola).
* Le añada una nueva propiedad completada que se establezca a false y sirva para "tachar la tarea".
* Agregue la nueva tarea al array `tareas`.


**3. Implementa una función `renderizarTareas()` que:** (4 puntos)

* Recorra el array `tareas`.
* Para cada tarea, cree un elemento `<li>` con la siguiente estructura:
[Ver captura de la estructura](imagenes/estructuraTareas.png)
# Nótese que el div con clase "contenido-tarea" puede tener una clase adicional ya definida tarea-completada
# Esta clase haría que el texto de la tarea aparezca tachado CUANDO SE HAGA CLICK SOBRE ÉSE TEXTO. 
```html
<ul id="lista-tareas">
  <li class="flex">
    <div class="contenido-tarea">
      <h3 class="descripcion-tarea">delectus aut autem</h3>
      <p>11/2/2025</p>
    </div>
    <div class="acciones-tarea">
      <button class="editar">Editar</button>
      <button class="borrar">Eliminar</button>
    </div>
  </li>
  <li class="flex">           <!-- Tarea tachada, class tarea-completada -->
    <div class="contenido-tarea tarea-completada">
      <h3 class="descripcion-tarea">quis ut nam facilis et officia qui</h3>
      <p>11/2/2025</p>
    </div>
    <div class="acciones-tarea">
      <button class="editar">Editar</button>
      <button class="borrar">Eliminar</button>
    </div>
    <div>               <!-- Formulario de edición insertado en este caso -->
      <form class="formulario-edicion"></form>
    </div>
  </li>
  <li class="flex"></li>
  <li class="flex"></li>
</ul>
```
[La aplicación debe verse así](imagenes/listadoTareas.png)
[Vídeo funcionamiento de la app](https://gvaedu-my.sharepoint.com/:v:/g/personal/a_roighernandez_edu_gva_es/EciBGPlYLSpOmh3TmX-reWEBeSoTw3xej51Q6V36B20Q1Q?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=jLc03q)

**4. Implementa las siguientes funciones asíncronas:** (4 puntos)

* **`cargarTareasDesdeAPI()`:** (1.5 puntos)
    * Debe obtener 5 tareas de la API REST `https://jsonplaceholder.typicode.com/todos`.
    * Convierte la respuesta de la API (JSON) a un array de objetos de tareas.
    * Agrega las tareas obtenidas al array `tareas` de la aplicación.
    * **Consideraciones:**
        * Usa `fetch` para la petición a la API.
        * Asegúrate de que las tareas obtenidas se integren correctamente con la estructura del objeto `Tarea` de la aplicación.

* **`guardarTareasEnAPI()`:** (1.5 puntos)
    * Debe enviar las tareas del array `tareas` a la API REST `https://jsonplaceholder.typicode.com/todos` para guardarlas.
    * Envía los datos en formato JSON en el cuerpo de la petición.
    * No va a guardarse nada en esa API fake de ejemplo, pero escribe la función como si lo fuera a hacer.
    * **Consideraciones:**
        * Usa `fetch` para la petición a la API.
        * Maneja la respuesta asíncrona de la API.

* **`obtenerFechaActual()`:** (1 punto)
    * Debe obtener la fecha y hora actual de la API REST `https://worldtimeapi.org/api/ip`.
    * Extrae la fecha y hora de la respuesta de la API.
    * Muestra la fecha y hora en un alert.
    * **Consideraciones:**
        * Usa `fetch` para la petición a la API.
        * Maneja la respuesta asíncrona de la API.

**DOMContentLoaded será el evento que se usará a modo de programa principal. En el evento DOMContentLoaded se deberá:**
 1. Establecer los eventos con los correspondientes botones de la app
 2. Cargar datos guardados en LocalStorage si los hubiere
 3. Configurar eventos de los botones
 4. renderizarTareas()
 5. Definir eventos submit y cancel necesarios

**Se desarrollarán las funciones manejadoras de eventos necesarias**
 