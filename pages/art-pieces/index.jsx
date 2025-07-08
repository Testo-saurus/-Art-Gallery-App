import ListOfArt from "@/components/ListOfArt";

export default function ArtGallery({ data, onToggleFavorite }) {
  return (
    <div>
      <h1>Art Gallery</h1>

      <ListOfArt artPieceArr={data} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
