import React from 'react'
import "./RecipeList.css"
import { useRecipes } from '../../contexts/RecipesContext'
import RecipeCard from '../RecipeCard/RecipeCard'

const RecipeList = () => {
    const {recipes} = useRecipes()

  return (
    <div className="recipe-list">
        {
            recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))
        }
    </div>
  )
}

export default RecipeList