import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipes } from "../contexts/RecipesContext";

const Recipe = () => {
	const { id } = useParams();
	const { recipes } = useRecipes();

	const [recipe, setRecipe] = useState(
		recipes.filter((obj) => obj.id === Number(id))[0]
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
	const [inputPortions, setInputPortions] = useState(portions);
	const [ingredientsUpdate, setIngredientUpdate] = useState(ingredients);

	const handleChange = (e) => {
		setInputPortions(e.target.value);

    const ingredientsTemp = []
    ingredients.forEach((ingredient) => {
      const ingredientUpdate = {...ingredient}
      ingredientUpdate.quantity = Math.round(ingredient.quantity / portions * e.target.value)
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
				onChange={handleChange}
			/>
		</div>
	);
};
