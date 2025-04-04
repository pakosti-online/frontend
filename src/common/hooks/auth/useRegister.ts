import { useState } from "react";

export const useRegister = () => {
  type RegisterFieldsData = {
    surname: string;
    name: string;
    fatherhood: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const [registerFields, setRegisterFields] = useState<RegisterFieldsData>({
    surname: "",
    name: "",
    fatherhood: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(registerFields);

    if (registerFields.password != registerFields.confirmPassword) {
      console.error("Пароль не совпадает!");
    }
  };

  return {
    registerFields,
    setRegisterFields,
    handleInputChange,
    handleSubmit,
  };
};
