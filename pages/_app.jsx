import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "../components/Navigation";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>Failed to load art pieces</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
      <Navigation />
    </>
  );
}
