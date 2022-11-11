const { Router } = require("express");
const { Plants, DailyUser } = require("../db");

const Daily = Router();

Daily.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      let diario = await DailyUser.findByPk(id);
      return res.status(200).json(diario);
    } else {
      return res.status(400).send("No se encontro la id");
    }
  } catch (error) {
    res.status(400).send(error)
  }
});

module.exports = Daily;
