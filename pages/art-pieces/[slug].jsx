import ArtDetailPage from "@/components/ArtDetailPage";
import { useRouter } from "next/router";

export default function DynmamicPage({ data, onToggleFav }) {
  const router = useRouter();

  const { slug } = router.query;

  const artPiece = data?.find((piece) => piece.slug === slug);

  return <ArtDetailPage artPieceObj={artPiece} onToggleFav={onToggleFav} />;
}
