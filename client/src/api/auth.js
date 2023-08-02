import axios from "./axios";


export const resgisterRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios
  .get('/verify-token');