import { classNames } from "helpers/classNames/classNames";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({
  children,
  to,
  className,
  theme = AppLinkTheme.PRIMARY,
  ...other
}) => {
  return (
    <Link
      to={to}
      {...other}
      className={classNames(cls.link, {}, [cls[theme], className])}
    >
      {children}
    </Link>
  );
};
