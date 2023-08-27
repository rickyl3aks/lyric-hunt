"use client";

import style from "./result.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Res {
  artist_names: string;
  title: string;
  song_art_image_url: string;
  song_art_image_thumbnail_url: string;
  header_image_thumbnail_url: string;
  release_data_for_display: string;
  api_path: string;
  primary_artist: {
    api_path: string;
  };
}

const Result = ({ result, path }: any) => {
  const pathName = usePathname();
  const truncateString = (title: string): string => {
    if (title.length > 23) {
      return title.slice(0, 23) + "...";
    }
    return title;
  };

  const title = (query: string): string => {
    const decodedString = decodeURIComponent(query).replace("/", "");
    const capitalizedString =
      decodedString.charAt(0).toUpperCase() + decodedString.slice(1);
    return `"${capitalizedString}"`;
  };

  return (
    <>
      <h1 className={style.title}>{title(path)}</h1>
      <div className={style.container}>
        {result.map((songs: { result: Res }) => {
          const {
            result: {
              artist_names,
              title,
              song_art_image_thumbnail_url,
              header_image_thumbnail_url,
              song_art_image_url,
              release_data_for_display,
              api_path,
              primary_artist,
            },
          } = songs;
          return (
            <React.Fragment key={title + artist_names}>
              <Link
                key={title}
                className={style.link}
                prefetch={false}
                href={{
                  pathname: `${path}/info`,
                  query: {
                    artist: primary_artist.api_path.replace("/artists/", ""),
                    lyrics: api_path.replace("/songs/", ""),
                  },
                }}
              >
                {header_image_thumbnail_url && (
                  <div className={style.img}>
                    <Image
                      src={song_art_image_thumbnail_url}
                      blurDataURL={song_art_image_thumbnail_url}
                      placeholder="blur"
                      style={{ borderRadius: "0.5rem" }}
                      width={140}
                      height={140}
                      alt={title}
                    />
                  </div>
                )}
                <div className={style.info}>
                  <h2>{truncateString(artist_names)}</h2>
                  <p>{title}</p>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Result;
