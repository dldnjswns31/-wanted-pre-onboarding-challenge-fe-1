import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginState } from "../recoil/atoms";
import { IProtectedRouterProps } from "../types/auth";
import { getToken } from "../utils/authToken";

const ProtectedRoute = ({ authenticate }: IProtectedRouterProps) => {
  const isLogin = useRecoilValue(isLoginState);
  const setIsLogin = useSetRecoilState(isLoginState);

  useEffect(() => {
    if (getToken()) setIsLogin(true);
  }, []);
  if (authenticate) {
    return isLogin ? <Outlet /> : <Navigate to={"/auth"} />;
  } else {
    return isLogin ? <Navigate to={"/"} /> : <Outlet />;
  }
};

export default ProtectedRoute;
