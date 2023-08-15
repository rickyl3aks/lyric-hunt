"use client";

import { useRouter } from "next/navigation";

const Lyrics = ({ getLyrics }: any) => {
  const router = useRouter();
  return (
    <>
      <button onClick={router.back}>Back</button>
      <div style={{ whiteSpace: "pre" }}>{getLyrics}</div>
    </>
  );
};

export default Lyrics;
