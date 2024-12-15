import { propiedades_alquiler, propiedades_venta } from "./data/db.js";
import { crearTarjeta, mostrarPropiedades } from "./script.js";

const contenedorAlquiler = document.querySelector("#alquiler .row");
const contenedorVenta = document.querySelector("#venta .row");

mostrarPropiedades( propiedades_alquiler, 3, contenedorAlquiler );
mostrarPropiedades( propiedades_venta, 3, contenedorVenta);
