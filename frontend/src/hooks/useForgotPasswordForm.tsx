import { useState } from 'react';

export const useForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Aqui você pode adicionar a lógica para enviar o e-mail de recuperação de senha
  };

  const showEmailError = formSubmitted && emailTouched && email.trim() === '';

  return {
    email,
    setEmail,
    emailTouched,
    setEmailTouched,
    formSubmitted,
    handleSubmit,
    showEmailError
  };
};
