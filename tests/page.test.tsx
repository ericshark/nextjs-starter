import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the starter heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /next\.js starter/i,
    });
    expect(heading).toBeDefined();
  });
});
