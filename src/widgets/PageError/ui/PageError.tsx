import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

const PageError: FC<IPageErrorProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation();

    const onReload = (): void => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, [className])}>
            {t('errorPage')}
            <Button className={cls.button} onClick={onReload}>{t('reloadPage')}</Button>
        </div>
    );
};

export default PageError;
