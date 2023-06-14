"use client";

import Image from "next/image";
import { customButtonProps } from "@/types";

const Button = ({
  title,
  containerStyles,
  btnType,
  textStyle,
  rightIcon,
  isDisable,
  handleClick,
}: customButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
export default Button;
