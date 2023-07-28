import React from 'react'
import './RecipeCard.css'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
  return (
    <Link to={"/recipe/" + recipe.id}>
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