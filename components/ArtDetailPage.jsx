import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ArtDetailPage({ ArtPieceObj }) {
  const { name, artist, imageSource, year, genre, slug } = ArtPieceObj;
  const router = useRouter();

  return (
    <>
      <Link href="/art-pieces" onClick={() => router.back()}>
        ← Back
      </Link>

      <article>
        <h4>{name}</h4>
        <Image
          src={imageSource}
          alt={name}
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
        />
        <p>
          {artist} ({year})
        </p>
        <p>Genre: {genre}</p>
      </article>
    </>
  );
}
