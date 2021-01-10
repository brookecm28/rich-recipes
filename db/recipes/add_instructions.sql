INSERT INTO rr_instructions
(rr_recipe_id, step_number, instruction)
VALUES
(${recipe_id}, ${step_number}, ${instruction});

-- DECLARE @@counter := 0;
-- WHILE @@counter < $2.length

-- BEGIN;
--     INSERT INTO rr_instructions
--     (rr_recipe_id, step_number, instruction)
--     VALUES
--     ($1, $2.step, $2.instruction);
--     SET @@counter = @@counter + 1;
-- END;

-- returning *;