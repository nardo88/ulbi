import { classNames } from "helpers/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<Button> = ({
  children,
  className,
  theme,
  ...other
}) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...other}
    >
      {children}
    </button>
  );
};
