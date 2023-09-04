import Recipe from './Recipe.js'
import { recipes } from './data.js'

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} />
      ))}
    </div>
  )
}
