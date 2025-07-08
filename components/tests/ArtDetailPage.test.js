import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtDetailPage from "../ArtDetailPage";

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const { useRouter } = require("next/router");

const mockArtPiece = {
  name: "Test Art",
  artist: "Test Artist",
  imageSource: "https://example-apis.vercel.app/images/test.jpg",
  year: "2023",
  genre: "Abstract",
  slug: "test-art",
  isFavorite: false,
};

const mockOnToggleFavorite = jest.fn();
const mockRouterBack = jest.fn();

describe("ArtDetailPage", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      back: mockRouterBack,
    });
    mockOnToggleFavorite.mockClear();
    mockRouterBack.mockClear();
  });

  it("renders all art piece details correctly", () => {
    render(
      <ArtDetailPage
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByText("Test Art")).toBeInTheDocument();
    expect(screen.getByText("Test Artist (2023)")).toBeInTheDocument();
    expect(screen.getByText("Genre: Abstract")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Test Art" })).toBeInTheDocument();
  });

  it("renders back link with correct href", () => {
    render(
      <ArtDetailPage
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const backLink = screen.getByRole("link", { name: "← Back" });
    expect(backLink).toHaveAttribute("href", "/art-pieces");
  });

  it("renders favorite button", () => {
    render(
      <ArtDetailPage
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle Favorite")).toBeInTheDocument();
  });

  it("calls onToggleFavorite when favorite button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <ArtDetailPage
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const favoriteButton = screen.getByRole("button");
    await user.click(favoriteButton);

    expect(mockOnToggleFavorite).toHaveBeenCalledWith("test-art");
    expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);
  });

  it("handles favorite state correctly when favorited", () => {
    const favoriteArtPiece = { ...mockArtPiece, isFavorite: true };
    render(
      <ArtDetailPage
        artPieceObj={favoriteArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle Favorite")).toBeInTheDocument();
  });

  it("renders image with correct alt text", () => {
    render(
      <ArtDetailPage
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const image = screen.getByRole("img", { name: "Test Art" });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Test Art");
  });

  it("displays artist and year information", () => {
    render(
      <ArtDetailPage
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByText("Test Artist (2023)")).toBeInTheDocument();
  });

  it("displays genre information", () => {
    render(
      <ArtDetailPage
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByText("Genre: Abstract")).toBeInTheDocument();
  });

  it("renders with different genre", () => {
    const modernArtPiece = { ...mockArtPiece, genre: "Modern" };
    render(
      <ArtDetailPage
        artPieceObj={modernArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByText("Genre: Modern")).toBeInTheDocument();
  });

  it("handles missing genre gracefully", () => {
    const artPieceWithoutGenre = { ...mockArtPiece, genre: undefined };
    render(
      <ArtDetailPage
        artPieceObj={artPieceWithoutGenre}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByText("Test Art")).toBeInTheDocument();
    // Should still render the component even without genre
  });
});
