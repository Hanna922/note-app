import API from "./main";
import { setRefreshToken } from "./../storage/Coockie";
import { set } from "immer/dist/internal";

export const login = async ({ email, password }) => {
  await API.post("/user/login", {
    email,
    password,
  })
    .then(function (response) {
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
