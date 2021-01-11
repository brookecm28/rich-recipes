DELETE
FROM rr_recipes
WHERE recipe_id = $1;

DELETE
FROM rr_ingredients
WHERE rr_recipe_id = $1;

DELETE
FROM rr_instructions
WHERE rr_recipe_id = $1;