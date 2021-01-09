INSERT INTO rr_recipes
(rr_user_id, title, photo)
VALUES
($1, $2, $3)
returning *;