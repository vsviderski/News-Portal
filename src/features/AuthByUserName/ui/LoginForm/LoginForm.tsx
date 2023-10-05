import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import useAsyncReducerLoad, { ReducersList } from 'shared/lib/useAsyncReducerLoad';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import { getError } from '../../model/selectors/getError';
import { getLoading } from '../../model/selectors/getLoading';
import { getPassword } from '../../model/selectors/getPassword';
import { getUserName } from '../../model/selectors/getUserName';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginFormReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

const reducers: ReducersList = {
    loginForm: loginFormReducer
};

const LoginForm: FC<ILoginFormProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation('authorization');
    useAsyncReducerLoad(reducers);
    const dispatch = useAppDispatch();
    const username = useSelector(getUserName);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);
    
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
