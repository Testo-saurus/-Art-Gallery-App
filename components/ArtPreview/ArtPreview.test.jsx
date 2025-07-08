import { render, screen } from "@testing-library/react";
import ArtPreview from "@/components/ArtPreview";

//Fake art data as simulation
const mockArtPiece = {
  slug: "starry-night",
  name: "The Starry Night",
  artist: "Vincent van Gogh",
  year: "1889",
  imageSource: "/images/starry-night.jpg",
  isFavorite: true,
};

test("renders art preview with title, artist, and image", () => {
  //Renders the ArtPreview with our mock data
  render(<ArtPreview artPieceObj={mockArtPiece} onToggleFavorite={() => {}} />);

  expect(screen.getByText("The Starry Night")).toBeInTheDocument();
  expect(
    screen.getByText((text) => text.includes("Vincent van Gogh"))
  ).toBeInTheDocument();

  expect(screen.getByRole("img")).toBeInTheDocument();
});
