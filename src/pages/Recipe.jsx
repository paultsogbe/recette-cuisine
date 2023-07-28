import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipes } from "../contexts/RecipesContext";
// C'EST SUR CETTE PAGE Q'ON VA AFFICHER TOUS LES INGREDIENTS ET LES PORTION
const Recipe = () => {
	const { id } = useParams(); // ICI ON VA AFFICHER LA RECETTE PAR SON ID 
	const { recipes } = useRecipes();

	const [recipe, setRecipe] = useState(
		recipes.filter((obj) => obj.id === Number(id))[0] // UNE  METHODE POUR PARCOURIR UN TABLEAU D'OBJET AVEC ID
	);

	return (
		<div>
			<h1>{recipe.title}</h1>
			<img src={recipe.photoUrl} alt="" style={{ maxWidth: "400px" }} />
			<RecipeIngredients
				ingredients={recipe.ingredients}
				portions={recipe.portions}
			/>
		</div>
	);
};

export default Recipe;

const RecipeIngredients = ({ ingredients, portions }) => {
	const [inputPortions, setInputPortions] = useState(portions);// TABLEAU POU PORTION
	const [ingredientsUpdate, setIngredientUpdate] = useState(ingredients); // TABLEAU POUR CHANGER INGREDIENT DE PORTION

	const handleChange = (e) => {
		setInputPortions(e.target.value); //  CHANGE PORTION

    const ingredientsTemp = []
    ingredients.forEach((ingredient) => {
      const ingredientUpdate = {...ingredient} // NOUVEAU TABLEAU
      ingredientUpdate.quantity = Math.round(ingredient.quantity / portions * e.target.value) // UNE METHODE POUR CALCULER QUANTITÉ D'INGREDIENT À CHANGER
      ingredientsTemp.push(ingredientUpdate)
    })
    setIngredientUpdate(ingredientsTemp)
	};

	return (
		<div>
			{ingredientsUpdate.map((ingredient, i) => (
				<div key={i}>
					{ingredient.name} -{ingredient.quantity} -{ingredient.unit}
				</div>
			))}

			<input
				type="number"
				value={inputPortions}
				onChange={handleChange}// CHANGER LA PORTION
			/>
		</div>
	);
};
