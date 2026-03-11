import { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

// Cargar todas las imágenes estáticamente usando Vite
const imageModules = import.meta.glob('./assets/objetivos/*.png', { eager: true, import: 'default' });

export default function Objetivos() {
  const [deck1, setDeck1] = useState<string[]>([]);
  const [deck2, setDeck2] = useState<string[]>([]);
  const [deck3, setDeck3] = useState<string[]>([]);

  const [currentObjectives, setCurrentObjectives] = useState<[string | null, string | null, string | null]>([null, null, null]);

  useEffect(() => {
    const d1: string[] = [];
    const d2: string[] = [];
    const d3: string[] = [];

    for (const path in imageModules) {
      const url = imageModules[path] as string;
      const filename = path.split('/').pop();
      if (!filename) continue;

      if (filename.startsWith('1.')) d1.push(url);
      else if (filename.startsWith('2.')) d2.push(url);
      else if (filename.startsWith('3.')) d3.push(url);
    }

    setDeck1(d1);
    setDeck2(d2);
    setDeck3(d3);
  }, []);

  const shuffle = () => {
    const pickRandom = (deck: string[]) => deck.length > 0 ? deck[Math.floor(Math.random() * deck.length)] : null;
    
    setCurrentObjectives([
       pickRandom(deck1) ?? null,
       pickRandom(deck2) ?? null,
       pickRandom(deck3) ?? null
    ]);
  };

  // Inicializar en el primer render después de cargar los mazos
  useEffect(() => {
    if (deck1.length > 0 && deck2.length > 0 && deck3.length > 0 && currentObjectives.every(o => o === null)) {
      shuffle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deck1, deck2, deck3]);

  return (
    <div className="h-full overflow-hidden bg-slate-50 flex flex-col items-center p-2 pb-4 md:p-8">
      {/* Controles */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-2 md:mb-8 bg-white p-2 px-3 md:p-5 rounded-xl md:rounded-2xl shadow-sm border border-slate-200 shrink-0">
        <div className="font-bold text-slate-600 text-sm md:text-xl">
          Objetivos Actuales
        </div>
        <button
          onClick={shuffle}
          className="flex items-center gap-2 bg-slate-800 text-white px-5 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-slate-900 shadow-md active:scale-95 transition-all"
        >
          <RotateCcw size={16} className="md:w-5 md:h-5" />
          <span className="hidden sm:inline">Revolver</span>
        </button>
      </div>

      {/* Grid de Objetivos */}
      <div className="w-full max-w-6xl flex-1 flex flex-col min-h-0">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-8 flex-1 h-full items-stretch justify-center md:content-center min-h-0">
          {[1, 2, 3].map((num, i) => (
            <div key={num} className="relative flex-1 min-h-0 w-full md:h-full md:max-h-[70vh] max-w-sm mx-auto flex items-center justify-center overflow-hidden">
              {currentObjectives[i] ? (
                <img 
                  src={currentObjectives[i]!} 
                  alt={`Objetivo ${num}`} 
                  className="max-w-full max-h-full object-contain drop-shadow-xl rounded-2xl"
                />
              ) : (
                <div className="w-full max-w-[80%] aspect-[2/3] rounded-[2rem] border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50 opacity-50 mx-auto">
                  <span className="text-slate-400 font-medium">Cargando...</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
