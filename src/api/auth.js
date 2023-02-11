import API from "./main";
import axios from "axios";
import { setRefreshToken } from "./../storage/Coockie";

export const login = async ({ email, password }) => {
  await axios
    .post("/user/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      //   const accessToken = response.data.access_token;
      //   if (response.status) {
      //     setRefreshToken(response.data.refresh_token);
      //     dispatchEvent(set(response.data.access_token));
      //   }
      return response;
    })
    .catch(function (error) {
      console.log(error);
      alert(error.response.statusText);
    });
};

export const logout = ({ email, password }) => {};
