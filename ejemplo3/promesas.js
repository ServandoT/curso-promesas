// Petición con JQuery, no nativa de JS
// $( document ).ready(function() {
//     console.log('Antes de la petición');

//     // Hago una petición de tipo get a una y que devuelve una promesa
//     $.get('https://reqres.in/api/users').then( 
//         (respuesta) => {
//             console.log('dentro del then');
//             console.log(respuesta);
//         });
//     console.log('después de la petición');
// });

// Petición con API Fetch, nativa de JS
// Cuando la página cargue hago la petición
$( document ).ready(function() {
    console.log('Antes de la petición');
    // Hago una petición a una web y devuelve una promesa
    fetch('https://reqres.in/api/users').then( 
        (respuesta) => {
            console.log('dentro del then');
            console.log(respuesta);
        });
    console.log('después de la petición');
});