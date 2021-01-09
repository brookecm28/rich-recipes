const { response } = require("express")

module.exports = {
    newRecipe: async (req, res) => {
        const db = await req.app.get('db')
        const {title, ingredients, instructions, photo} = req.body
        
        //checking to make sure someone is logged in before sending the recipe to the DB
        if (req.session.user) {
            const {id} = req.session.user
            let recipeAdd
            let ingredientAdd
            let instructionAdd
            try {
            //send the recipe to the db
            recipeAdd = await db.recipes.add_recipe([id, title, photo])
            //grab the newly assigned recipe_id
            let rrId = recipeAdd[0].recipe_id 
            //send the ingredients to the db with the correct recipe_id
            // ingredientAdd = await db.recipes.add_ingredients([rrId, ingredients])
            // console.log(ingredientAdd)
            ingredients.forEach(async (ingObj) => {
                await db.recipes.add_ingredients({
                    recipe_id: rrId,
                    quantity: ingObj.quantity,
                    measurement: ingObj.measurement,
                    ingredient: ingObj.ingredient
                })
            })
            //send the instructions to the db  with the correct recipe_id
            instructionAdd = await db.recipes.add_instructions([rrId, instructions])
            } catch(err) {
                console.log(err)
            }
            //combine results so they can all be sent back in the response
            let complete = {
                recipe: recipeAdd[0].data,
                ingredients: ingredientAdd[0].data,
                instructions: instructionAdd[0].data
            }
            res.status(200).send(complete)
            // .catch(err => console.log(err))
        } else {
            return res.status(403).send('User not logged in.')
        }
    }
} 

// destructure the response, create object after 3rd request with 3 props: recipe, ingr, instr; value will be recipeAdd.data, ingredientAdd.data, instructionAdd.data; then send this obj back