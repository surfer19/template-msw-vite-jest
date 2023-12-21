import { http, HttpResponse, PathParams } from "msw";
import { mockCoctailSearchResponse } from "./coctail-search";
import { CoctailResponse } from "../components/cocktail-search/CocktailSearch.hook";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const coctailsHandler = http.get<PathParams, CoctailResponse>(
  // match request at this path (predicate)
  "https://thecocktaildb.com/api/json/v1/1/search.php",
  // intercept request and return whatever JSON we need (resolver)

  () => {
    return HttpResponse.json(mockCoctailSearchResponse);
  }
);

export const handlers = [coctailsHandler];
