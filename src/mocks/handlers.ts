import { http, HttpResponse, PathParams } from "msw";
import { mockCoctailSearchResponse } from "./coctail-search";
import { CoctailResponse } from "../components/cocktail-search/CocktailSearch.hook";

const coctailsHandler = http.get<PathParams, CoctailResponse>(
  // match request at this path (predicate)
  "https://thecocktaildb.com/api/json/v1/1/search.php",
  // intercept request and return whatever JSON we need (resolver)
  () => {
    return HttpResponse.json(mockCoctailSearchResponse);
  }
);

const imageHandler = http.get(
  "https://image.com/:imageId",
  async ({ params }) => {
    // The easiest way to obtain a buffer in the browser
    // is to fetch the resource you need and read its body
    // as "response.arrayBuffer()".
    const buffer = await fetch(`/mock-drink-${params.imageId}.webp`).then(
      (response) => response.arrayBuffer()
    );

    // Use the "HttpResponse.arrayBuffer()" shorthand method
    // to automatically infer the response body buffer's length.
    return HttpResponse.arrayBuffer(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  }
);

export const handlers = [coctailsHandler, imageHandler];
