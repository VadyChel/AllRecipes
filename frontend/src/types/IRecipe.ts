import RecipeCard from '@/components/pages/Recipes/components/RecipeCard/RecipeCard'

export interface IRecipe {
  id: string
  name: string
  tags: IRecipeTag[]
  description: string
  ingredients: IRecipeIngredient[]
}

export interface IRecipeTag {
  name: string
  color: string
  popularity: number
}

export interface IIngredientAmount {
  number: number
  unit: 'kilograms' | 'grams' | 'litres' | 'millilitres' | 'tbsp' | 'tsp'
}

export interface IRecipeIngredient {
  name: string
  amount: IIngredientAmount
}

export interface IRecipeCardProps {
  name: string
  description: string
  recipeId: string
}

export interface IRecipesSectionProps {
  title: string
  items: IRecipeCardProps[]
}

export interface IRecipesListProps {
  items: IRecipeCardProps[]
}