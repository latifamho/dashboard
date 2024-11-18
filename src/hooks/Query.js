import { useQuery } from "react-query";
import { Databases } from "appwrite";
import client from "../components/appwrite";
const Fetching = async () => {
    const databases = new Databases(client);
    try {
        const response = await databases.listDocuments(
            "6554979d53f148f1f1fa",
            "655497a80e89ef7c6e09"
        );
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const UseUsers = () => {
    return useQuery("super-heroes", Fetching, {
        refetchOnWindowFocus: true,
    });
};
const Fetching2 = async () => {
    const databases = new Databases(client);
    try {
        const response = await databases.listDocuments(
            "6554979d53f148f1f1fa",
            "6561bd6c4766cb79902b"
        );
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const UseProducts = () => {
    return useQuery("super-heroes", Fetching2, {
        refetchOnWindowFocus: true,
    });
};
