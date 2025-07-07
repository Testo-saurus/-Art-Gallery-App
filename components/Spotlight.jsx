import styled from "styled-components";

import Image from "next/image";
import ArtPreview from "./ArtPreview";

export default function Spotlight({ artPieceObj, onToggleFav }) {
  const { name, artist, imageSource, year } = artPieceObj;

  return <ArtPreview artPieceObj={artPieceObj} onToggleFav={onToggleFav} />;
}
