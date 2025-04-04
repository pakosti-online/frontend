import { useState } from "react";

export const useLogin = () => {
  type LoginFieldsData = {
    email: string;
    password: string;
  };

  const [loginFields, setLoginFields] = useState<LoginFieldsData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginFields);
  };

  return {
    loginFields,
    setLoginFields,
    handleInputChange,
    handleSubmit,
  };
};
