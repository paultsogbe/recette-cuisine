import React from 'react'
import "./RecipeList.css"
import { useRecipes } from '../../contexts/RecipesContext'
import RecipeCard from '../RecipeCard/RecipeCard'
// ICI, C'EST LA LISTE DES RECETTES
const RecipeList = () => {
    const {recipes} = useRecipes() // TJRS ON FAIS À LA PAGE RECETTE(COMPOSANT)

  return (
    <div className="recipe-list">
        { // ET C'EST LE PAGE RECETTE(COMPOSANT)QUI VA VENIRE ICI POUR AFFICHER TTES LES LISTES
            recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} /> // 
            ))
        }
    </div>
  )
}

export default RecipeList