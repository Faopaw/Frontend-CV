import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";
import "@testing-library/jest-dom";

describe("Projects", () => {
  it("renders a heading", () => {
    render(<Projects />);

    const heading = screen.getByRole("heading", {
      name: /projects/i,
    });

    expect(heading).toBeInTheDocument();
  });
});