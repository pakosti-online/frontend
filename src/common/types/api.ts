export interface UserCreateResponse {
  id: number;
  first_name: string;
  last_name: string;
  patronymic: string;
  email: string;
}

export type RegisterFieldsData = {
  surname: string;
  name: string;
  fatherhood: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export interface ApiError {
  message: string;
  response?: {
    data?: {
      message?: string;
      errors?: Array<{
        field: keyof RegisterFieldsData;
        message: string;
      }>;
    };
  };
}
