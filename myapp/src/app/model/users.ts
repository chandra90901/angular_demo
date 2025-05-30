export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    age?: number;
    username?: string;
}

export interface Userinfo {
    firstName: string;
    lastName: string;
    email: string;
}