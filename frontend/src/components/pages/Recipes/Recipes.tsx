import "./Recipes.css"
import Input from '@/components/ui/forms/Input/Input'
import RecipesSection from '@/components/pages/Recipes/components/RecipesSection/RecipesSection'
import RecipesList from '@/components/pages/Recipes/components/RecipesList/RecipesList'

function Recipes() {
  return (
    <div>
      <h1 className="title">AllRecipes</h1>
      <div className="description">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, corporis enim eum exercitationem incid
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
        <Input value="a" placeholder="placeholder"/>
      </div>
      <RecipesSection title="Нові" items={[
        { name: "Pancackes", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn1" },
        { name: "Pancackes2", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn2" },
        { name: "Pancackes3", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn3" },
        { name: "Pancackes4", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn4" },
        { name: "Pancackes5", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn5" },
        { name: "Pancackes6", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn6" },
        { name: "Pancackes7", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn7" },
        { name: "Pancackes8", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn8" },
        { name: "Pancackes9", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn9" }
      ]}/>
      <RecipesSection title="Найкращі" items={[
        { name: "Pancackes", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn" },
        { name: "Pancackes", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn2" }
      ]}/>

      <div className="end-circles">
        <span className="end-circle"></span>
        <span className="end-circle"></span>
        <span className="end-circle"></span>
      </div>

      <RecipesList items={[
        { name: "Pancackes", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn" },
        { name: "Pancackes", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn3" },
        { name: "Pancackes", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn4" },
        { name: "Pancackes", description: "jdgahkkjebgkjlergkj qegqwj qykq kjq43gq34 qwy", recipeId: "pn6" }
      ]}/>
    </div>
  )
}

export default Recipes