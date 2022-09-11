import { IRecipeTag } from '@/types/IRecipe'

export interface IAllRecipesQueryArgs {
  limit: number
}

export interface ISearchQueryArgs {
  name: string
  tags: IRecipeTag[]
}
