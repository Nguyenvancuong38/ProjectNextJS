import { axiosInstance } from "@services/instance";

import { IResponse } from "models/Response";

const APIs = {
  SIGNUP: "/api/register",
  LOGIN: "api/login",
  FORGOT_PASSWORD: "/api/forgot-password",
  RESET_PASSWORD: "/api/reset-password",
  VERIFY_TOKEN: "/api/verify",
};

export const signUp = async (values : any) => {
  const { data }: { data: IResponse } = await axiosInstance.post(APIs.SIGNUP, values);
  return data.data;
};

export const login = async (values: any) => {
  const { data }: { data: IResponse } = await axiosInstance.post(APIs.LOGIN, values);
  console.log(data);
  
  console.log(data.data.token);
  console.log(data.token);
  
  sessionStorage.setItem("token", data.token || null);
  return data.data;
}

// admin@gmail.com
// cuongNv2105@