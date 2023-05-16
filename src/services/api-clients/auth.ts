import { axiosInstance } from "@services/instance";

import { IResponse } from "models/Response";
import { APIs } from "constants/api";

export const signUp = async (values : any) => {
  const { data }: { data: IResponse } = await axiosInstance.post(APIs.SIGNUP, values);
  return data.data;
};

export const login = async (values: any) => {
  const { data }: { data: IResponse } = await axiosInstance.post(APIs.LOGIN, values);
  return data.data;
}
