const { response } = require("express")

module.exports = {
    newRecipe: async (req, res) => {
        const db = await req.app.get('db')
        const {title, ingredients, instructions, photo} = req.body
        
        //checking to make sure someone is logged in before sending the recipe to the DB
        if (req.session.user) {
            const {id} = req.session.user
            let recipeAdd
            try {
            //send the recipe to the db
            recipeAdd = await db.recipes.add_recipe([id, title, photo])
            //grab the newly assigned recipe_id
            let rrId = recipeAdd[0].recipe_id 
            //send the ingredients to the db with the correct recipe_id
            ingredients.forEach(async (ingObj) => {
                await db.recipes.add_ingredients({
                    recipe_id: rrId,
                    quantity: ingObj.quantity,
                    measurement: ingObj.measurement,
                    ingredient: ingObj.ingredient
                })
            })
            //send the instructions to the db  with the correct recipe_id
            instructions.forEach(async (instrObj) => {
                await db.recipes.add_instructions({
                    recipe_id: rrId,
                    step_number: instrObj.step,
                    instruction: instrObj.instruction
                })
            })
            // instructionAdd = await db.recipes.add_instructions([rrId, instructions])
            } catch(err) {
                console.log(err)
            }
            //combine results so they can all be sent back in the response
            res.status(200).send(recipeAdd[0])
        //if not logged in    
        } else {
            return res.status(403).send('User not logged in.')
        }
    }
} 