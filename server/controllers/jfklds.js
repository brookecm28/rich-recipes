
// const req = {
//     body: {
//     "title": "Purple PopTarts",
//     "ingredients": [{"quantity": "2", "measurement": "tsp", "ingredient": "vanilla"}, {"quantity": "1", "measurement": "can", "ingredient": "icing"}],
//     "instructions": [{"step": "1", "instruction": "preheat oven"}, {"step": "2", "instruction": "combine ingredients"}],
//     "photo": "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2016/09/ube-purple-food-social-092616.jpg"
//     }
// }

// const {ingredients, instructions} = req.body;

// const recipeID = 25; // from the return of running await db.add_recipe

// ingredients.forEach((ingObj) => {
//     await db.add_ingredients({
//         recipe_id: recipeID
//         quantity: ingObj.quantity,
//         measurement: ingObj.measurement,
//         tsp: ingObj.tsp,
//         ingredient: ingObj.ingredient
//     })
// })