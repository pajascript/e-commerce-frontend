import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjYyMzMxODQxNTY5ZjkyNTAzMjk5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTM1MzIzMSwiZXhwIjoxNjUxNjEyNDMxfQ.-YwXjzrD9D-TJcf_q50dWXrAuP3JC_PoEn9k9QOlAuw"

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});