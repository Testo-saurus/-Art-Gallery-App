import { render, screen } from "@testing-library/react";
import ListOfArt from "./ListOfArt";

//Fake art data as simulation
const mockArtPieces = [
  {
    slug: "sunflowers",
    name: "Sunflowers",
    artist: "Van Gogh",
    year: "1888",
    imageSource: "/images/sunflowers.jpg",
    isFavorite: false,
  },
  {
    slug: "mona-lisa",
    name: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "1503",
    imageSource: "/images/mona-lisa.jpg",
    isFavorite: true,
  },
];

test("renders a list of art pieces", () => {
  //Renders the ListOfArt with our mock data
  render(<ListOfArt artPieceArr={mockArtPieces} onToggleFavorite={() => {}} />);

  expect(screen.getByText("Sunflowers")).toBeInTheDocument();
  expect(screen.getByText("Mona Lisa")).toBeInTheDocument();
  expect(screen.getAllByRole("img")).toHaveLength(2);
});
