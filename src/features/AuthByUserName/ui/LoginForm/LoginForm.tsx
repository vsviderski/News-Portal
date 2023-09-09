import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

const LoginForm: FC<ILoginFormProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, [className])}>
            <Input placeholder={t('user name')} />
            <Input placeholder={t('password')} />
            <Button className={cls.loginBtn}>{t('sign in')}</Button>
        </div>
    );
};

export default LoginForm;
