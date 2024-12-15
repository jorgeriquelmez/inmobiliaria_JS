import { propiedades_alquiler, propiedades_venta } from './data/db.js';
export function getSmokeStatus(propiedad) {
  return propiedad.smoke === false
    ? `
        <p class="text-danger">
          <i class="fas fa-smoking-ban"></i> No se permite fumar
        </p>
      `
    : `
        <p class="text-success">
          <i class="fas fa-smoking"></i> Se permite fumar
        </p>
      `;
}
export function getPetsStatus(propiedad) {
  return propiedad.pets === false
    ? `
        <p class="text-danger">
          <i class="fas fa-ban"></i> No se permiten mascotas
        </p>
      `
    : `
        <p class="text-success">
          <i class="fas fa-paw"></i> Se permiten mascotas
        </p>
      `;
}

export function crearTarjeta(propiedad) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${propiedad.src}"
          class="card-img-top"
           alt="Imagen del departamento"
          >
        <div class="card-body">
          <h5 class="card-title">
            ${propiedad.nombre}
          </h5>
          <p class="card-text">
            ${propiedad.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.habitaciones} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          ${getSmokeStatus(propiedad)}
          ${getPetsStatus(propiedad)}
        </div>
     </div>
     </div>
  `;
}

export function mostrarPropiedades(propiedades, cantidad, contenedor) {
  let html = '';
  for (const propiedad of propiedades) {
    if (cantidad > 0) {
      html += crearTarjeta(propiedad);
      cantidad--;
    }
  }
  contenedor.innerHTML = html;
}

