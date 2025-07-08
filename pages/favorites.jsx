import styled from "styled-components";
import ArtPreview from "@/components/ArtPreview/ArtPreview";

const Heading = styled.h1`
  text-align: center;
  margin: 2rem 0 1.5rem;
  font-size: 2rem;
`;

const FavoritesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  max-width: 1200px;
`;

const Message = styled.p`
  text-align: center;
  margin-top: 4rem;
  font-size: 1.2rem;
  color: #666;
`;

export default function FavoritesPage({ data, onToggleFavorite }) {
  //Filter only the favorite art pieces
  const favoritePieces = data.filter((piece) => piece.isFavorite);

  return (
    <>
      <Heading>Your Favorite Art Pieces</Heading>

      {favoritePieces.length === 0 ? (
        <Message>You have no favorites yet. Start adding some from the gallery!</Message>
      ) : (
        <FavoritesList>
          {favoritePieces.map((piece) => (
            <ArtPreview
              key={piece.slug}
              artPieceObj={piece}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </FavoritesList>
      )}
    </>
  );
}
