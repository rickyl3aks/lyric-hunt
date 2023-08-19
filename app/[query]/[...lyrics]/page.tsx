import getArtist from "@/app/api/getArtist";
import { getLyrics } from "@/app/api/getSongs";
import dynamic from "next/dynamic";
import React from "react";

const LyricsPage = async ({
  params,
}: {
  params: { query: string; lyrics: string };
}) => {
  try {
    const apiPath = "/songs/" + params.lyrics;
    const { query } = params;
    const decodedString = decodeURIComponent(query);

    const [lyrics, artistInfo] = await Promise.all([
      getLyrics(decodedString, apiPath),
      getArtist(decodedString, apiPath),
    ]);

    const Lyrics = dynamic(() => import("@/app/components/lyrics/lyrics"), {
      ssr: false,
    });

    return <Lyrics getLyrics={lyrics} getArtist={artistInfo.result} />;
  } catch (error) {
    console.error("An error occurred:", error);
    return (
      <div>Error loading lyrics. Please try again with some other query</div>
    );
  }
};

export default LyricsPage;
