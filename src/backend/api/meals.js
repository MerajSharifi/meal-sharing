const express = require("express");
const router = express.Router();
const knex = require("../database");


router.get("/", async (request, response) => {
  try{
const mealWithDescription = await knex("Meal").select("*")
response.json(mealWithDescription);
  }catch(error){
    console.log("error", error)
  }
});



router.get("/:id", async (req, res) => {
  try {
    const mealId = req.params.id;
    const meal = await knex("Meal").where({ id: mealId }).first();
    if (!meal) {
      return res.status(404).json({ error: 'Meal not found' });
    }
    res.json(meal);
  } catch (error) {
    throw error;
  }
});

module.exports = router;