import { render, screen } from "@testing-library/react";
import MainSection from "../components/MainSection";
import "@testing-library/jest-dom";
import Image from "next/image";

describe("Main Section", () => {
    it("renders the image", () => {
      render(<MainSection />);
  
      const image = screen.getAllByTestId("image");
  
      expect(image).toBeInTheDocument();
    });
  });
  