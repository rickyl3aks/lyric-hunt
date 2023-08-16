import getQuery from "../api/getSearch";
import Result from "../components/result/result";
import Search from "../components/search/search";

const QueryPage = async ({ params }: { params: { query: string } }) => {
  const res = await getQuery(params.query);
  return (
    <>
      <Search />
      <Result result={res.data} />
    </>
  );
};

export default QueryPage;
