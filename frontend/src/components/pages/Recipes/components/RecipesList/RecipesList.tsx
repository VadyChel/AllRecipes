import "./RecipesList.css"
import { IRecipesListProps } from '@/types/IRecipe'
import RecipeCard from '@/components/pages/Recipes/components/RecipeCard/RecipeCard'

function RecipesList({ items }: IRecipesListProps) {
  return (
    <div style={{margin: "0 auto", display: "flex"}}>
      <div className="recipes-list">
        {items.map((el) => (
          <RecipeCard key={el.recipeId} description={el.description} name={el.name} recipeId={el.recipeId}/>
        ))}
      </div>
    </div>
  )
}

export default RecipesList