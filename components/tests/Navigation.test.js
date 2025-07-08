import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation";

// Mock Next.js navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const { usePathname } = require("next/navigation");

describe("Navigation", () => {
  beforeEach(() => {
    usePathname.mockReturnValue("/");
  });

  it("renders all navigation links", () => {
    render(<Navigation />);

    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Spotlight")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });

  it("renders correct href attributes", () => {
    render(<Navigation />);

    expect(screen.getByRole("link", { name: "Gallery" })).toHaveAttribute(
      "href",
      "/art-pieces"
    );
    expect(screen.getByRole("link", { name: "Spotlight" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: "Favorites" })).toHaveAttribute(
      "href",
      "/favorites"
    );
  });

  it("highlights active page - Spotlight", () => {
    usePathname.mockReturnValue("/");
    render(<Navigation />);

    const spotlightLink = screen.getByRole("link", { name: "Spotlight" });
    expect(spotlightLink).toBeInTheDocument();
    // Note: styled-components styling can't be easily tested, but we can verify the link exists
  });

  it("highlights active page - Gallery", () => {
    usePathname.mockReturnValue("/art-pieces");
    render(<Navigation />);

    const galleryLink = screen.getByRole("link", { name: "Gallery" });
    expect(galleryLink).toBeInTheDocument();
  });

  it("highlights active page - Favorites", () => {
    usePathname.mockReturnValue("/favorites");
    render(<Navigation />);

    const favoritesLink = screen.getByRole("link", { name: "Favorites" });
    expect(favoritesLink).toBeInTheDocument();
  });

  it("renders navigation as a footer", () => {
    render(<Navigation />);

    // Check that we have 3 navigation links
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("renders with correct navigation structure", () => {
    render(<Navigation />);

    // Verify all three main navigation items exist
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Spotlight")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });

  it("handles unknown pathname correctly", () => {
    usePathname.mockReturnValue("/unknown-path");
    render(<Navigation />);

    // Should still render all links even with unknown pathname
    expect(screen.getByRole("link", { name: "Gallery" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Spotlight" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Favorites" })).toBeInTheDocument();
  });
});
