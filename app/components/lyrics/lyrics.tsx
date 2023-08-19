import style from "./lyrics.module.css";
import Image from "next/image";
import Button from "../button/button";

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
  const {
    artist_names,
    title,
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
