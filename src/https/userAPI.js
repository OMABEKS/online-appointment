import {$host, $authHost} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (username, password) => {
    const {data} = await $host.post('api/auth', {username, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (username, password) => {
    const {data} = await $host.post('api/user/login', {username, password})
    localStorage.setItem('token', data.token)
    console.log("login");
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}