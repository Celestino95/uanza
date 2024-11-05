import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto my-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sobre Nós</h2>
      
      <div className="space-y-6">
        <p className="text-gray-600 text-lg leading-relaxed">
          Somos uma empresa especializada em capturar os momentos mais especiais da vida através de álbuns fotográficos e vídeos profissionais. 
          Combinamos tecnologia de ponta e criatividade para transformar eventos em recordações duradouras.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          Desde casamentos e batizados até sessões de fotos pessoais e corporativas, a nossa missão é contar histórias visuais autênticas. 
          Cada projeto é único, e o nosso objetivo é garantir que os nossos clientes possam reviver esses momentos através de álbuns e vídeos de alta qualidade.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          Estamos localizados em Viana, na Rua da Gamek, e atendemos eventos e projetos em todo o país. O nosso horário de atendimento é das 09:00 às 18:00, de segunda a sexta-feira. 
          Fale connosco para discutir como podemos ajudar a capturar os seus momentos mais importantes!
        </p>
      </div>
      
      {/* Team Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">A Nossa Equipa</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
            <img
              src="/claudio.jpg"
              alt="Claudio Gomes"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Cláudio Mendes</h4>
            <p className="text-gray-600">CEO & Fundador</p>
            <p className="text-gray-500 text-sm mt-2">
               Claudio lidera a equipa com uma paixão por contar histórias através de imagens.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
            <img
              src="/isaac.jpg"
              alt="Maria Oliveira"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Isaac Ngolambole</h4>
            <p className="text-gray-600">Co Fundador</p>
            <p className="text-gray-500 text-sm mt-2">
              Especialista em fotografia e direção criativa
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
            <img
              src="/perfil.jpg"
              alt="Celestino Fragoso"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Celestino Fragoso</h4>
            <p className="text-gray-600">Especialista em TI</p>
            <p className="text-gray-500 text-sm mt-2">
              Com foco em tecnologias, Celestino transforma ideias em histórias inesquecíveis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
