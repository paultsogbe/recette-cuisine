import React, { useState } from "react";
import "./RecipeForm.css";
import { useRecipes } from "../../contexts/RecipesContext";
import InputTag from "./parts/InputTag";
import InputIngredient from "./parts/InputIngredient";

const inputsDefaultValue = {
    title: "",
    content: "",
    photoUrl: "",
    duration: "",
    difficulty: "1",
    portions: "",
    tags: "",
}

const RecipeForm = () => {
	const [inputsValue, setInputsValue] = useState(inputsDefaultValue);
    const [ingredients, setIngredients] = useState([]);

    const {addRecipe} = useRecipes()

	const handleChange = (e) => {
		setInputsValue({ ...inputsValue, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        addRecipe({
            ...inputsValue,
            duration : Number(inputsValue.duration),
            difficulty : Number(inputsValue.difficulty),
            portions: Number(inputsValue.portions)
        })
        setInputsValue(inputsDefaultValue)
	};


	return (
		<form onSubmit={handleSubmit} className="form-add-recipe">
			<input
				type="text"
				onChange={handleChange}
				value={inputsValue.title}
				name="title"
				placeholder="Titre de la recette"
                required
			/>
			<textarea
				name="content"
				onChange={handleChange}
				value={inputsValue.content}
                required
			></textarea>
			<input
				type="text"
				onChange={handleChange}
				value={inputsValue.photoUrl}
				name="photoUrl"
				placeholder="URL de l'image"
                required
			/>
			<input
				type="number"
				onChange={handleChange}
				value={inputsValue.duration}
				name="duration"
				placeholder="Durée en min"
                required
			/>
			<select onChange={handleChange} name="difficulty" required>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</select>
			<input
				type="number"
				onChange={handleChange}
				value={inputsValue.portions}
				name="portions"
				placeholder="Portions"
                required
			/>
			<InputTag setInputsValue={setInputsValue} />
            <InputIngredient setIngredients={setIngredients} ingredients={ingredients} />
			<button>Ajouter la recette</button>
		</form>
	);
};

export default RecipeForm;
