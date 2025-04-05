import { BASE_URL } from "@/common/configs/queryConfig";

export async function createUser() {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function login() {
  const response = await fetch(`${BASE_URL}/login`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
