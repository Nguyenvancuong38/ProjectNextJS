import { axiosInstance } from "@services/instance";

import { IResponse } from "models/Response";

const APIs = {
  SIGNUP: "/api/auth/register",
  FORGOT_PASSWORD: "/api/auth/forgot-password",
  RESET_PASSWORD: "/api/auth/reset-password",
  VERIFY_TOKEN: "/api/auth/verify",
};

export const signUp = async (values : any) => {
    const formData = {
        "full_name": values.fullName,
        "user_name": values.userName,
        "email" : values.email,
        "password": values.password
    }
  const { data }: { data: IResponse } = await axiosInstance.post(APIs.SIGNUP, formData);
  return data.data;
};