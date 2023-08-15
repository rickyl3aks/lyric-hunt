import Image from "next/image";

const Songs = ({ info, lyrics, image }: any) => {
  return (
    <>
      <div>
        <Image src={image} alt={image} width={400} height={400} />
        <p>{info}</p>
        <p style={{ whiteSpace: "pre" }}>{lyrics}</p>
      </div>
    </>
  );
};

export default Songs;
