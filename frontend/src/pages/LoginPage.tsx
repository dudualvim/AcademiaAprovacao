import React from 'react';
import { AtSign, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLoginForm } from '../hooks/useLoginForm';

const LoginPage: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    setEmailTouched,
    setPasswordTouched,
    handleSubmit,
    showEmailError,
    showPasswordError,
  } = useLoginForm();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="flex max-w-3xl overflow-hidden rounded-lg shadow-lg bg-gray-900">
        {/* Left side with background image */}
        <div className="hidden md:block" style={{ backgroundImage: "url('/img/blue-swirl-bg.webp')" }}>
          <div className="flex items-center justify-center">
            <img src="/img/login.webp" alt="Academia da aprovação"/>
          </div>
        </div>

        {/* Right side with login form */}
        <div className="w-full bg-gray-900 p-14">
          <div className="flex flex-col items-center mb-10">
            <img src="/img/logotipo-tutory.webp" alt="Tutory" className="w-fit h-24 mb-2" />
            <p className="text-sm text-white text-center">
              os estudos começam na hora em que você faz login
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
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
                type="password"
                placeholder="Senha"
                className="w-full px-4 py-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordTouched(true)}
              />
              <Eye className="absolute right-3 top-2.5 text-gray-500" size={20} />
              {showPasswordError && (
                <p className="mt-1 text-xs text-red-500">Por favor, informe sua senha</p>
              )}
            </div>

            <div className="text-right">
              <Link to="/RecuperacaoSenha" className="text-xs text-gray-400 hover:text-blue-500 cursor-pointer">esqueceu a senha?</Link>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Entrar
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Ainda não tem sua conta? {' '}
            <Link to="/Cadastro" className="text-blue-500 hover:underline">
              Crie sua conta gratuitamente.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
