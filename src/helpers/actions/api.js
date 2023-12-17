import { clientHttp } from "../utils/clientHttp";
const { get, post, put, del } = clientHttp;

export const postSignup = (body) => post("/auth/signup", body);
export const postLogin = (body) => post("/auth/login", body);
export const getProfile = () => get("/auth/profile");
export const putProfile = (body) => put("/auth/profile", body);

export const getAllAuction = () => get("/auction");
export const getAuction = (id) => get(`/auction/${id}`)
export const postCreateAuction = (body) => post("/auction/create", body);
export const postBidAuction = (body) => post("/auction/bid", body);
export const postBuyoutAuction = (body) => post("/auction/buyout", body);

export const postUploadFile = (body) => post("/upload", body, {}, {});

export const getMyBids = () => get("/auction/bid/all");
export const getInvoice = (id) => get(`/auction/invoice/${id}`)