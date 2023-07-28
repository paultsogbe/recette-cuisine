import React, { useState } from "react";
import "./RecipeForm.css";
import { useRecipes } from "../../contexts/RecipesContext";
import InputTag from "./parts/InputTag";
import InputIngredient from "./parts/InputIngredient";

const inputsDefaultValue = {  // ICI, C'EST TOUTES LES DONNÉES QU'ON A DEPUIS DATA(json)
    title: "",
    content: "",
    photoUrl: "",
    duration: "",
    difficulty: "1",
    portions: "",
    tags: "",
}
// ICI , C'EST LE FORMULAIRE D'AJOUTE DES RECETTES
const RecipeForm = () => {
	const [inputsValue, setInputsValue] = useState(inputsDefaultValue);
    const [ingredients, setIngredients] = useState([]);

    const {addRecipe} = useRecipes() // ON DOIT FAIRE CE FORMULAIRE SUR LA PAGE(composant) RECETTE(ajoutRecette = useRecette)

	const handleChange = (e) => {
		setInputsValue({ ...inputsValue, [e.target.name]: e.target.value }); //  cette fonction permet d'ajouter une nouvelle recette
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        addRecipe({  // ICI' C'EST LA CRÉATION D'UN NOUVEAU D'OBJET D'AJOUT DE RECETTE
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
                required  //  REQUIRED PERMET DE GÉRER LES ERREUR DANS LE FORMULAIRE
			/>
			<textarea
				name="content"
				onChange={handleChange}
				value={inputsValue.content}
                required // REQUIRED PERMET DE GÉRER LES ERREUR DANS LE FORMULAIRE
			></textarea>
			<input
				type="text"
				onChange={handleChange}
				value={inputsValue.photoUrl}
				name="photoUrl"
				placeholder="URL de l'image"
                required // REQUIRED PERMET DE GÉRER LES ERREUR DANS LE FORMULAIRE
			/>
			<input
				type="number"
				onChange={handleChange}
				value={inputsValue.duration}
				name="duration"
				placeholder="Durée en min"
                required  // REQUIRED PERMET DE GÉRER LES ERREUR DANS LE FORMULAIRE
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
                required // REQUIRED PERMET DE GÉRER LES ERREUR DANS LE FORMULAIRE
			/>
			<InputTag setInputsValue={setInputsValue} />
            <InputIngredient setIngredients={setIngredients} ingredients={ingredients} />
			{/* // cet bouton permet de faire riflesh et mettre d'autres recettes */}
			<button>Ajouter la recette</button>  
		</form>
	);
};

export default RecipeForm;
