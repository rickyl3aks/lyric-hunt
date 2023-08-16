import getArtist from "@/app/api/getArtist";
import { getLyrics } from "@/app/api/getSongs";
import Lyrics from "@/app/components/lyrics/lyrics";

const LyricsPage = async ({
  params,
}: {
  params: { query: string; lyrics: string };
}) => {
  const apiPath = "/songs/" + params.lyrics;
  const { query } = params;
  const decodedString = decodeURIComponent(query);
  const lyrics = await getLyrics(decodedString, apiPath);
  const artistInfo = await getArtist(decodedString, apiPath);
  const { result } = artistInfo;

  return (
    <>
      <Lyrics getLyrics={lyrics} getArtist={result} />
    </>
  );
};

export default LyricsPage;
