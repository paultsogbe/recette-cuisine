import React from 'react'
import './RecipeCard.css'
import { Link } from 'react-router-dom'
// ICI C'EST LA CARTE DES RECETTES . IL DOIT ALLER SUR LA PAGE DE RECETTE PAR link to
const RecipeCard = ({recipe}) => {
  return (
    <Link to={"/recipe/" + recipe.id}> //PAGE DE RECETTE
        <div className="recipe-card">
            <div className="photo">
                <img src={recipe.photoUrl} alt="" />
            </div>
            <h2>{recipe.title}</h2>
            <p>{recipe.duration} min</p>
        </div>
    </Link>
  )
}

export default RecipeCard