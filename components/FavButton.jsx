import { Heart } from "lucide-react";

export default function FavButton({ onToggleFav, slug, isLiked }) {
  function handleClick(event) {
    event.preventDefault(); // Prevents the default link behavior
    event.stopPropagation(); // Stops the event from bubbling up to the Link
    onToggleFav(slug);
  }

  return (
    <Heart
      onClick={handleClick}
      fill={isLiked ? "red" : "none"}
      color={isLiked ? "red" : "gray"}
      style={{ cursor: "pointer" }}
    />
  );
}
