import ListOfArt from "@/components/ListOfArt";

export default function ArtGallery({ data }) {
  return (
    <div>
      <h1>ART GALLERY</h1>

      <ListOfArt ArtPieceArr={data} />
    </div>
  );
}
