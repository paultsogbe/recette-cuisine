import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Recipe from "./pages/Recipe";
import Navbar from "./components/Layout/Navbar";
import RecipesProvider from "./contexts/RecipesContext";

function App() {
	return (
    <RecipesProvider>
      <BrowserRouter>
        <Navbar />
        <div style={{ padding: "24px" }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </RecipesProvider>
	);
}

export default App;
