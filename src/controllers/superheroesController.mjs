// Controlador para superhéroes
import {
    obtenerTodosLosSuperheroes,
    crearNuevoSuperheroe,
    actualizarSuperheroe,
    eliminarSuperheroePorId,
    eliminarSuperheroePorNombre
}
    from '../services/superheroesService.mjs';

import { renderizarSuperheroe, renderizarListaSuperheroes }
    from '../views/responseView.mjs';

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superheroes', error: error.message });
    }
}

export async function crearNuevoSuperheroeController(req, res) {
    try {

        const datos = req.body;

        const superheroeCreado = await crearNuevoSuperheroe(datos);
        if (!superheroeCreado) {
            return res.status(404).send({ mensaje: 'Superhéroe nuevo no encontrado' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroeCreado);
        res.status(200).json(superheroeFormateado);

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al crear el nuevo superhéroe', error: error.message });
    }

}

export async function actualizarSuperheroeController(req, res) {
    try {

        const { id } = req.params;
        const datosActualizar = req.body;

        console.log(id);
        console.log(typeof (id));
        const superheroeActualizado = await actualizarSuperheroe(id, datosActualizar);

        if (!superheroeActualizado) {
            return res.status(404).send({ mensaje: 'Superhéroe a actualizar no encontrado.' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroeActualizado);
        res.status(200).json(superheroeFormateado)

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al actualizar el superhéroe', error: error.message });
    }
}

export async function eliminarSuperheroePorIdController(req, res) {
    try {

        const { id } = req.params;

        const superheroeEliminado = await eliminarSuperheroePorId(id);
        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'Superhéroe a eliminar por ID no encontrado.' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
        res.status(200).json(superheroeFormateado);

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superhéroe por ID', error: error.message });
    }
}

export async function eliminarSuperheroePorNombreController(req, res) {
    try {

        const { nombre } = req.params;

        const superheroeEliminado = await eliminarSuperheroePorNombre(nombre);
        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'Superhéroe a eliminar por nombre no encontrado.' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
        res.status(200).json(superheroeFormateado);

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superhéroe por nombre', error: error.message });
    }
}