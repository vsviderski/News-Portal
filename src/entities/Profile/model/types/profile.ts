import { Currency, Country } from 'shared/constants/common';

export interface IProfile {
    name: string;
    lastName: string;
    age: number;
    currency: Currency;
    city: string;
    country: Country;
    avatar: string;
}

export interface IProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    data?: IProfile;
    error?: string;
}
