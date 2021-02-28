var Book = require("../models/book");
var Count = require("../models/count");

module.exports = {
  async createBook(req, res) {
    try {
      const result = await Book.create({ ...req.body });
      const count = await Count.findOne({ type: "create" });
      if (count) {
        count.count = count.count + 1;
        await count.save();
      } else {
        const count = await new Count({ count: 1, type: "create" });
        count.save();
      }
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
      const count = await Count.findOne({ type: "update" });
      if (count) {
        count.count = count.count + 1;
        await count.save();
      } else {
        const count = await new Count({ count: 1, type: "update" });
        count.save();
      }
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
  async AllCount(req, res) {
    try {
      const type = req.params.type;
      const result = await Count.findOne({ type });
      res.json({ result });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
