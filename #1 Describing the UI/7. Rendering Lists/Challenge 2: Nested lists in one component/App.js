import { recipes } from './data.js'

const recipeItems = recipes.map((recipe) => (
  <div key={recipe.id}>
    <h2>{recipe.name}</h2>
    <ul>
      {recipe.ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
))

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipeItems}
    </div>
  )
}
