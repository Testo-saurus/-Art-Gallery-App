import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "../components/Navigation";

import { useEffect, useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount

  useEffect(() => {
    const savedFavorites = localStorage.getItem("artGalleryFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("artGalleryFavorites", JSON.stringify(favorites));
  }, [favorites]);

  if (error) return <div>Failed to load art pieces</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  // function toggleFav(slug) {
  //   setFavorites([...favorites, slug]);
  //   console.log("favs:", favorites);
  // }

  function toggleFav(slug) {
    console.log("Toggling favorite for:", slug);
    setFavorites((prev) => {
      let newFavorites;
      if (prev.includes(slug)) {
        newFavorites = prev.filter((fav) => fav !== slug); // Remove from favorites
      } else {
        newFavorites = [...prev, slug]; // Add to favorites
      }
      console.log("Updated favorites:", newFavorites);
      return newFavorites;
    });
  }

  console.log(favorites);

  // Create enriched data with isLiked property
  const enrichedData = data?.map((artPiece) => ({
    ...artPiece,
    isLiked: favorites.includes(artPiece.slug),
  }));

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={enrichedData} onToggleFav={toggleFav} />
      <Navigation />
    </>
  );
}
