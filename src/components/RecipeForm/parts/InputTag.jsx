import React, { useState, useEffect } from "react";
import "./InputTag.css"

const InputTag = ({setInputsValue}) => {
	const [inputTags, setInputTags] = useState("");
	const tags = ["dessert", "chocolat", "été"]; // TABLEAU DE DESSERT

	const handleChange = (e) => {
		setInputTags(e.target.value); // CHANGE LE TAG(CHANGER TON DESSERT)
	};

    const handleClick = (name) => {
        setInputTags(name + " " + inputTags)//CLICKER SUR LE TAG ET LE VOIR
    }

    useEffect(() => {
        setInputsValue(i => {
            const newState = {...i} // CRÉATION DE NOUVEAU TABLEAU DE TAG(DESSERT)
            newState.tags = inputTags.trim()
            return newState
        })
    }, [inputTags])

	return (
		<div>
			<div className="tagList"> 
				{tags.map((tag) => (
					<div key={tag} onClick={() => handleClick(tag)} className="tag">{tag}</div> // LISTE DES TAGS
				))}
			</div>
			<input
				type="text"
				onChange={handleChange} // PERMET DE CHANGER LE TAGS DANS LE FORMULAIRE
				value={inputTags}
				name="tags"
				placeholder="Tags"
				required //PERMET DE GERER LES ERREUR
			/>
		</div>
	);
};

export default InputTag;
