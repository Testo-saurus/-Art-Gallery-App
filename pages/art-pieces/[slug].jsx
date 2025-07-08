import ArtDetailPage from "@/components/ArtDetailPage/ArtDetailPage";
import { useRouter } from "next/router";

export default function DynamicPage({ data, onToggleFavorite }) {
  const router = useRouter();

  const { slug } = router.query;

  const artPiece = data?.find((piece) => piece.slug === slug);

  return <ArtDetailPage artPieceObj={artPiece} onToggleFavorite={onToggleFavorite} />;
}
