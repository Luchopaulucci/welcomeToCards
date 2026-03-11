
import { useState } from 'react';
import MazoJuego from './MazoJuego';
import Objetivos from './Objetivos';
import { Layers, Target } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'juego' | 'objetivos'>('juego');

  return (
    <div className="flex flex-col h-[100dvh] bg-slate-50 overflow-hidden">
      {/* Barra de Navegación Superior */}
      <div className="bg-white border-b border-slate-200 shadow-sm shrink-0 z-10 px-2 py-3 flex justify-center gap-2 sm:gap-4 w-full relative">
        <button
          onClick={() => setActiveTab('juego')}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-full font-bold transition-all text-sm sm:text-base ${
            activeTab === 'juego'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          }`}
        >
          <Layers size={18} className="sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Mazo de</span> Juego
        </button>
        <button
          onClick={() => setActiveTab('objetivos')}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-full font-bold transition-all text-sm sm:text-base ${
            activeTab === 'objetivos'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          }`}
        >
          <Target size={18} className="sm:w-5 sm:h-5" />
          Objetivos
        </button>
      </div>

      {/* Área de Contenido (Mantenemos montados ambos componentes para preservar su estado) */}
      <div className="flex-1 relative min-h-0 overflow-hidden">
        <div className={`absolute inset-0 h-full w-full ${activeTab === 'juego' ? 'block' : 'hidden'}`}>
          <MazoJuego />
        </div>
        <div className={`absolute inset-0 h-full w-full ${activeTab === 'objetivos' ? 'block' : 'hidden'}`}>
          <Objetivos />
        </div>
      </div>
    </div>
  );
}

export default App;
