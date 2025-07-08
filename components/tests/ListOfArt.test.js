import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListOfArt from "../ListOfArt";

const mockArtPieces = [
  {
    name: "Art 1",
    artist: "Artist 1",
    imageSource: "https://example-apis.vercel.app/images/art1.jpg",
    year: "2023",
    slug: "art-1",
    isFavorite: false,
    genre: "Abstract",
  },
  {
    name: "Art 2",
    artist: "Artist 2",
    imageSource: "https://example-apis.vercel.app/images/art2.jpg",
    year: "2022",
    slug: "art-2",
    isFavorite: true,
    genre: "Modern",
  },
];

const mockOnToggleFavorite = jest.fn();

describe("ListOfArt", () => {
  beforeEach(() => {
    mockOnToggleFavorite.mockClear();
  });

  it("renders heading", () => {
    render(
      <ListOfArt
        artPieceArr={mockArtPieces}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByText("List")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders all art pieces", () => {
    render(
      <ListOfArt
        artPieceArr={mockArtPieces}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByText("Art 1")).toBeInTheDocument();
    expect(screen.getByText("Art 2")).toBeInTheDocument();
    expect(screen.getByText("Artist 1 (2023)")).toBeInTheDocument();
    expect(screen.getByText("Artist 2 (2022)")).toBeInTheDocument();
  });

  it("renders correct number of art pieces", () => {
    render(
      <ListOfArt
        artPieceArr={mockArtPieces}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const artImages = screen.getAllByRole("img");
    expect(artImages).toHaveLength(2);
  });

  it("renders all art pieces as list items", () => {
    render(
      <ListOfArt
        artPieceArr={mockArtPieces}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });

  it("renders favorite buttons for all art pieces", () => {
    render(
      <ListOfArt
        artPieceArr={mockArtPieces}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const favoriteButtons = screen.getAllByRole("button");
    expect(favoriteButtons).toHaveLength(2);
  });

  it("renders links to art piece detail pages", () => {
    render(
      <ListOfArt
        artPieceArr={mockArtPieces}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/art-pieces/art-1");
    expect(links[1]).toHaveAttribute("href", "/art-pieces/art-2");
  });

  it("handles empty array", () => {
    render(
      <ListOfArt artPieceArr={[]} onToggleFavorite={mockOnToggleFavorite} />
    );

    expect(screen.getByText("List")).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("calls onToggleFavorite when favorite button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <ListOfArt
        artPieceArr={mockArtPieces}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    const favoriteButtons = screen.getAllByRole("button");
    await user.click(favoriteButtons[0]);

    expect(mockOnToggleFavorite).toHaveBeenCalledWith("art-1");
    expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);
  });

  it("renders with single art piece", () => {
    const singleArtPiece = [mockArtPieces[0]];
    render(
      <ListOfArt
        artPieceArr={singleArtPiece}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByText("Art 1")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getAllByRole("img")).toHaveLength(1);
  });

  it("renders unordered list structure", () => {
    render(
      <ListOfArt
        artPieceArr={mockArtPieces}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("passes correct props to ArtPreview components", () => {
    render(
      <ListOfArt
        artPieceArr={mockArtPieces}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // Verify that each art piece name is rendered (indicating ArtPreview received correct props)
    expect(screen.getByText("Art 1")).toBeInTheDocument();
    expect(screen.getByText("Art 2")).toBeInTheDocument();

    // Verify that each art piece has the correct artist and year
    expect(screen.getByText("Artist 1 (2023)")).toBeInTheDocument();
    expect(screen.getByText("Artist 2 (2022)")).toBeInTheDocument();
  });
});
