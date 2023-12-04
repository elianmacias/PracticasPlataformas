const { Router } = require("express");
const { JugadorController } = require("../controllers");


const router = Router();

router.get("/", JugadorController.GetJugadors);
router.get("/:id", JugadorController.GetJugador);
router.post("/", JugadorController.SaveJugador);
router.put("/:id", JugadorController.EditJugador);
router.delete("/:id", JugadorController.DeleteJugador);


module.exports = router;