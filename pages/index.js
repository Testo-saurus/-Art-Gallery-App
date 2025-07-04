import ArtPreview from "@/components/ArtPreview";

export default function HomePage({ data }) {
  const randomIndex = Math.floor(Math.random() * data.length + 1);

  console.log(randomIndex);

  return (
    <div>
      <h1>Hello from Next.js</h1>

      <ArtPreview ArtPieceObj={data[randomIndex]} />
    </div>
  );
}
