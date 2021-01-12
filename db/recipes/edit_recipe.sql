UPDATE rr_recipes
SET title = $2
WHERE recipe_id = $1;

UPDATE rr_recipes
SET photo = $3
WHERE recipe_id = $1
returning *;