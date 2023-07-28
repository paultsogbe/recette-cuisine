import "./InputIngredient.css";
import { useState } from "react";

const inputsDefaultValue = { // CETTE FONCTOIN PERMET DE CRÉER UN CHAMP VIDE(LÀ OÙ TU VA ÉCRIRE) DANS LE FORMULAIRE
	name: "",
	quantity: "",
	unit: "g",
};

const InputIngredient = ({setIngredients, ingredients}) => {
	const [inputsValue, setInputsValue] = useState(inputsDefaultValue); // ICI, C'EST LE CHAMP OÙ TU VA ÉCRIRE
	

	const handleChange = (e) => {
		setInputsValue({ ...inputsValue, [e.target.name]: e.target.value }); // ICI,CETTE FONCTION  PERMET D'ECRIRE LE NOM DE TON INGREDIENT QUE TU VEUX DANS LE FORMULAIRE
	};

	const handleClick = (e) => { // ICI' CETTE FONCTION PERMET DE CRÉER UN TABLEAU D'INGREDIENT À CHAQUE FOIS(de choisir ton ingredient)
		e.preventDefault();
		setIngredients(i => [...i, inputsValue]);
		setInputsValue(inputsDefaultValue);
	};

	return (
		<div className="input-ingredient">
			<div className="inputs">
				<input
					type="text"
					onChange={handleChange}
					value={inputsValue.name}
					placeholder="Nom"
					name="name"
				/>
				<input
					type="number"
					onChange={handleChange}
					value={inputsValue.quantity}
					placeholder="Quantité"
					name="quantity"
				/>
				<select
					name="unit"
					onChange={handleChange}
					value={inputsValue.unit}
				>
					<option value="g">g</option>
					<option value="l">l</option>
					<option value="unit">unité</option>
				</select>
				<button onClick={handleClick}>+</button>
			</div>
			<div className="list"> 
				{ingredients.map((ingredient, i) => ( // ICI' C'EST TTE LA LISTE DES INGREDIENT QUE TU TAPÉ DANS LE FORMULAIRE
					<div key={i}>
						{ingredient.name} - {ingredient.quantity}{" "} 
						{ingredient.unit}
					</div>
				))}
			</div>
		</div>
	);
};

export default InputIngredient;
