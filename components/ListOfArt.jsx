import ArtPreview from "./ArtPreview";
import Link from "next/link";

export default function ListOfArt({ artPieceArr, onToggleFav }) {
  return (
    <div>
      <h1>List</h1>

      <ul>
        {artPieceArr.map((artObj) => {
          return (
            <ArtPreview
              key={artObj.slug}
              artPieceObj={artObj}
              onToggleFav={onToggleFav}
            />
          );
        })}
      </ul>
    </div>
  );
}
