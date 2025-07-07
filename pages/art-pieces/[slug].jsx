import ArtDetailPage from "@/components/ArtDetailPage";
import { useRouter } from "next/router";

export default function DynmamicPage({ data }) {
  const router = useRouter();

  const { slug } = router.query;

  const artPiece = data?.find((piece) => piece.slug === slug);

  return <ArtDetailPage ArtPieceObj={artPiece} />;
}
