import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Spotlight from "../Spotlight";

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

describe("Spotlight", () => {
  beforeEach(() => {
    mockOnToggleFavorite.mockClear();
  });

  it("renders art piece correctly", () => {
    render(
      <Spotlight
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
      <Spotlight
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle Favorite")).toBeInTheDocument();
  });

  it("renders link to art piece detail page", () => {
    render(
      <Spotlight
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/art-pieces/test-art");
  });

  it("calls onToggleFavorite when favorite button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Spotlight
        artPieceObj={mockArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const favoriteButton = screen.getByRole("button");
    await user.click(favoriteButton);

    expect(mockOnToggleFavorite).toHaveBeenCalledWith("test-art");
    expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);
  });

  it("displays favorite state correctly", () => {
    const favoriteArtPiece = { ...mockArtPiece, isFavorite: true };
    render(
      <Spotlight
        artPieceObj={favoriteArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle Favorite")).toBeInTheDocument();
  });
});
