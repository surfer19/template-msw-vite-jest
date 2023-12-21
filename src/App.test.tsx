// src/__ tests __/App.test.tsx

import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("Renders the app", async () => {
  render(<App />);

  await waitFor(() => {
    const title = screen.getByText("Coctail app");
    expect(title).toBeInTheDocument();
  });
});
