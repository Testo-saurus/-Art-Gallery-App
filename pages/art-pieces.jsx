import useSWR from "swr";
import ListOfArt from "@/components/ListOfArt";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function ArtGallery() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>Failed to load art pieces</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      <h1>ART GALLERY</h1>

      <ListOfArt ArtPieceArr={data} />
    </div>
  );
}
