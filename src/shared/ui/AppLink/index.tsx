import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props): JSX.Element => {
  const { className, to, children, theme = AppLinkTheme.PRIMARY, ...rest } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </Link>
  );
};
