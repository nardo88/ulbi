import { classNames } from "helpers/classNames/classNames";
import { FC, useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Sidebat.module.scss";
interface Sidebat {}

export const Sidebar: FC<Sidebat> = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => setCollapsed(!collapsed);
  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}
    >
      <button onClick={onToggle}>toggle</button>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
