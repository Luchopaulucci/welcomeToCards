import React, { useState } from 'react';
import { Settings2, User, TreePine, Waves, HardHat, Copy, Play, RotateCcw } from 'lucide-react';
import { initializeGame, advanceTurn, type GameState, type Card, type ActionType } from './game/deck';

const ActionColors: Record<ActionType, string> = {
  valla: 'bg-slate-100 text-slate-800 border-slate-300',
  agente: 'bg-purple-100 text-purple-800 border-purple-300',
  paisajista: 'bg-green-100 text-green-800 border-green-300',
  piscina: 'bg-blue-100 text-blue-800 border-blue-300',
  trabajo: 'bg-orange-100 text-orange-800 border-orange-300',
  bis: 'bg-pink-100 text-pink-800 border-pink-300',
};

const ActionIcons: Record<ActionType, React.ElementType> = {
  valla: Settings2,
  agente: User,
  paisajista: TreePine,
  piscina: Waves,
  trabajo: HardHat,
  bis: Copy,
};

function CartaVisible({ pile }: { pile: Card[] }) {
  if (pile.length === 0) {
    return (
      <div className="relative flex-1 min-h-0 w-full md:h-full md:aspect-[2/3] md:max-h-[60vh] max-w-sm rounded-[2rem] border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50 opacity-50 mx-auto">
        <span className="text-slate-400 font-medium">Vacío</span>
      </div>
    );
  }

  const currentCard = pile[0];       // Número actual (carta visible)
  const nextCard = pile.length > 1 ? pile[1] : null; // Acción (dorso de la carta que está abajo)

  const miniAction = currentCard.accionSiguiente; // Acción de la carta actual
  const mainAction = nextCard ? nextCard.accionSiguiente : null; // Acción de la siguiente carta

  const BgColorClass = mainAction ? ActionColors[mainAction] : 'bg-slate-100 text-slate-400 border-slate-300';
  const MainIcon = mainAction ? ActionIcons[mainAction] : null;
  const MiniIcon = ActionIcons[miniAction];

  return (
    <div className={`relative flex-1 min-h-0 w-full md:h-full md:aspect-[2/3] md:max-h-[60vh] max-w-sm mx-auto rounded-[2rem] shadow-lg flex flex-col md:flex-col overflow-hidden border-2 transform transition-all duration-300 hover:-translate-y-1 ${BgColorClass}`}>
      
      {/* Mini Icono (Esquina Superior Derecha): pila[0].accion */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-white/80 p-2 md:p-3 rounded-xl shadow-sm backdrop-blur-sm border border-white/50">
        <MiniIcon size={24} className="opacity-90" />
      </div>

      {/* Número Principal: pila[0].numero */}
      <div className="flex-1 flex items-center justify-center bg-white/60 backdrop-blur-sm relative border-b border-white/40">
        <div className="absolute top-2 left-3 md:top-4 md:left-4 text-xl md:text-3xl font-bold text-slate-400/50 select-none">{currentCard.numero}</div>
        <div className="absolute bottom-2 right-3 md:bottom-4 md:right-4 text-xl md:text-3xl font-bold text-slate-400/50 rotate-180 select-none">{currentCard.numero}</div>
        
        <span className="text-6xl sm:text-7xl md:text-[10rem] font-black text-slate-800 drop-shadow-sm tracking-tighter select-none">
          {currentCard.numero}
        </span>
      </div>

      {/* Acción del Turno (Grande): pila[1].accion */}
      <div className="flex-[0.8] flex flex-col items-center justify-center p-2 md:p-4">
        {mainAction && MainIcon ? (
          <div className="flex flex-col items-center justify-center space-y-1 md:space-y-4">
            <MainIcon className="drop-shadow-md opacity-90 w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28" strokeWidth={1.5} />
            <span className="font-extrabold tracking-widest uppercase text-xs md:text-2xl opacity-90">{mainAction}</span>
          </div>
        ) : (
          <div className="text-center opacity-50">
            <span className="font-semibold text-xl">FIN</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MazoJuego() {
  const [gameState, setGameState] = useState<GameState>(() => initializeGame());

  const handleNextTurn = () => {
    setGameState(prev => advanceTurn(prev));
  };

  const handleRestart = () => {
    if (window.confirm('¿Estás seguro de que quieres reiniciar la partida?')) {
      setGameState(initializeGame());
    }
  };

  const remaining = gameState.pile1.length;
  const isGameOver = remaining === 0;

  return (
    <div className="h-full overflow-hidden bg-slate-50 flex flex-col items-center p-2 pb-4 md:p-8">
      {/* Controles Info */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-2 md:mb-8 bg-white p-2 px-3 md:p-5 rounded-xl md:rounded-2xl shadow-sm border border-slate-200 shrink-0">
        <div className="font-bold text-slate-600 text-sm md:text-xl">
          Cartas: <span className="text-blue-600 text-lg md:text-2xl ml-1 md:ml-2">{remaining}</span>
        </div>
        <div className="flex gap-2 md:gap-4">
           <button
            onClick={handleRestart}
            className="p-2 md:p-3 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors md:border border-slate-200"
            title="Reiniciar"
          >
            <RotateCcw size={20} className="md:w-6 md:h-6" />
          </button>
          {!isGameOver && (
            <button
              onClick={handleNextTurn}
              className="flex items-center gap-2 bg-slate-800 text-white px-5 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-slate-900 shadow-md active:scale-95 transition-all"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <Play fill="currentColor" size={16} className="md:w-5 md:h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid de Cartas */}
      {isGameOver ? (
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl">
           <div className="w-20 h-20 md:w-32 md:h-32 bg-slate-200 rounded-full flex items-center justify-center mb-4 md:mb-8">
              <RotateCcw className="text-slate-500" size={32} />
           </div>
           <h2 className="text-2xl md:text-4xl font-black text-slate-800 mb-6">¡Partida Finalizada!</h2>
           <button
              onClick={handleRestart}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg md:text-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Jugar de nuevo
            </button>
        </div>
      ) : (
        <div className="w-full max-w-6xl flex-1 flex flex-col min-h-0">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-8 flex-1 h-full items-stretch justify-center md:content-center min-h-0">
            <CartaVisible pile={gameState.pile1} />
            <CartaVisible pile={gameState.pile2} />
            <CartaVisible pile={gameState.pile3} />
          </div>
        </div>
      )}
    </div>
  );
}
