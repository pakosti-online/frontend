"use client";

import axios from "axios";
import { BASE_URL } from "../configs/queryConfig";
import { CreateTransactionFormSchema } from "@/common/schemas/transaction";

// Создание транзакции
export async function createTransaction(data: CreateTransactionFormSchema) {
  const response = await axios.post(`${BASE_URL}/transactions`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return response.data;
}

// Получение списка транзакций
export async function getCategoriesList() {
  const response = await axios.get(`${BASE_URL}/transactions/categories`);
  return await response.data;
}

// Получение транзакций юзера
export async function getUserTransactions() {
  const response = await axios.get(`${BASE_URL}/transactions`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return await response.data;
}

// Получение рекомендаций юзера
export async function getUserRecommendations() {
  const response = await axios.get(`${BASE_URL}/transactions/recommendations`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return await response.data;
}
