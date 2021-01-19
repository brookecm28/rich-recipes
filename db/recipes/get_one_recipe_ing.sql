SELECT * FROM rr_recipes r
JOIN rr_ingredients ing ON r.recipe_id = ing.rr_recipe_id
WHERE r.recipe_id = $1
ORDER BY ing.ingredients_id ASC;