import UserHeader from '../Header/UserHeader'
import '../Recipes/NewRecipe.css'

function NewRecipe () {
    return (
        <div>
            <UserHeader />
            <div className='body'>new recipe!</div>
        </div>
    )
}

export default NewRecipe