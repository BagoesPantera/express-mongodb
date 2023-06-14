const { Router } = require("express");
const JakartaController = require("./controllers/jakartaController")

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Server connected" });
});

router.get("/find", JakartaController.findAll)
router.post("/insert", JakartaController.add)
router.post("/update", JakartaController.update)

module.exports = router;