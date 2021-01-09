INSERT INTO rr_ingredients
(rr_recipe_id, quantity, measurement, ingredient)
VALUES
(${recipe_id}, ${quantity}, ${measurement}, ${ingredient});

-- DECLARE counter = 0;
-- BEGIN
-- WHILE (counter < $2.length) LOOP
--     INSERT INTO rr_ingredients
--     (rr_recipe_id, quantity, measurement, ingredient)
--     VALUES
--     ($1, $2.quantity, $2.measurement, $2.ingredient)
--     SET counter = counter + 1
-- END LOOP
-- returning *;

-- DECLARE @counter INT;
-- DECLARE @@counter := 0;

-- WHILE @@counter < $2.length

-- BEGIN;
--     INSERT INTO rr_ingredients
--     (rr_recipe_id, quantity, measurement, ingredient)
--     VALUES
--     ($1, $2.quantity, $2.measurement, $2.ingredient);
--     SET @@counter = @@counter + 1;
-- END;

-- returning *;