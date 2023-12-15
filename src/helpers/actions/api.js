import { clientHttp } from "../utils/clientHttp";
const { get, post, put, del } = clientHttp;

export const postSignup = (body) => post("/auth/signup", body);
export const postLogin = (body) => post("/auth/login", body);
export const getProfile = () => get("/auth/profile");
export const putProfile = (body) => put("/auth/profile", body);
