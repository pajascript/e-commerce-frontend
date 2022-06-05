import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
let TOKEN = ""
setTimeout(() => {
    if (localStorage.length > 0) {
        TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
    }
}, 2000)

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});
