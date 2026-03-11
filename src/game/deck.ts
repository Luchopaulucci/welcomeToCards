export type ActionType = 'valla' | 'agente' | 'paisajista' | 'piscina' | 'trabajo' | 'bis';

export interface Card {
  id: number;
  numero: number;
  accionSiguiente: ActionType;
}

const OFFICIAL_DECK: Card[] = [
  { id: 1, numero: 1, accionSiguiente: 'valla' },
  { id: 2, numero: 1, accionSiguiente: 'agente' },
  { id: 3, numero: 1, accionSiguiente: 'paisajista' },
  { id: 4, numero: 2, accionSiguiente: 'piscina' },
  { id: 5, numero: 2, accionSiguiente: 'trabajo' },
  { id: 6, numero: 2, accionSiguiente: 'bis' },
  { id: 7, numero: 3, accionSiguiente: 'valla' },
  { id: 8, numero: 3, accionSiguiente: 'agente' },
  { id: 9, numero: 3, accionSiguiente: 'paisajista' },
  { id: 10, numero: 3, accionSiguiente: 'valla' },
  { id: 11, numero: 4, accionSiguiente: 'piscina' },
  { id: 12, numero: 4, accionSiguiente: 'trabajo' },
  { id: 13, numero: 4, accionSiguiente: 'bis' },
  { id: 14, numero: 4, accionSiguiente: 'agente' },
  { id: 15, numero: 4, accionSiguiente: 'paisajista' },
  { id: 16, numero: 5, accionSiguiente: 'valla' },
  { id: 17, numero: 5, accionSiguiente: 'agente' },
  { id: 18, numero: 5, accionSiguiente: 'paisajista' },
  { id: 19, numero: 5, accionSiguiente: 'piscina' },
  { id: 20, numero: 5, accionSiguiente: 'trabajo' },
  { id: 21, numero: 5, accionSiguiente: 'bis' },
  { id: 22, numero: 6, accionSiguiente: 'valla' },
  { id: 23, numero: 6, accionSiguiente: 'agente' },
  { id: 24, numero: 6, accionSiguiente: 'paisajista' },
  { id: 25, numero: 6, accionSiguiente: 'valla' },
  { id: 26, numero: 6, accionSiguiente: 'agente' },
  { id: 27, numero: 6, accionSiguiente: 'paisajista' },
  { id: 28, numero: 6, accionSiguiente: 'piscina' },
  { id: 29, numero: 7, accionSiguiente: 'trabajo' },
  { id: 30, numero: 7, accionSiguiente: 'bis' },
  { id: 31, numero: 7, accionSiguiente: 'valla' },
  { id: 32, numero: 7, accionSiguiente: 'agente' },
  { id: 33, numero: 7, accionSiguiente: 'paisajista' },
  { id: 34, numero: 7, accionSiguiente: 'valla' },
  { id: 35, numero: 7, accionSiguiente: 'agente' },
  { id: 36, numero: 7, accionSiguiente: 'paisajista' },
  { id: 37, numero: 8, accionSiguiente: 'piscina' },
  { id: 38, numero: 8, accionSiguiente: 'trabajo' },
  { id: 39, numero: 8, accionSiguiente: 'bis' },
  { id: 40, numero: 8, accionSiguiente: 'valla' },
  { id: 41, numero: 8, accionSiguiente: 'agente' },
  { id: 42, numero: 8, accionSiguiente: 'paisajista' },
  { id: 43, numero: 8, accionSiguiente: 'valla' },
  { id: 44, numero: 8, accionSiguiente: 'agente' },
  { id: 45, numero: 9, accionSiguiente: 'paisajista' },
  { id: 46, numero: 9, accionSiguiente: 'piscina' },
  { id: 47, numero: 9, accionSiguiente: 'trabajo' },
  { id: 48, numero: 9, accionSiguiente: 'bis' },
  { id: 49, numero: 9, accionSiguiente: 'valla' },
  { id: 50, numero: 9, accionSiguiente: 'agente' },
  { id: 51, numero: 9, accionSiguiente: 'paisajista' },
  { id: 52, numero: 9, accionSiguiente: 'valla' },
  { id: 53, numero: 10, accionSiguiente: 'agente' },
  { id: 54, numero: 10, accionSiguiente: 'paisajista' },
  { id: 55, numero: 10, accionSiguiente: 'piscina' },
  { id: 56, numero: 10, accionSiguiente: 'trabajo' },
  { id: 57, numero: 10, accionSiguiente: 'bis' },
  { id: 58, numero: 10, accionSiguiente: 'valla' },
  { id: 59, numero: 10, accionSiguiente: 'agente' },
  { id: 60, numero: 11, accionSiguiente: 'paisajista' },
  { id: 61, numero: 11, accionSiguiente: 'valla' },
  { id: 62, numero: 11, accionSiguiente: 'agente' },
  { id: 63, numero: 11, accionSiguiente: 'paisajista' },
  { id: 64, numero: 11, accionSiguiente: 'piscina' },
  { id: 65, numero: 11, accionSiguiente: 'trabajo' },
  { id: 66, numero: 12, accionSiguiente: 'bis' },
  { id: 67, numero: 12, accionSiguiente: 'valla' },
  { id: 68, numero: 12, accionSiguiente: 'agente' },
  { id: 69, numero: 12, accionSiguiente: 'paisajista' },
  { id: 70, numero: 12, accionSiguiente: 'valla' },
  { id: 71, numero: 13, accionSiguiente: 'agente' },
  { id: 72, numero: 13, accionSiguiente: 'paisajista' },
  { id: 73, numero: 13, accionSiguiente: 'piscina' },
  { id: 74, numero: 13, accionSiguiente: 'trabajo' },
  { id: 75, numero: 14, accionSiguiente: 'bis' },
  { id: 76, numero: 14, accionSiguiente: 'valla' },
  { id: 77, numero: 14, accionSiguiente: 'agente' },
  { id: 78, numero: 15, accionSiguiente: 'paisajista' },
  { id: 79, numero: 15, accionSiguiente: 'valla' },
  { id: 80, numero: 15, accionSiguiente: 'agente' },
  { id: 81, numero: 8, accionSiguiente: 'paisajista' },
];

/**
 * Shuffles an array using the Fisher-Yates algorithm
 */
function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Generates a full mixed deck of 81 cards
 */
export function generateDeck(): Card[] {
  return shuffle(OFFICIAL_DECK);
}

export interface GameState {
  pile1: Card[];
  pile2: Card[];
  pile3: Card[];
  discard1: Card[];
  discard2: Card[];
  discard3: Card[];
}

export function initializeGame(): GameState {
  const fullDeck = generateDeck();
  
  return {
    pile1: fullDeck.slice(0, 27),
    pile2: fullDeck.slice(27, 54),
    pile3: fullDeck.slice(54, 81),
    discard1: [],
    discard2: [],
    discard3: []
  };
}

export function advanceTurn(state: GameState): GameState {
  // If piles are empty, we can't advance normally
  if (state.pile1.length === 0 && state.pile2.length === 0 && state.pile3.length === 0) {
    return state;
  }

  return {
    ...state,
    // Move the top card of each pile to its corresponding discard pile
    pile1: state.pile1.slice(1),
    pile2: state.pile2.slice(1),
    pile3: state.pile3.slice(1),
    discard1: state.pile1.length > 0 ? [state.pile1[0], ...state.discard1] : state.discard1,
    discard2: state.pile2.length > 0 ? [state.pile2[0], ...state.discard2] : state.discard2,
    discard3: state.pile3.length > 0 ? [state.pile3[0], ...state.discard3] : state.discard3,
  };
}
