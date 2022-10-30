import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "helpers/classNames/classNames";
import { FC } from "react";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/light.svg";
import DarkIcon from "shared/assets/icons/dark.svg";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { Button, ThemeButton } from "shared/ui/Button/Button";
interface ThemeSwitcher {}

export const ThemeSwitcher: FC<ThemeSwitcher> = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames("", {}, [])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
