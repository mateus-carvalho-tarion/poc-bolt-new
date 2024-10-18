import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o magic link
    console.log('Enviando magic link para:', email);
  };

  return (
    <div className="flex h-screen">
      {/* Imagem à esquerda */}
      <div className="hidden lg:block lg:w-2/3 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
        <div className="h-full w-full bg-black bg-opacity-20 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Bem-vindo ao nosso SAAS</h1>
        </div>
      </div>
      
      {/* Formulário à direita */}
      <div className="w-full lg:w-1/3 bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Entrar</h2>
          <p className="text-gray-600 mb-8">Use seu e-mail para receber um link mágico de acesso.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar link mágico
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;