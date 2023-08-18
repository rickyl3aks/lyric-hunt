import Link from "next/link";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <p className={style.footer}>
        <Link href="https://docs.genius.com/" className={style.link}>
          Powered by Genius API
        </Link>
      </p>
    </>
  );
};

export default Footer;
