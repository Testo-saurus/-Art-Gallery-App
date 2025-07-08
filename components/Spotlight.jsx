import ArtPreview from "./ArtPreview";

export default function Spotlight({ artPieceObj, onToggleFavorite }) {

  return <ArtPreview artPieceObj={artPieceObj} onToggleFavorite={onToggleFavorite} />;
}
