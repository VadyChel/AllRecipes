import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { IRecipe } from '@/types/IRecipe'
import { IUser } from '@/types/IUser'
import { IAllRecipesQueryArgs, ISearchQueryArgs } from '@/types/IQuery'
import { API_URL } from '@/helpers/constants/api'


export const recipesAPI = createApi({
  reducerPath: 'recipesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getRecipeById: build.query<IRecipe, string>({
      query: recipeId => `/recipes/${recipeId}`
    }),
    getAllRecipes: build.query<IRecipe[], IAllRecipesQueryArgs>({
      query: ({ limit }) => `/recipes?limit=${limit}`
    }),
    getRecipesBySearch: build.query<IRecipe[], ISearchQueryArgs>({
      query: ({ name, tags }) => `/recipes/search?name=${name}&tags=${tags}`
    }),
    getUserRecipes: build.query<IRecipe[], number>({
      query: userId => `/users/${userId}/recipes`
    }),
    getUserById: build.query<IUser, number>({
      query: userId => `/users/${userId}`
    })
  }),
});

// export const {
//   useGetAllRecipesQuery,
//   useGetRecipesBySearchQuery,
//   useGetUserRecipesQuery,
//   useGetRecipeByIdQuery,
//   useGetUserByIdQuery
// } = recipesAPI;

export const {
  getAllRecipes,
  getRecipesBySearch,
  getUserRecipes,
  getRecipeById,
  getUserById
} = recipesAPI.endpoints;