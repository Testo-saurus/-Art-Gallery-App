import styled from "styled-components";

import Image from "next/image";

const StyledListItem = styled.li`
  list-style: none;
  margin: 1rem 0;
  width: 100%;
  max-width: 350px;

  article {
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    background-color: white;
    margin-bottom: 1.5rem;

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

export default function ArtPreview({ ArtPieceObj }) {
  const { name, artist, imageSource, year } = ArtPieceObj;

  return (
    <StyledListItem>
      <article>
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
  );
}
