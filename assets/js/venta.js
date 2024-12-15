import { propiedades_alquiler, propiedades_venta } from './data/db.js';
import { crearTarjeta, mostrarPropiedades } from './script.js';

const contenedorVenta = document.querySelector("#venta1 .row");

mostrarPropiedades(propiedades_venta, propiedades_venta.length, contenedorVenta);

