import axios from "axios";
import qs from "qs";
import { BASE_URL } from "@/common/configs/queryConfig";
import { LoginFormData, RegisterFormData } from "@/common/schemas/auth";

// Создание юзера
export async function registerUser(data: RegisterFormData) {
  const response = await axios.post(`${BASE_URL}/users`, data);
  return response.data;
}

// Логин юзера
export const loginUser = async (data: LoginFormData) => {
  const response = await axios.post(
    `${BASE_URL}/users/login`,
    qs.stringify(data),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.data;
};

// Обновление access-токена
export const updateAccessToken = async () => {
  const response = await axios.post(`${BASE_URL}/users/refresh`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
    },
  });
  return response.data;
};
