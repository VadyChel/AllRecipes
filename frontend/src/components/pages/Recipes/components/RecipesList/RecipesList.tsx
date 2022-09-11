import "./RecipesList.css"
import { IRecipesListProps } from '@/types/IRecipe'
import RecipeCard from '@/components/pages/Recipes/components/RecipeCard/RecipeCard'

function RecipesList({ items }: IRecipesListProps) {
  return (
    <div className="recipes-list">
      {items.map((el) => (
        <RecipeCard key={el.recipeId} description={el.description} name={el.name} recipeId={el.recipeId}/>
      ))}

    </div>
  )
}

export default RecipesList