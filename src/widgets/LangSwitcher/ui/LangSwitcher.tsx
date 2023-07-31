import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

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
            className={classNames('', [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('switchLanguage')}
        </Button>
    );
};

export default LangSwitcher;
