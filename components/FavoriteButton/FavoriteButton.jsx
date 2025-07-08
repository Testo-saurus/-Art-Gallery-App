import styled from "styled-components";
import { Heart } from "lucide-react";

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: color 0.2s ease;

  svg {
    width: 2em;
    height: 2em;
    transition: transform 0.2s ease;
    stroke: rgb(236, 13, 24);
    stroke-width: 2;
  }

  &:hover {
    color: ${(props) => (props.$isFavorite ? "#cc0000" : "#555")};

    svg {
      transform: scale(1.1);
    }
  }
`;



export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <Button
      onClick={() => onToggleFavorite(slug)}
      $isFavorite={isFavorite}
      aria-label="Toggle Favorite"
    >
      <Heart
        color={isFavorite ? "red" : "#999"}
        fill={isFavorite ? "red" : "none"}
      />
    </Button>
  );
}
