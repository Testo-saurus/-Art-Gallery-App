import styled from "styled-components";
import ArtPreview from "../ArtPreview/ArtPreview";

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;         /* spacing between items */
  padding: 0;
  margin: 0 auto;
  max-width: 1100px; /* optional max width to center */
  list-style: none;
`;

const PageWrapper = styled.main`
  padding-bottom: 6rem;
  padding-top: 1rem;
`;

export default function ListOfArt({ artPieceArr, onToggleFavorite }) {
  return (
    <PageWrapper>
      <StyledUnorderedList>
        {artPieceArr.map((artObj) => {
          return (
            <ArtPreview
              key={artObj.slug}
              artPieceObj={artObj}
              onToggleFavorite={onToggleFavorite}
            />
          );
        })}
      </StyledUnorderedList>
    </PageWrapper>
  );
}
