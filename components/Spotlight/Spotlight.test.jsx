import { render, screen } from "@testing-library/react";
import Spotlight from "@/components/Spotlight";

//Fake art data as simulation
const mockArtPiece = {
  slug: "sunflowers",
  name: "Sunflowers",
  artist: "Vincent van Gogh",
  year: "1888",
  imageSource: "/images/sunflowers.jpg",
  isFavorite: false,
};

test("renders spotlight art piece with image and artist", () => {
  //Renders the Spotlight with our mock data
  render(
    <Spotlight
      artPieceObj={mockArtPiece}
    />
  );

  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByText(mockArtPiece.name)).toBeInTheDocument();
    expect(
    screen.getByText((text) => text.includes("Vincent van Gogh"))
  ).toBeInTheDocument();
});
