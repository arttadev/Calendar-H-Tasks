import { useCallback, useState } from "react";

import useStyles from "../../components/RegisterForm/styles";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "components";
import { validateFormData } from "utils";

const RegisterPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = useCallback((e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);
    localStorage.clear();
    if (!Object.values(validationErrors).some((error) => error)) {
      const existingUsers = JSON.parse(
        localStorage.getItem("usersInfo") || "[]"
      );
      const userId = Date.now();
      const newUser = {
        id: userId,
        ...formData,
      };
      existingUsers.push(newUser);
      localStorage.setItem("usersInfo", JSON.stringify(existingUsers));
      navigate("/login");
    }
  };

  return (
    <div className={classes.wrapper}>
      <RegisterForm
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default RegisterPage;
