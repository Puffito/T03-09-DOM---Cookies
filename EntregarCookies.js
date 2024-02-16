/* Crea un documento que solicite al usuario cierta información que será almacenada en las cookies. 
Por ejemplo: idioma (español, ingles,…), tema (oscuro, claro,…), usuario (juan123, ana_78,..), preferencia (alta, baja,…), última visita (fecha/hora). 
Tres de las cookies tendrán una fecha de expiración de 10, 15 y 20 segundos desde el momento en que se establezcan, 
mientras que las otras dos cookies no tendrán fecha de expiración, pero estas últimas se borrarán la segunda vez que se visite la página. 
El documento deberá mostrar las cookies vigentes cada 2 segundos. */
let idioma = prompt("Introduce tu idioma");
let tema = prompt("Introduce tu tema");
let usuario = prompt("Introduce tu usuario");
let preferencia = prompt("Introduce tu preferencia");
let fecha = new Date();
document.cookie = "idioma=" + idioma + "; max-age=10; path=/";
document.cookie = "tema=" + tema + "; max-age=15; path=/";
document.cookie = "usuario=" + usuario + "; max-age=20; path=/";
document.cookie = "preferencia=" + preferencia + "; path=/";
document.cookie = "ultimaVisita=" + fecha + "; path=/";
console.log("Todas las cookies:", document.cookie);
let intervalo = setInterval(() => {
    document.write("<br/>Todas las cookies:", document.cookie);
}, 2000);
