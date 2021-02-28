var express = require("express");
var router = express.Router();
var {
  createBook,
  getAllBook,
  getOneBook,
  updateBook,
  Delete,
  AllCount,
} = require("../controllers/book");

/* GET book listing. */
router.post("/", createBook);
router.delete("/:id", Delete);
router.get("/:id", getOneBook);
router.put("/:id", updateBook);
router.get("/", getAllBook);
router.get("/count/:type", AllCount);

module.exports = router;
