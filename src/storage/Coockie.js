import { Cookies } from "react-cookie";

const cookies = new Cookies();

// Refresh Token을 쿠키에 저장
export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7); // 7일 뒤 만료

  return cookies.set("refresh_token", refreshToken, {
    sameSite: "strict",
    path: "/",
    expires: new Date(expireDate),
  });
};

// 쿠키에 저장된 Refresh Token 값을 가져옴
export const getCookieToken = () => {
  return cookies.get("refresh_token");
};

// 쿠키 삭제
export const removeCookieToken = () => {
  return cookies.remove("refresh_token", {
    sameSite: "strict",
    path: "/",
  });
};
