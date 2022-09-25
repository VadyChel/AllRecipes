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
    const showItemsCopy = [...showItems]
    const hiddenItemsCopy = [...hiddenItems]
    const lastShowItem = showItems[showItems.length-1]
    const lastHiddenItem = hiddenItems[hiddenItems.length-1]
    showItemsCopy.pop()
    hiddenItemsCopy.pop()
    hiddenItemsCopy.unshift(lastShowItem)
    showItemsCopy.unshift(lastHiddenItem)
    setShowItems(showItemsCopy)
    setHiddenItems(hiddenItemsCopy)
  }

  function itemsRight() {
    const showItemsCopy = [...showItems]
    const hiddenItemsCopy = [...hiddenItems]
    const firstShowItem = showItems[0]
    const firstHiddenItem = hiddenItems[0]
    showItemsCopy.shift()
    hiddenItemsCopy.shift()
    hiddenItemsCopy.push(firstShowItem)
    showItemsCopy.push(firstHiddenItem)
    setShowItems(showItemsCopy)
    setHiddenItems(hiddenItemsCopy)
  }

  return (
    <div style={{margin: '0 5%'}}>
      <h2>{title}</h2>
      <div style={{margin: "1% 0"}}>
        <Divider/>
      </div>
      <div style={{display: "flex"}}>
        <div className="recipes-section-arrow-container">
          <div className="recipes-section-arrow">
            {showItems.length >= 3 ? <FaArrowLeft onClick={() => itemsLeft()}/> : null}
          </div>
        </div>
        <div className="recipes-section">
          {showItems.map((el) => (
            <RecipeCard key={el.recipeId} description={el.description} name={el.name} recipeId={el.recipeId}/>
          ))}
        </div>
        <div className="recipes-section-arrow-container">
          <div className="recipes-section-arrow">
            {showItems.length >= 3 ? <FaArrowRight onClick={() => itemsRight()}/> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipesSection