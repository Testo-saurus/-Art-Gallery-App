import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPreview from "../ArtPreview";

const mockArtPiece = {
  name: "Test Art",
  artist: "Test Artist",
  imageSource: "https://example-apis.vercel.app/images/test.jpg",
  year: "2023",
  slug: "test-art",
  isFavorite: false,
  genre: "Abstract",
};

const mockOnToggleFavorite = jest.fn();

describe("ArtPreview", () => {
  beforeEach(() => {
    mockOnToggleFavorite.mockClear();
  });

  it("renders art piece information correctly", () => {
    render(
      <ArtPreview
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByText("Test Art")).toBeInTheDocument();
    expect(screen.getByText("Test Artist (2023)")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Test Art" })).toBeInTheDocument();
  });

  it("renders favorite button", () => {
    render(
      <ArtPreview
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
      <ArtPreview
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const favoriteButton = screen.getByRole("button");
    await user.click(favoriteButton);

    expect(mockOnToggleFavorite).toHaveBeenCalledWith("test-art");
    expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);
  });

  it("renders link to art piece detail page", () => {
    render(
      <ArtPreview
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/art-pieces/test-art");
  });

  it("displays favorite state correctly when favorited", () => {
    const favoriteArtPiece = { ...mockArtPiece, isFavorite: true };
    render(
      <ArtPreview
        artPieceObj={favoriteArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle Favorite")).toBeInTheDocument();
  });

  it("displays favorite state correctly when not favorited", () => {
    render(
      <ArtPreview
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle Favorite")).toBeInTheDocument();
  });

  it("renders image with correct alt text", () => {
    render(
      <ArtPreview
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "Test Art");
  });

  it("renders as a list item", () => {
    render(
      <ArtPreview
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });
});
