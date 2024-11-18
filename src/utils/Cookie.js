import Cookies from "universal-cookie";
const cookies = new Cookies();

export const setIdCookie = (userId) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 1000 * 60 * 30);
    console.log(userId);
    cookies.set("userId", userId, { path: "/", expires: expirationDate });
};

export const getIdCookie = () => {
    console.log(cookies.get("userId"));
    return cookies.get("userId");
};

export const deleteIdCookie = () => {
    console.log("delete");
    cookies.remove("userId", { path: "/" });
};
