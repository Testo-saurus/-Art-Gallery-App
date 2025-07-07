import Spotlight from "@/components/Spotlight";

export default function HomePage({ data, onToggleFav }) {
  const randomIndex = Math.floor(Math.random() * data.length);

  console.log(randomIndex);

  return (
    <>
      <div>
        <h1>ART GALLERY</h1>

        <Spotlight artPieceObj={data[randomIndex]} onToggleFav={onToggleFav} />
      </div>
    </>
  );
}
