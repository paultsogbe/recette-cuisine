import React, { useState, useContext } from "react";
import { fakeRecipes } from "../datas/recipes";

export const RecipesContext = React.createContext();

const RecipesProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([...fakeRecipes]);
	const [id, setId] = useState(2)

	const addRecipe = (recipe) => {
		setRecipes([...recipes, {...recipe, id, tags : recipe.tags.split(" ")}]);
		setId(i => i + 1)
	};

	return (
		<RecipesContext.Provider
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

export const useRecipes = () => {
	return useContext(RecipesContext);
};
