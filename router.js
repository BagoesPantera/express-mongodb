const { Router } = require("express");
const JakartaController = require("./controllers/jakartaController");
const AllController = require("./controllers/allController");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Server connected" });
});

router.get("/find", AllController.findAll)
router.get("/findone", AllController.findOne)
router.post("/insert", AllController.add)
router.post("/update", AllController.update)
router.delete("/delete", AllController.delete)

module.exports = router;