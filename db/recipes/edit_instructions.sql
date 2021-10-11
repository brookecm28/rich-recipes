UPDATE rr_instructions
SET instruction = ${instruction}
WHERE rr_recipe_id = ${recipe_id} and instructions_ic = ${instructions_id};