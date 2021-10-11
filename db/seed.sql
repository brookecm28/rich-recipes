CREATE TABLE rr_users (
    id SERIAL PRIMARY KEY,
    first_name varchar(200),
    last_name varchar(200),
    email varchar(200),
    hash varchar,
    created_at timestamp
);

CREATE TABLE rr_recipes (
    recipe_id SERIAL PRIMARY KEY,
    rr_user_id int,
    title varchar,
    photo varchar
);

CREATE TABLE rr_ingredients (
    ingredients_id SERIAL PRIMARY KEY,
    rr_recipe_id int,
    quantity varchar(150),
    measurement varchar(200),
    ingredient varchar(250)
);

CREATE TABLE rr_instructions (
    instructions_id SERIAL PRIMARY KEY,
    rr_recipe_id int,
    instruction TEXT []
);

-- ^^ this table is updated in pgweb, so now need to update the functions re this table in server controller

-- CREATE TABLE rr_stage (
--     recipe_id serial primary key
-- )