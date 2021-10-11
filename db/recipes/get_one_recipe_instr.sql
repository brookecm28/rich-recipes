-- SELECT * FROM rr_recipes r
-- JOIN rr_ingredients ing ON r.recipe_id = ing.rr_recipe_id
-- JOIN rr_instructions ins ON r.recipe_id = ins.rr_recipe_id
-- WHERE r.recipe_id = $1;

SELECT * FROM rr_recipes r
JOIN rr_instructions ins ON r.recipe_id = ins.rr_recipe_id
WHERE r.recipe_id = $1
ORDER BY ins.instructions_id ASC;