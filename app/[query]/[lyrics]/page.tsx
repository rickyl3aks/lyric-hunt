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

  return (
    <>
      <Lyrics getLyrics={lyrics} />
    </>
  );
};

export default LyricsPage;
