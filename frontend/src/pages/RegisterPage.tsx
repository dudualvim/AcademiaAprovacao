import React from 'react';
import { AtSign, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegisterForm, isStrongPassword } from '../hooks/useRegisterForm';

const CadastroPage: React.FC = () => {
  const {
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
  } = useRegisterForm();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="flex max-w-3xl overflow-hidden rounded-lg shadow-lg bg-gray-900 min-h-[600px]">
        {/* Left side with background image */}
        <div className="hidden md:flex flex-1 bg-cover bg-center" style={{ backgroundImage: "url('/img/blue-swirl-bg.webp')" }}>
          <div className="flex items-center justify-center h-full">
            <img src="/img/login.webp" alt="Academia da aprovação" className="object-cover h-full" />
          </div>
        </div>

        {/* Right side with registration form */}
        <div className="w-full flex-1 bg-gray-900 p-8 flex flex-col justify-between">
          <div className="flex flex-col items-center mb-8">
            <img src="/img/logotipo-tutory.webp" alt="Tutory" className="w-fit h-24 mb-2" />
            <p className="text-sm text-white text-center">
              Os estudos começam na hora em que você faz login
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setNameTouched(true)}
              />
              {showNameError && (
                <p className="mt-1 text-xs text-red-500">Por favor, informe seu nome</p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
              />
              <AtSign className="absolute right-3 top-2.5 text-gray-500" size={20} />
              {showEmailError && (
                <p className="mt-1 text-xs text-red-500">Por favor, informe seu e-mail</p>
              )}
            </div>

            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Senha"
                className="w-full px-4 py-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordTouched(true)}
              />
              <div
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              >
                {passwordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
              </div>
              {showPasswordError && (
                <p className="mt-1 text-xs text-red-500">Senha deve conter uma letra maiúscula, um número e um caractere especial</p>
              )}
            </div>

            <div className="relative">
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                placeholder="Confirmar Senha"
                className="w-full px-4 py-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => setConfirmPasswordTouched(true)}
              />
              <div
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              >
                {confirmPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
              </div>
              {showConfirmPasswordError && (
                <p className="mt-1 text-xs text-red-500">As senhas não coincidem</p>
              )}
            </div>
            
            <button
              type="submit"
              className={`w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${!isStrongPassword(password) ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isStrongPassword(password)}
            >
              Cadastrar
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Já possui sua conta? {' '}
            <Link to="/Login" className="text-blue-500 hover:underline">
              Faça login agora.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CadastroPage;
