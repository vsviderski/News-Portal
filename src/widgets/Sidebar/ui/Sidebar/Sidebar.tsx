import { FC, useState } from 'react';
import cls from './Sidebar.module.scss';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames';

interface ISidebarProps {
  className?: string;
}

const Sidebar: FC<ISidebarProps> = ({ className }): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const onToggle = (): void => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: isCollapsed,
      })}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
