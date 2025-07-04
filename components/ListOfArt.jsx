import ArtPreview from "./ArtPreview";

export default function ListOfArt({ ArtPieceArr }) {
  return (
    <div>
      <h1>List</h1>

      <ul>
        {ArtPieceArr.map((artObj) => {
          return <ArtPreview ArtPieceObj={artObj} />;
        })}
      </ul>
    </div>
  );
}
