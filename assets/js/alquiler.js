import { propiedades_alquiler, propiedades_venta } from './data/db.js';
import { crearTarjeta, mostrarPropiedades } from './script.js';

const contenedorAlquiler = document.querySelector("#alquiler1 .row");

mostrarPropiedades(propiedades_alquiler, propiedades_alquiler.length, contenedorAlquiler);


