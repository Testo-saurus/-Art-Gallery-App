import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

const Container = styled.div`
  max-width: 1200px;
  max-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 5rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Article = styled.article`
  position: relative;
  text-align: center;
`;

const StyledImage = styled(Image)`
  width: 95vw !important;
  max-width: 1000px !important;
  height: auto !important;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h4`
  font-size: 2rem;
  margin: 1.5rem 0;
  color: #333;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0;
`;

const FavoriteButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
`;

export default function ArtDetailPage({ artPieceObj, onToggleFavorite }) {
  const { name, artist, imageSource, year, genre, slug, isFavorite } = artPieceObj;
  const router = useRouter();

  return (
    <Container>
      <BackLink href="/art-pieces" onClick={() => router.back()}>
        ← Back
      </BackLink>

      <Article>
        <FavoriteButtonWrapper>
          <FavoriteButton onToggleFavorite={onToggleFavorite} slug={slug} isFavorite={isFavorite} />
        </FavoriteButtonWrapper>

        <Title>{name}</Title>
        <StyledImage
          src={imageSource}
          alt={name}
          width={1000}
          height={600}
          style={{ objectFit: "cover" }}
        />
        <InfoText>
          {artist} ({year})
        </InfoText>
        <InfoText>Genre: {genre}</InfoText>
      </Article>
    </Container>
  );
}
