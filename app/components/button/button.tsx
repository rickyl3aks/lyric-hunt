"use client";

import { useRouter } from "next/navigation";

import style from "./button.module.css";

const Button = ({ text }: { text: string }) => {
  const router = useRouter();

  return (
    <>
      {" "}
      <div className={style.btnContainer}>
        <button className={style.btn} onClick={router.back}>
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
