import Spotlight from "@/components/Spotlight";
import { useState } from "react";

export default function HomePage({ data, onToggleFavorite }) {
  
  const [selectedSlug] = useState(() => {
    //Pick random piece of art to display and returns its slug
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex].slug;
  });

  //Gets the slug in the array that matches the selectedSlug state
  const selectedArt = data.find((item) => item.slug === selectedSlug);

  return (
    <>
      <div>
        <h1>Spotlight</h1>

        <Spotlight
          artPieceObj={selectedArt}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </>
  );
}
