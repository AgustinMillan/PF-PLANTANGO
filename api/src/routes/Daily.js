const { Router } = require("express");
const { DailyUser } = require("../db");

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
    res.status(400).send(error);
  }
});

Daily.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {title , body} = req.body;

    if(!id){
      return res.status(400).send("No se encontro la id");
    }else {
        await DailyUser.destroy({ where: { codDaily: id }, force: true });
        await DailyUser.create({codDaily:id,title:title, cont:body})
        return res.status(201).send("Los datos se cambiaron exitosamente")
    }
});

module.exports = Daily;
