import { Account, Client } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65526da49408c2944f35");
export const account = new Account(client);
export default client;
