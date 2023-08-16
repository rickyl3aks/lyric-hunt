"use client";

import style from "./result.module.css";
import { useRouter, usePathname } from "next/navigation";
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
}

const Result = ({ result }: any) => {
  const pathName = usePathname();

  const truncateString = (title: string): string => {
    if (title.length > 23) {
      return title.slice(0, 23) + "...";
    }
    return title;
  };

  return (
    <>
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
            },
          } = songs;
          return (
            <React.Fragment key={title + artist_names}>
              <Link
                key={title}
                className={style.link}
                prefetch={false}
                href={`${pathName}/${api_path.replace("/songs/", "")}`}
              >
                {header_image_thumbnail_url && (
                  <div className={style.img}>
                    <Image
                      src={song_art_image_thumbnail_url}
                      blurDataURL={song_art_image_thumbnail_url}
                      placeholder="blur"
                      style={{ borderRadius: "10px" }}
                      width={300}
                      height={300}
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
