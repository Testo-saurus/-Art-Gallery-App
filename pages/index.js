import ArtPreview from "@/components/ArtPreview";
import Spotlight from "@/components/Spotlight";

export default function HomePage({ data }) {
  const randomIndex = Math.floor(Math.random() * data.length + 1);

  console.log(randomIndex);

  return (
    <div>
      <h1>ART GALLERY</h1>

      <Spotlight ArtPieceObj={data[randomIndex]} />
    </div>
  );
}
