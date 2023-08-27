import getArtist from "@/app/api/getArtist";
import { getSinger } from "@/app/api/getSinger";
import { getLyrics } from "@/app/api/getSongs";
import Infos from "@/app/components/infos/infos";
import dynamic from "next/dynamic";
import React from "react";

const LyricsPage = async ({
  params,
  searchParams,
}: {
  params: { query: string; lyrics: string };
  searchParams: { artist: string; lyrics: string };
}) => {
  const { query } = params;
  const { artist } = searchParams;
  const decodedString = decodeURIComponent(query);

  const [lyrics, artistInfo] = await Promise.all([
    getLyrics(decodedString, "/songs/" + searchParams.lyrics),
    getArtist(decodedString, "/songs/" + searchParams.lyrics),
    // getSinger(parseInt(artist))
  ]);

  const Lyrics = dynamic(() => import("@/app/components/lyrics/lyrics"), {
    ssr: false,
  });

  return (
    <Lyrics getLyrics={lyrics} getArtist={artistInfo.result}>
      {/* <Infos artist={singer} /> */}
      <span />
    </Lyrics>
  );
};

export default LyricsPage;
