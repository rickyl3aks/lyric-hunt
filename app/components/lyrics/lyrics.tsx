import style from "./lyrics.module.css";
import Image from "next/image";
import Button from "../button/button";

interface Artist {
  artist_names: string;
  title: string;
  primary_album: string;
  primary_tag: string;
  lyrics_language: string;
  hot: string;
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
  children,
}: {
  getLyrics: string;
  getArtist: Artist;
  children: React.ReactElement;
}) => {
  const {
    artist_names,
    title,
    primary_album,
    primary_tag,
    lyrics_language,
    hot,
    header_image_thumbnail_url,
    header_image_url,
    song_art_image_thumbnail_url,
    song_art_image_url,
    release_date_for_display,
    primary_artist,
  } = getArtist || {};

  const { header_image_url: headerImg, image_url } = primary_artist || {};

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
            style={{ objectFit: "cover" }}
          />
          <div className={style.headerImg} />
        </div>
        <Image
          src={image_url}
          blurDataURL={image_url}
          placeholder="blur"
          alt={artist_names}
          width={150}
          height={150}
          className={style.img}
        />
        <div className={style.infoContainer}>
          <div className={style.infoPair}>
            <p className={style.label}>Artist:</p>
            <p className={style.value}>{artist_names}</p>
          </div>
          <div className={style.infoPair}>
            <p className={style.label}>Title:</p>
            <p className={style.value}>{title}</p>
          </div>
          <div className={style.infoPair}>
            <p className={style.label}>Release:</p>
            <p className={style.value}>{release_date_for_display}</p>
          </div>
        </div>
      </section>
      <Button text="back" />
      <div className={style.containerInfo}>
        <details className={style.details}>
          <summary className={style.summary}>
            <h2 className={style.artistName}>{artist_names}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={style.feather}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div className={style.artistInfo}>{children}</div>
        </details>
      </div>
      <section>
        <div className={style.songContainer}>
          <Image
            src={song_art_image_url}
            alt={title}
            blurDataURL={song_art_image_url}
            style={{
              borderRadius: "10px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
            placeholder="blur"
            width={200}
            height={200}
          />
        </div>
        <div className={style.lyricsContainer}>
          <div className={style.lyrics}>{getLyrics}</div>
        </div>
      </section>
    </>
  );
};

export default Lyrics;
