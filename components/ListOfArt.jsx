import ArtPreview from "./ArtPreview";
import Link from "next/link";

export default function ListOfArt({ ArtPieceArr }) {
  return (
    <div>
      <h1>List</h1>

      <ul>
        {ArtPieceArr.map((artObj) => {
          return <ArtPreview key={artObj.slug} ArtPieceObj={artObj} />;
        })}
      </ul>
    </div>
  );
}
