import { getSinger } from "@/app/api/getSinger";
import style from "./infos.module.css";

interface Item {
  tag: string;
  attributes: {
    href: string;
    rel: string;
    src: string;
    height: number;
    width: number;
    ref: string;
  };
  data: {
    apiPath: string;
    animated: boolean;
    thumbnail: {
      height: number;
      src: string;
      width: number;
    };
  };
  children: any;
}

const Infos = async ({ singer }: { singer: any }) => {
  const artist = await getSinger(parseInt(singer));

  const renderElement: any = (item: Item) => {
    if (typeof item === "string") {
      return item;
    } else if (typeof item === "object") {
      const { tag, children, attributes } = item || {};
      const { href, rel, src, width, height } = attributes || {};

      const innerHTML = Array.isArray(children)
        ? children.map(renderElement).join("")
        : children;

      return `<${tag} href="${href}" rel="${rel}" src="${src}" width="100%" height="${
        height / 2
      }}">
      ${innerHTML ?? ""}
    </${tag}>`;
    } else {
      return "";
    }
  };

  const renderedInfos = artist?._raw?.description?.dom?.children.map(
    (info: any, index: number) => {
      if (!info) return null;
      const { tag, children } = info;

      return (
        <div
          className={style.infos}
          key={`${tag}-${index}`}
          dangerouslySetInnerHTML={{ __html: renderElement({ tag, children }) }}
        />
      );
    }
  );

  return <>{renderedInfos}</>;
};

export default Infos;
