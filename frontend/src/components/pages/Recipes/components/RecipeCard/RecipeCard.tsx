import "./RecipeCard.css"
import { IRecipeCardProps } from '@/types/IRecipe'
import Spacer from '@/components/ui/extras/Spacer/Spacer'
import { FaEye } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function RecipeCard({ name, description, recipeId }: IRecipeCardProps) {
  const [showIngredients, setShowIngredients] = useState(false)

  return (
    <div className="recipe-card">
      <Link to={`/${recipeId}`}>
        <img src="https://via.placeholder.com/300x200" alt="" className="recipe-image"/>
        <h3 className="recipe-name">{name}</h3>
        <div style={{display: "flex"}}>
          <span className="recipe-description">{description}</span>
          <Spacer/>
          <div
            className="recipe-ingredients-icon"
            onMouseEnter={() => setShowIngredients(true)}
            onMouseLeave={() => setShowIngredients(false)}
          >
            <FaEye/>
            {
              showIngredients ? (
                <div className="recipe-ingredients">
                  <h3 className="recipe-ingredients-title">Інгредієнти</h3>
                </div>
              ) : null
            }
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCard