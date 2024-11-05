import { error } from 'console';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal_Login = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se for o cadastro, envia os dados para o servidor
    if (!isLogin) {
      try {
        const response = await fetch('http://localhost:3306/api/register/', { // Correção aqui
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
          alert('Usuário cadastrado com sucesso');
          // Limpar os campos após o cadastro
          setEmail('');
          setPassword('');
          onClose();
        } else {
          alert(data.message || 'Erro desconhecido. Tente novamente.');
        }
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário. Tente novamente.'+error);
      }
    } else {
      // Lógica para login (se necessário)
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-bold mb-4 text-[#9DD4F0]">{isLogin ? 'Login' : 'Novo Cadastro'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-[#9DD4F0]" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-[#9DD4F0] rounded focus:outline-none focus:ring-2 focus:ring-[#9DD4F0]"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-[#9DD4F0]" htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-[#9DD4F0] rounded focus:outline-none focus:ring-2 focus:ring-[#9DD4F0]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#9DD4F0] text-white p-2 rounded hover:bg-opacity-80 transition"
          >
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>
        <p className="mt-4 text-center text-[#9DD4F0]">
          {isLogin ? (
            <>
              Não tem uma conta? 
              <button onClick={() => setIsLogin(false)} className="text-[#E7ACCE] hover:underline"> Cadastre-se</button>
            </>
          ) : (
            <>
              Já tem uma conta? 
              <button onClick={() => setIsLogin(true)} className="text-[#E7ACCE] hover:underline"> Fazer login</button>
            </>
          )}
        </p>
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-[#9DD4F0] hover:text-white transition"
          aria-label="Fechar modal"
        >
          <FaTimes size={20} />
        </button>
      </div>
    </div>
  );
};

export default Modal_Login;
