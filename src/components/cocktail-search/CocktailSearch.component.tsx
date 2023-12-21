import { useFetchCocktailSearch } from "./CocktailSearch.hook";

interface CoctailProps {
  cocktailName: string;
}

export const CocktailSearch = ({ cocktailName }: CoctailProps) => {
  const { cocktailList } = useFetchCocktailSearch({ cocktailName });

  return (
    <>
      <ul>
        {cocktailList?.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <h3>{cocktail.strDrink}</h3>
            <div>
              <div>Coctail image: </div>
              <img
                src={cocktail.strDrinkThumb}
                alt="Coctail"
                width={200}
                height={200}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
