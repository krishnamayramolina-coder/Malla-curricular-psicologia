document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los ramos
    const ramos = document.querySelectorAll('.ramo');
    // Definimos la clave para el almacenamiento local
    const localStorageKey = 'ramosAprobados';

    // Función para guardar los ramos aprobados en el navegador
    const guardarRamos = () => {
        // Obtenemos la lista de ramos aprobados
        const ramosAprobados = [];
        document.querySelectorAll('.ramo.aprobado').forEach(ramo => {
            // Guardamos el texto del ramo como identificador
            ramosAprobados.push(ramo.textContent.trim());
        });
        // Convertimos el array a un string JSON y lo guardamos
        localStorage.setItem(localStorageKey, JSON.stringify(ramosAprobados));
    };

    // Función para cargar los ramos aprobados desde el navegador
    const cargarRamos = () => {
        // Obtenemos el string JSON del almacenamiento local
        const ramosGuardados = localStorage.getItem(localStorageKey);
        if (ramosGuardados) {
            // Si hay datos, los convertimos de nuevo a un array
            const ramosAprobados = JSON.parse(ramosGuardados);
            // Iteramos sobre todos los ramos para aplicar la clase "aprobado"
            ramos.forEach(ramo => {
                if (ramosAprobados.includes(ramo.textContent.trim())) {
                    ramo.classList.add('aprobado');
                }
            });
        }
    };

    // Evento de clic para cada ramo
    ramos.forEach(ramo => {
        ramo.addEventListener('click', () => {
            // Alternamos la clase 'aprobado' al hacer clic
            ramo.classList.toggle('aprobado');
            // Guardamos el estado actualizado
            guardarRamos();
        });
    });

    // Cargamos los ramos aprobados al iniciar la página
    cargarRamos();
});


