import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<ILangSwitcherProps> = ({ className }): JSX.Element => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('switchLanguage')}
        </Button>
    );
};

export default LangSwitcher;
