import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface ILangSwitcherProps {
  className?: string;
  isShort?: boolean;
}

const LangSwitcher: FC<ILangSwitcherProps> = ({ className, isShort }): JSX.Element => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(isShort ? 'switchLanguageShort' : 'switchLanguage')}
        </Button>
    );
};

export default LangSwitcher;
