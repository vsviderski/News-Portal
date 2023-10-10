import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/Profile';
import useAsyncReducerLoad, { ReducersList } from 'shared/lib/hooks/useAsyncReducerLoad';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = (): JSX.Element => {
    const { t } = useTranslation('profile');
    useAsyncReducerLoad(reducers);

    return (
        <div>
            {t('profilePage')}
        </div>
    );
};

export default ProfilePage;
