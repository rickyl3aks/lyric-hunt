"use client";

import { useRouter } from "next/navigation";
import style from "./lyrics.module.css";
import Image from "next/image";

interface Artist {
  artist_names: string;
  title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  release_date_for_display: string;
  song_art_image_thumbnail_url: string;
  song_art_image_url: string;
  stats: {};
  primary_artist: {
    header_image_url: string;
    image_url: string;
  };
}

const Lyrics = ({
  getLyrics,
  getArtist,
}: {
  getLyrics: string;
  getArtist: Artist;
}) => {
  const router = useRouter();
  const {
    artist_names,
    title,
    header_image_thumbnail_url,
    header_image_url,
    song_art_image_thumbnail_url,
    song_art_image_url,
    release_date_for_display,
    primary_artist,
  } = getArtist;

  const { header_image_url: headerImg, image_url } = primary_artist;

  return (
    <>
      <section className={style.outer}>
        <div className={style.imgContainer}>
          <Image
            src={headerImg}
            blurDataURL={headerImg}
            placeholder="blur"
            fill
            alt={title}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={style.iconContainer}>
          <Image
            src={image_url}
            blurDataURL={image_url}
            placeholder="blur"
            alt={artist_names}
            width={100}
            height={100}
            className={style.img}
          />
        </div>

        <div className={style.info}>
          <p>Artist: {artist_names}</p>
          <p>Title: {title}</p>
          <p>Release: {release_date_for_display}</p>
        </div>
      </section>
      <div className={style.btnContainer}>
        <button className={style.btn} onClick={router.back}>
          Back
        </button>
      </div>
      <section>
        <div className={style.songContainer}>
          <Image
            src={song_art_image_url}
            alt={title}
            blurDataURL={song_art_image_url}
            style={{ borderRadius: "10px" }}
            placeholder="blur"
            width={200}
            height={200}
          />
        </div>
        <div className={style.lyrics}>{getLyrics}</div>
      </section>
    </>
  );
};

export default Lyrics;
