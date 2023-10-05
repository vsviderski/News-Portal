import { FC, useEffect } from 'react';
import { useSelector, useStore } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ReduxStoreWithManager, useAppDispatch } from 'app/providers/StoreProvider';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import cls from './LoginForm.module.scss';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginFormReducer } from '../../model/slice/loginSlice';
import { getUserName } from '../../model/selectors/getUserName';
import { getPassword } from '../../model/selectors/getPassword';
import { getLoading } from '../../model/selectors/getLoading';
import { getError } from '../../model/selectors/getError';

interface ILoginFormProps {
    className?: string;
}

const LoginForm: FC<ILoginFormProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation('authorization');
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();
    const username = useSelector(getUserName);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);

    useEffect(() => {
      store.reducerManager.add('loginForm', loginFormReducer);
    
      return () => {
        store.reducerManager.remove('loginForm');
      }
    }, [])
    

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
