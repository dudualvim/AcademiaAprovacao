import { useState } from 'react';

// Função para verificar se a senha é forte
export const isStrongPassword = (password: string): boolean => {
  return /[A-Z]/.test(password) && /[0-9]/.test(password) && /[\W_]/.test(password);
};

export const useRegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Adicione lógica de submissão do formulário aqui
  };

  const showNameError = formSubmitted && nameTouched && name.trim() === '';
  const showEmailError = formSubmitted && emailTouched && email.trim() === '';
  const showPasswordError = formSubmitted && passwordTouched && !isStrongPassword(password);
  const showConfirmPasswordError = formSubmitted && confirmPasswordTouched && (password !== confirmPassword);

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    nameTouched,
    setNameTouched,
    emailTouched,
    setEmailTouched,
    passwordTouched,
    setPasswordTouched,
    confirmPasswordTouched,
    setConfirmPasswordTouched,
    formSubmitted,
    handleSubmit,
    showNameError,
    showEmailError,
    showPasswordError,
    showConfirmPasswordError,
    passwordVisible,
    setPasswordVisible,
    confirmPasswordVisible,
    setConfirmPasswordVisible,
    showPassword,
    togglePasswordVisibility,
  };
};
