import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { index } from '@/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersLayout from '@/components/layouts/UsersLayout/UsersLayout'
import User from '@/components/pages/User/User'
import RecipesLayout from '@/components/layouts/RecipesLayout/RecipesLayout'
import Recipes from '@/components/pages/Recipes/Recipes'
import RecipesSearch from '@/components/pages/RecipesSearch/RecipesSearch'
import Recipe from '@/components/pages/Recipe/Recipe'
import NoMatch from '@/components/layouts/NoMatch/NoMatch'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={index}>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<UsersLayout />}>
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path="/" element={<RecipesLayout />}>
            <Route index element={<Recipes />} />
            <Route path="search" element={<RecipesSearch />} />
            <Route path=":recipeId" element={<Recipe />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
