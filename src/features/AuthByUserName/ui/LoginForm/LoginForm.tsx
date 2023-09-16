import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { useAppDispatch } from 'app/providers/StoreProvider';
import cls from './LoginForm.module.scss';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginState } from '../../model/selectors/getCounter/getLoginState';

interface ILoginFormProps {
    className?: string;
}

const LoginForm: FC<ILoginFormProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { userName, password } = useSelector(getLoginState);

    const onUserNameChange = (value: string): void => {
        dispatch(loginActions.userName(value));
    };

    const onPasswordChange = (value: string): void => {
        dispatch(loginActions.password(value));
    };

    const onSaveUser = (): void => {
        dispatch(loginByUserName({ userName, password }));
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
