import "./App.css";
import { CocktailSearch } from "./components/cocktail-search/CocktailSearch.component";

function App() {
  return (
    <>
      <h2> Coctail app</h2>
      <CocktailSearch cocktailName="Margarita" />
    </>
  );
}

export default App;
