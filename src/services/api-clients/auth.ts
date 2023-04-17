import { axiosInstance } from "@services/instance";

import { IResponse } from "models/Response";

const APIs = {
  SIGNUP: "/api/register",
  FORGOT_PASSWORD: "/api/forgot-password",
  RESET_PASSWORD: "/api/reset-password",
  VERIFY_TOKEN: "/api/verify",
};

export const signUp = async (values : any) => {
  const { data }: { data: IResponse } = await axiosInstance.post(APIs.SIGNUP, values);
  return data.data;
};