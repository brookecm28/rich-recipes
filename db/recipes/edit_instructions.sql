UPDATE rr_instructions
SET instruction = ${instruction}
WHERE rr_recipe_id = ${recipe_id} and step_number = ${step_number};