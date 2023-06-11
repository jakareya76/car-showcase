import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
