import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

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
    position: relative;
    text-align: center;

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

const FavoriteButtonWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 10;
`;

export default function ArtPreview({ artPieceObj, onToggleFavorite }) {
  const { name, artist, imageSource, year, slug, isFavorite } = artPieceObj;

  return (
    <StyledListItem>
      <article>
        <FavoriteButtonWrapper>
          <FavoriteButton
            slug={slug}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </FavoriteButtonWrapper>

        <Link href={`/art-pieces/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
          <>
            <h4>{name}</h4>
            <Image
              src={imageSource}
              alt={name}
              width={450}
              height={300}
              style={{ objectFit: "cover" }}
            />
            <p>
              {artist} ({year})
            </p>
          </>
        </Link>
      </article>
    </StyledListItem>
  );
}
