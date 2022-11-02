import { classNames } from "helpers/classNames/classNames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "../Button/Button";
import cls from "./LangSwitcher.module.scss";
interface LangSwitcher {
  className: string;
}

export const LangSwitcher: FC<LangSwitcher> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames("", {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
