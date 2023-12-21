import { useEffect, useState } from "react";
import axios from "axios";

type UseFetchCocktailSearchProps = {
  cocktailName: string;
};

export type CoctailData = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export type CoctailResponse = { drinks: CoctailData[] };

export const useFetchCocktailSearch = ({
  cocktailName,
}: UseFetchCocktailSearchProps) => {
  const [cocktailList, setCocktailList] = useState<CoctailData[]>();

  useEffect(() => {
    const fetchData = async () => {
      const coctailsResponse = await axios.get<CoctailResponse>(
        `https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
      );

      setCocktailList(coctailsResponse.data.drinks);
    };

    fetchData();
  }, [cocktailName]);

  return {
    cocktailList,
  };
};
