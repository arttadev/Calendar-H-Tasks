import { CONFIRM_PASSWORD_ERROR, EMAIL_ERROR, PASSWORD_ERROR } from "constants/textMessages";

export const validateFormData = (formData: any) => {
    const errors = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = EMAIL_ERROR;
    }
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errors.password = PASSWORD_ERROR;
    }
  
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = CONFIRM_PASSWORD_ERROR;
    }
  
    return errors;
  };