import { useState } from "react";

export const useLoginForm = () => {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const showEmailError = formSubmitted && emailTouched && email.trim() === '';
  const showPasswordError = formSubmitted && passwordTouched && password.trim() === '';

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailTouched,
    setEmailTouched,
    passwordTouched,
    setPasswordTouched,
    formSubmitted,
    handleSubmit,
    showEmailError,
    showPasswordError,
    showPassword,
    togglePasswordVisibility,
  };
};