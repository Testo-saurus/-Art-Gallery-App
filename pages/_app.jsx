import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "../components/Navigation";
import useLocalStorageState from "use-local-storage-state";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
  defaultValue: [],
});

  function handleFavoriteToggle(slug) {
  setFavorites((prevFavorites) =>
    //Check if slug is already on the list of favorites
    prevFavorites.includes(slug)
    //If it is, remove it. If it is not, add it
      ? prevFavorites.filter((favSlug) => favSlug !== slug)
      : [...prevFavorites, slug]
  );
}

  if (error) return <div>Failed to load art pieces</div>;
  if (isLoading) return <div>Loading...</div>;

  //Add isFavorite property to each art piece object
  const artPiecesWithFavorites = data?.map((artPiece) => ({
    ...artPiece,
    isFavorite: favorites.includes(artPiece.slug),
  }));

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={artPiecesWithFavorites} onToggleFavorite={handleFavoriteToggle} />
      <Navigation />
    </>
  );
}
