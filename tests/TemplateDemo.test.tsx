import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TemplateDemo } from "@/components/TemplateDemo";

describe("TemplateDemo component", () => {
  it("renders the showcase card with initial count of 0", () => {
    render(<TemplateDemo />);
    expect(screen.getByText("Interactive Component Showcase")).toBeDefined();
    expect(screen.getByTestId("count-display").textContent).toBe("0");
  });

  it("increments and resets count on button clicks", () => {
    render(<TemplateDemo />);
    const incrementBtn = screen.getByRole("button", { name: /increment count/i });
    const resetBtn = screen.getByRole("button", { name: /reset count/i });

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId("count-display").textContent).toBe("2");

    fireEvent.click(resetBtn);
    expect(screen.getByTestId("count-display").textContent).toBe("0");
  });
});
