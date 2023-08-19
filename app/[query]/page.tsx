import dynamic from "next/dynamic";

import getQuery from "../api/getSearch";
import Search from "../components/search/search";

const QueryPage = async ({ params }: { params: { query: string } }) => {
  const res = await getQuery(params.query);

  const Result = dynamic(() => import("../components/result/result"), {
    ssr: false,
  });

  return (
    <>
      <Search />
      <Result result={res.data} />
    </>
  );
};

export default QueryPage;
