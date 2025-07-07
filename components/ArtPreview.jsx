import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";
import FavButton from "./FavButton";

const StyledListItem = styled.li`
  list-style: none;
  margin: auto;
  width: 100%;
  max-width: 500px;

  article {
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    background-color: white;
    margin-bottom: 1.5rem;
    position: relative; /* Add this for absolute positioning of the FavButton */

    &:hover {
      transform: translateY(-5px);
    }

    h4 {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      color: #333;
    }

    img {
      width: 100%;
      border-radius: 4px;
      object-fit: cover;
    }

    p {
      color: #666;
      font-style: italic;
    }
  }
`;

const FavButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;

  padding: 0.25rem;
`;

export default function ArtPreview({ artPieceObj, onToggleFav }) {
  const { name, artist, imageSource, year, slug, isLiked } = artPieceObj;

  return (
    <Link href={`/art-pieces/${slug}`}>
      <StyledListItem>
        <article>
          <FavButtonWrapper>
            <FavButton
              slug={slug}
              isLiked={isLiked}
              onToggleFav={onToggleFav}
            />
          </FavButtonWrapper>
          <h4>{name}</h4>
          <Image
            src={imageSource}
            alt={name}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
          <p>
            {artist} ({year})
          </p>
        </article>
      </StyledListItem>
    </Link>
  );
}
