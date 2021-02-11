const { response } = require("express")

module.exports = {
    newRecipe: async (req, res) => {
        const db = await req.app.get('db')
        const { title, ingredients, instructions, photo } = req.body

        //checking to make sure someone is logged in before sending the recipe to the DB
        if (req.session.user) {
            const { id } = req.session.user
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
            } catch (err) {
                console.log(err)
            }
            res.status(200).send(recipeAdd[0])
            //if not logged in    
        } else {
            return res.status(403).send('User not logged in.')
        }
    },
    getMyRecipes: async (req, res) => {
        const db = await req.app.get('db')
        console.log(req.session.user)
        console.log('something else')
        if (req.session.user) {
            const { id } = req.session.user
            db.recipes.get_all_recipes(id)
                .then(recipes => {
                    res.status(200).send(recipes)
                })
                .catch(err => console.log(err))
        } else {
            res.status(403).send('User not logged in.')
        }
    },
    getOneRecipe: async (req, res) => {
        const db = await req.app.get('db')
        const { recipe_id } = req.params
        const { id } = req.session.user

        if (req.session.user) {
            try {
                recipeInstr = await db.recipes.get_one_recipe_instr(recipe_id)
                recipeIng = await db.recipes.get_one_recipe_ing(recipe_id)
                if (recipeInstr[0].rr_user_id !== id) {
                    res.status(401).send('You do not have access to this recipe.')
                } else {
                    res.status(200).send([recipeInstr, recipeIng])
                }
            } catch (err) { console.log(err) }
        } else {
            res.status(403).send('User not logged in.')
        }
    },
    updateRecipe: async (req, res) => {
        const db = await req.app.get('db')
        const { recipe_id } = req.params
        const { title, instructions, photo } = req.body
        let recipe;
        try {
            recipe = await db.recipes.edit_recipe([recipe_id, title, photo])
            instructions.forEach(async (instrObj) => {
                await db.recipes.edit_instructions({
                    recipe_id: recipe_id,
                    step_number: instrObj.step,
                    instruction: instrObj.instruction
                })
            }) 
        } catch (err) { console.log(err) }
        res.status(200).send(recipe)
    },
    deleteRecipe: async (req, res) => {
        const db = await req.app.get('db')
        const { recipe_id } = req.params
        if (req.session.user) {
            db.recipes.delete_recipe(recipe_id)
                .then(_ => res.sendStatus(200)).catch(err => console.log(err))
        } else {
            res.status(403).send('User not logged in.')
        }
    }
} 