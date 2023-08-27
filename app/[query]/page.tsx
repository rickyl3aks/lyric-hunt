import dynamic from "next/dynamic";

import getQuery from "../api/getSearch";
import Search from "../components/search/search";

const QueryPage = async ({
  params,
  searchParams,
}: {
  params: { query: string };
  searchParams: any;
}) => {
  const res = await getQuery(searchParams.q);

  const Result = dynamic(() => import("../components/result/result"), {
    ssr: false,
  });

  return (
    <>
      <Search />
      <Result result={res.data} path={searchParams.q} />
    </>
  );
};

export default QueryPage;
