import { Account } from "appwrite";
import client from "../components/appwrite";

class AuthService {
    static instance;
    account;

    constructor() {
        this.account = new Account(client);
    }

    static getInstance = () => {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    };

    login = async (email, password) => {
        return this.account.createSession(email, password);
    };

    register = async (data) => {
        const { email, password, userId, name } = data;
        console.log(userId, email, password, name);
        console.log(data);
        return this.account.create(userId, email, password, name);
    };
}

export default AuthService;
