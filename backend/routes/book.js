var express = require("express");
var router = express.Router();
var {
  createBook,
  getAllBook,
  getOneBook,
  updateBook,
  Delete,
} = require("../controllers/book");

/* GET book listing. */
router.post("/", createBook);
router.delete("/:id", Delete);
router.get("/:id", getOneBook);
router.put("/:id", updateBook);
router.get("/", getAllBook);

module.exports = router;
