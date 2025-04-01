import express from "express";
import {
  obtenerTodosLosSuperheroesController,
  crearNuevoSuperheroeController,
  actualizarSuperheroeController,
  eliminarSuperheroePorIdController,
  eliminarSuperheroePorNombreController
} from "../controllers/superheroesController.mjs";

const router = express.Router();

// Rutas para obtener (Read) los datos de los superheroes
router.get("/heroes", obtenerTodosLosSuperheroesController);

router.post('/heroes/crear', crearNuevoSuperheroeController);
router.put('/heroes/actualizar/:id', actualizarSuperheroeController);
router.delete('/heroes/eliminar/id/:id', eliminarSuperheroePorIdController);
router.delete('/heroes/eliminar/nombre/:nombre', eliminarSuperheroePorNombreController);
export default router;