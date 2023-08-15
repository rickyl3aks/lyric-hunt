import getQuery from "../api/getSearch";
import Result from "../components/result/result";

interface Infos {
  songInfo: string;
  lyrics: string;
  img: string;
}

const QueryPage = async ({ params }: { params: { query: string } }) => {
  const res = await getQuery(params.query);
  return (
    <>
      <Result result={res.data} />
    </>
  );
};

export default QueryPage;
