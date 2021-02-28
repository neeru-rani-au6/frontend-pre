var Book = require("../models/book");

module.exports = {
  async createBook(req, res) {
    try {
      const result = await Book.create({ ...req.body });
      return res.json({ success: true, book: result });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
  async getAllBook(req, res) {
    try {
      var result = await Book.find();
      return res.json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
  async getOneBook(req, res) {
    try {
      const result = await Book.findOne({ _id: req.params.id });
      return res.json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
  async updateBook(req, res) {
    try {
      console.log(req.params.id);
      await Book.updateOne({ _id: req.params.id }, req.body);
      return res.json(req.body);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
  async Delete(req, res) {
    try {
      console.log(req.params.id);
      const result = await Book.deleteOne({ _id: req.params.id });
      res.json({ message: "Book deleted", id: req.params.id });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
};
