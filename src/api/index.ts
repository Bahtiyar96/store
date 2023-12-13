import axios from "axios";
import { ILogin } from "./types";
import { IUser } from "../types";

const api = axios.create({
  baseURL: "http://localhost:4500/api",
  withCredentials: true,
});

class AuthApi {
  async login(data: ILogin) {
    return api.post<IUser>("/login", data);
  }
  registration() {}
}

export default new AuthApi();
