const { Router } = require("express");
const { EquipoController } = require("../controllers");


const router = Router();

router.get("/", EquipoController.GetEquipos);
router.get("/:id", EquipoController.GetEquipo);
router.post("/", EquipoController.SaveEquipo);
router.put("/:id", EquipoController.EditEquipo);
router.delete("/:id", EquipoController.DeleteEquipo);


module.exports = router;