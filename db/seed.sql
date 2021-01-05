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
    quanity varchar(150),
    ingredient varchar(250)
);

CREATE TABLE rr_instructions (
    instructions_id SERIAL PRIMARY KEY,
    rr_recipe_id int,
    step_number int,
    instruction varchar
);