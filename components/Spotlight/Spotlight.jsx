import ArtPreview from "../ArtPreview/ArtPreview";

export default function Spotlight({ artPieceObj, onToggleFavorite }) {

  return <ArtPreview artPieceObj={artPieceObj} onToggleFavorite={onToggleFavorite} />;
}
