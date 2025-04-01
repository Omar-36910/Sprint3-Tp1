//Implementación CRUD de SuperHero
import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';
//import mongoose from "mongoose";

class SuperHeroRepository extends IRepository {

    async obtenerTodos() {
        return await SuperHero.find({});
    };

      //    Crear Nuevo superHeroe    //
      async crearSuperheroe(datosSuperheroe) {

        /* SuperHero.create(datosSuperheroe);
        const superheroeCreado = await SuperHero.find({ nombreSuperHeroe: datosSuperheroe.nombreSuperHeroe });

        console.log(`Superheroe: ${superheroeCreado}`);
        return superheroeCreado; */

        const nuevoHeroe = new SuperHero(datosSuperheroe);
        console.log(nuevoHeroe);
        return await nuevoHeroe.save();

    }

    //    Actualizar superHeroe    //
    async actualizarHeroe(id, datosActualizar) {
        
        /* updateOne() o updateMany() devuelven el resultado de la operación pero no el documento actualizado
        y findByIdAndUpdate() devuelve el documento modificado */

        //  { new: true } con este parámetro me devuelve el documento con los datos nuevos ya modificados
        //  Sin dicho parámetro se modifica el documento en la BD pero me devuelve el obj. literal con los datos sin modificar
        const heroeActualizado = await SuperHero.findByIdAndUpdate(id, datosActualizar, { new: true });
        console.log(heroeActualizado);
        return heroeActualizado;
        
    }

    //    Eliminar superHeroe por ID     //
    async eliminarPorId(id){
        const heroeEliminado = await SuperHero.findByIdAndDelete(id);
        console.log(heroeEliminado);
        return heroeEliminado;
    }

    //    Eliminar superHeroe por Nombre    //
    async eliminarPorNombre(nombre){
        // findByIdAndDelete() y findOneAndDelete() también devuelven el documento modificado
        const heroeEliminado = SuperHero.findOneAndDelete({nombreSuperHeroe: nombre});
        console.log(heroeEliminado);
        return heroeEliminado;
    }
}

export default new SuperHeroRepository();