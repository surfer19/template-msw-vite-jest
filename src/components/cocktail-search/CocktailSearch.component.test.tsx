import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CocktailSearch } from "./CocktailSearch.component";

describe("Coctail Search component", () => {
  test("should fetch default coctail list on load", async () => {
    render(<CocktailSearch cocktailName="Margarita" />);

    await waitFor(async () => {
      const coctail1 = await screen.findByRole("heading", {
        level: 3,
        name: /Margarita Test/i,
      });
      const coctail2 = await screen.findByRole("heading", {
        level: 3,
        name: /Margarita Doe/i,
      });
      const list = await screen.findAllByRole("listitem");
      expect(list).toHaveLength(2);

      expect(coctail1).toBeInTheDocument();
      expect(coctail2).toBeInTheDocument();
    });
  });
});
