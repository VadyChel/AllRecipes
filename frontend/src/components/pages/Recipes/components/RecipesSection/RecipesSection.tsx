import "./RecipesSection.css"
import Divider from '@/components/ui/extras/Divider/Divider'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IRecipesSectionProps } from '@/types/IRecipe'
import RecipeCard from '@/components/pages/Recipes/components/RecipeCard/RecipeCard'
import { useState } from 'react'

function RecipesSection({ title, items }: IRecipesSectionProps) {
  const [showItems, setShowItems] = useState(items.slice(0, 3))
  const [hiddenItems, setHiddenItems] = useState(items.slice(3))

  function itemsLeft() {
    const lastShowItem = showItems[showItems.length-1]
    const lastHiddenItem = hiddenItems[hiddenItems.length-1]
    showItems.pop()
    hiddenItems.pop()
    hiddenItems.unshift(lastShowItem)
    showItems.unshift(lastHiddenItem)
    setShowItems(showItems)
    setHiddenItems(hiddenItems)
    console.log(showItems)
  }

  function itemsRight() {

  }

  return (
    <div style={{margin: '0 5%'}}>
      <h2>{title}</h2>
      <div style={{margin: "1% 0"}}>
        <Divider/>
      </div>
      <div style={{display: "flex"}}>
        <div className="recipes-section-arrow-container">
          <FaArrowLeft onClick={() => itemsLeft()}/>
        </div>
        <div className="recipes-section">
          {showItems.map((el) => (
            <RecipeCard key={el.recipeId} description={el.description} name={el.name} recipeId={el.recipeId}/>
          ))}
        </div>
        <div className="recipes-section-arrow-container">
          <FaArrowRight/>
        </div>
      </div>
    </div>
  )
}

// @ts-ignore
export default RecipesSection