import "./InputIngredient.css";
import { useState } from "react";

const inputsDefaultValue = {
	name: "",
	quantity: "",
	unit: "g",
};

const InputIngredient = ({setIngredients, ingredients}) => {
	const [inputsValue, setInputsValue] = useState(inputsDefaultValue);
	

	const handleChange = (e) => {
		setInputsValue({ ...inputsValue, [e.target.name]: e.target.value });
	};

	const handleClick = (e) => {
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
				{ingredients.map((ingredient, i) => (
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
