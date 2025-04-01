// Servicios de SuperHero
import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodos();
  }
  
 //    Crear Nuevo superHeroe    //
export async function crearNuevoSuperheroe(datosNuevoSuperheroe) {
  return await SuperHeroRepository.crearSuperheroe(datosNuevoSuperheroe);
}

//    Actualizar superHeroe    //
export async function actualizarSuperheroe(id, datosActualizarSuperheroe) {
  return await SuperHeroRepository.actualizarHeroe(id, datosActualizarSuperheroe);    
}

//    Eliminar superHeroe por ID     //
export async function eliminarSuperheroePorId(id) {
  return await SuperHeroRepository.eliminarPorId(id);
}

//    Eliminar superHeroe por Nombre    //
export async function eliminarSuperheroePorNombre(nombre) {
  return await SuperHeroRepository.eliminarPorNombre(nombre);
}