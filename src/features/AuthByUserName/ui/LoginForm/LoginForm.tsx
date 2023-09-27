import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getCounter/getLoginState';

interface ILoginFormProps {
    className?: string;
}

const LoginForm: FC<ILoginFormProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onUserNameChange = (value: string): void => {
        dispatch(loginActions.userName(value));
    };

    const onPasswordChange = (value: string): void => {
        dispatch(loginActions.password(value));
    };

    const onSaveUser = (): void => {
        dispatch(loginByUserName({ username, password }));
    };

    return (
        <div className={classNames(cls.LoginForm, [className])}>
            <Input
                placeholder={t('user name')}
                onChange={onUserNameChange}
                autoFocus
            />
            <Input placeholder={t('password')} onChange={onPasswordChange} />
            <Button className={cls.loginBtn} onClick={onSaveUser}>
                {t('sign in')}
            </Button>
        </div>
    );
};

export default LoginForm;
