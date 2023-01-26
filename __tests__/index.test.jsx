import { render, screen } from "@testing-library/react";
import Homepage from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Homepage />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).not.toBeInTheDocument();
  });
});
