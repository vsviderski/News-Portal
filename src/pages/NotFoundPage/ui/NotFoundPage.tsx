import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: FC = (): JSX.Element => {
    const { t } = useTranslation();

    return <div>{t('pageNotFound')}</div>;
};
