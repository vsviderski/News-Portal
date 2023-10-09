import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import useAsyncReducerLoad, { ReducersList } from 'shared/lib/hooks/useAsyncReducerLoad';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginFormReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const reducers: ReducersList = {
    loginForm: loginFormReducer,
};

const LoginForm: FC<ILoginFormProps> = ({ className, onSuccess }): JSX.Element => {
    const { t } = useTranslation('authorization');
    useAsyncReducerLoad(reducers);
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onUserNameChange = (value: string): void => {
        dispatch(loginActions.userName(value));
    };

    const onPasswordChange = (value: string): void => {
        dispatch(loginActions.password(value));
    };

    const onSaveUser = async (): Promise<void> => {
        const result = await dispatch(loginByUserName({ username, password }));

        if (result.meta.requestStatus === 'fulfilled' && onSuccess) {
            onSuccess();
        }
    };

    return (
        <div className={classNames(cls.LoginForm, [className])}>
            <Text title={t('title')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                value={username}
                placeholder={t('user name')}
                onChange={onUserNameChange}
                autoFocus
            />
            <Input
                value={password}
                placeholder={t('password')}
                onChange={onPasswordChange}
            />
            <Button
                className={cls.loginBtn}
                onClick={onSaveUser}
                disabled={isLoading}
            >
                {t('sign in')}
            </Button>
        </div>
    );
};

export default LoginForm;
