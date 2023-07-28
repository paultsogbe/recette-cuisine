import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Recipe from "./pages/Recipe";
import Navbar from "./components/Layout/Navbar";
import RecipesProvider from "./contexts/RecipesContext"; // est le grand parent(il partage les information à ses enfants grace Constext, provider)

function App() {
	return (
    <RecipesProvider>       
      <BrowserRouter>
        <Navbar />
        <div style={{ padding: "24px" }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/add-recipe" element={<AddRecipe />} /> // ICI C'EST L'AJOUT DE RECETTE
            <Route path="/recipe/:id" element={<Recipe />} />  //ICI C'EST L'AJOUT DE RECETTE PAR ID
            
          </Routes>
        </div>
      </BrowserRouter>
    </RecipesProvider>
	);
}

export default App;

// --------------------EXO---------

// Créer un site web de recette de cuisine 

// Sur la page d'accueil afficher la liste des recettes. Afficher une photo (url), un titre et le temps de préparation.
// Sur cette page d'accueil permettre de filtrer les recettes en fonction de la durée, ou de la date d'ajout.

// Lorsque l'on clic sur une recette, afficher une page avec le détail de la recette : photo, liste d'ingrédient, tags,
// la durée, difficulté et la recette.

// Créer aussi une page permettant d'ajouter une recette à l'aide d'un formulaire, gérer les erreurs.
// Permettre l'ajout de tag en plus de ceux déjà existant.

// Sur la page détail des recettes, permettre de modifier le nombre de portions.

// Créer un moteur de recherche en + des filtres sur la page d'accueil