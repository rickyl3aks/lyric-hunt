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
  try {
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
        <span/>
      </Lyrics>
    );
  } catch (error) {
    console.error("An error occurred:", error);
    return (
      <div>Error loading lyrics. Please try again with some other query</div>
    );
  }
};

export default LyricsPage;
