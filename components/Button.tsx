"use client";

import Image from "next/image";
import { customButtonProps } from "@/types";

const Button = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}: customButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
export default Button;
