import { render, screen } from "@testing-library/react";
import ArtDetailPage from "./ArtDetailPage";


jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
    asPath: "/art-pieces/some-slug",
  }),
}));

//Fake art data as simulation
const mockArtPiece = {
  slug: "the-scream",
  name: "The Scream",
  artist: "Edvard Munch",
  year: "1893",
  genre: "Expressionism",
  imageSource: "/images/the-scream.jpg",
  isFavorite: false,
};

test("renders detailed art piece with all info", () => {
  render(
    //Renders the ArtDetailPage with our mock data
    <ArtDetailPage artPieceObj={mockArtPiece} onToggleFavorite={() => {}} />
  );

  expect(screen.getByText("The Scream")).toBeInTheDocument();
  expect(screen.getByText(/Edvard Munch/)).toBeInTheDocument();
  expect(screen.getByText(/1893/)).toBeInTheDocument();
  expect(screen.getByText(/Expressionism/)).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
});
