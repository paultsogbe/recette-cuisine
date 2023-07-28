import React, { useState, useContext } from "react";
import { fakeRecipes } from "../datas/recipes";

export const RecipesContext = React.createContext(); // ÇA PERMET DE PARTAGER LES INFORMATIONS SUR TTES LES PAGES

const RecipesProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([...fakeRecipes]);
	const [id, setId] = useState(2)

	const addRecipe = (recipe) => {
		setRecipes([...recipes, {...recipe, id, tags : recipe.tags.split(" ")}]);//création d'un nouveau tableau [...], objet{... recette,id,tags,} de recette pour pouvoir l'ajouter
		setId(i => i + 1)
	};

	return (
		<RecipesContext.Provider // 
			value={{
				recipes,
				setRecipes,
				addRecipe
			}}
		>
			{children}
		</RecipesContext.Provider>
	);
};

export default RecipesProvider;

export const useRecipes = () => { // ICI, C'EST LE HOOK DE RECETTE(ça  permet d'aller sur toutes les pages de recette)
	return useContext(RecipesContext);
};
