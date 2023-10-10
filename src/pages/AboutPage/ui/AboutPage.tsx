import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = (): JSX.Element => {
    const { t } = useTranslation('about');

    return <div>{t('aboutPage')}</div>;
};

export default AboutPage;
