import ListOfArt from "@/components/ListOfArt";

export default function ArtGallery({ data, onToggleFav }) {
  return (
    <div>
      <h1>ART GALLERY</h1>

      <ListOfArt artPieceArr={data} onToggleFav={onToggleFav} />
    </div>
  );
}
