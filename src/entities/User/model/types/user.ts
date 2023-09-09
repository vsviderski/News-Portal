export interface IUser {
    id: number;
    name: string;
}

export interface IUserSchema {
    authData?: IUser;
}
