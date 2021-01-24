
// const req = {
//     body: {
//     "title": "Purple PopTarts",
//     "ingredients": [{"quantity": "2", "measurement": "tsp", "ingredient": "vanilla"}, {"quantity": "1", "measurement": "can", "ingredient": "icing"}],
//     "instructions": [{"step": "1", "instruction": "preheat oven"}, {"step": "2", "instruction": "combine ingredients"}],
//     "photo": "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2016/09/ube-purple-food-social-092616.jpg"
//     }
// }

// const {ingredients, instructions} = req.body;

// const recipeID = 25; // from the return of running await db.add_recipe

// ingredients.forEach((ingObj) => {
//     await db.add_ingredients({
//         recipe_id: recipeID
//         quantity: ingObj.quantity,
//         measurement: ingObj.measurement,
//         tsp: ingObj.tsp,
//         ingredient: ingObj.ingredient
//     })
// })
//-------------

//DROPDOWN MENU FOR MEASUREMENTS
/* <div class='dropdown'>
                    <button onClick={this.handleClick} class='dropbtn'>Select Measurement</button>
                    <div class='dropdown-content' >
                        <a>bag(s)</a>
                        <a>bottle(s)</a>
                        <a>box(es)</a>
                        <a>can(s)</a>
                        <a>carton(s)</a>
                        <a>cup(s)</a>
                        <a>dash(s)</a>
                        <a>gallon(s)</a>
                        <a>gram(s)</a>
                        <a>jar(s)</a>
                        <a>liter(s)</a>
                        <a>milliliter(s)</a>
                        <a>ounce(s)</a>
                        <a>pinch(es)</a>
                        <a>pint(s)</a>
                        <a>pound(s)</a>                     
                        <a>packet(s)</a>
                        <a>quart(s)</a>
                        <a>roll(s)</a>
                        <a>sheet(s)</a>
                        <a>tablespoon(s)</a>
                        <a>teaspoon(s)</a>
                        <a>tube(s)</a>
                    </div>
                </div> */

// ------------------------------BEFORE ADDED ASC ORDER TO SQL     

            // let instrMinArr = []
// let instrArr = []
// for(let i = 0; i < this.props.recipes[0].length; i++) {
//     instrMinArr.push(this.props.recipes[0][i].instructions_id)
// }
// let instrMin = Math.min(...instrMinArr)
// console.log(instrMin)
// console.log(this.props.recipes[0])
// for (let i = 0; i < this.props.recipes[0].length; i++) {
//     console.log(this.props.recipes[0][i])
//     console.log(instrMin)
//     for (let j = 0; j < this.props.recipes[0].length; j++) {
//         console.log(this.props.recipes[0][j].instructions_id)
//         if (this.props.recipes[0][j].instructions_id === instrMin) {
//             instrArr.push({
//                 step_number: this.props.recipes[0][j].step_number,
//                 instruction: this.props.recipes[0][j].instruction 
//             })
//             console.log(instrArr)
//         }
//     }
    
//     instrMin++    
// } 

// ---------------------------LandingHeader CSS
// .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 110px;
//     width: 100vw;
//     background-color: #faf6f0;
// }

// .left-header {
//     display: flex;
//     background-color: #faf6f0;
//     align-items: center;
// }

// .lobster-link {
//     background-color: #faf6f0;
// }

// .login-link {
//     background-color: #faf6f0;
// }

// .register-link {
//     background-color: #faf6f0;
// }

// nav {
//     background-color: #faf6f0;
//     display: flex;
//     justify-content: center;
//     margin-right: 10px;
// }

// .logo {
//     height: 100px;
//     margin-left: 50px;
//     margin-right: 20px;
//     background-color: #faf6f0;
    
// }

// .title {
//     background-color: #faf6f0;
//     color: #1c7ad9;
//     font-family: 'Lora', serif;
//     font-weight: lighter;
//     margin-top: 29px;
// }

// .btn {
//     background-color: #faf6f0;
//     color: #1c7ad9;
//     border: 2px solid #1c7ad9;
//     font-size: 18pt;
//     font-family: 'Lora', serif;
//     width: 100px; 
//     padding-bottom: 10px;
// }

// .header-btn {
//     border: 2px solid #faf6f0;
    
// }