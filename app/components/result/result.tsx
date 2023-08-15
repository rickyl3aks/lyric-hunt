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
  const router = useRouter();

  const lyricPage = (path: string) => {
    router.push(path);
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
                <div
                // onClick={() => lyricPage(api_path)}
                >
                  <h1>{artist_names}</h1>
                  <h2>{title}</h2>
                  {header_image_thumbnail_url && (
                    <Image
                      src={header_image_thumbnail_url}
                      width={300}
                      height={300}
                      alt={title}
                    />
                  )}
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
