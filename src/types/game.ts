// Game Types and Interfaces

export interface Position {
  x: number;
  y: number;
}

export interface BotStats {
  iq: number;
  stress: number;
  charisma: number;
  pnl: number;
  winPercentage: number;
  totalLiquidity: number;
}

export interface Bot {
  id: string;
  name: string;
  position: Position;
  homeTerminal: Position;
  stats: BotStats;
  orbs: number;
  color: string;
  direction: Direction;
  script: MovementScript;
  message?: string;
  messageTimeout?: number;
}

export interface Terminal {
  id: string;
  position: Position;
  botId: string;
  color: string;
}

export interface Orb {
  id: string;
  position: Position;
}

export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

export interface MovementScript {
  type: 'PATROL' | 'SEEK_ORBS' | 'RETURN_HOME';
  path?: Position[];
  currentTarget?: Position;
  patrolPoints?: Position[];
  seekRadius?: number;
}

export interface GameConfig {
  GRID_COLS: number;
  GRID_ROWS: number;
  maxOrbs: number;
  tickInterval: number;
  mobile: boolean;
}

export interface GameState {
  config: GameConfig;
  bots: Bot[];
  terminals: Terminal[];
  orbs: Orb[];
  cellSize: number;
  boardWidth: number;
  boardHeight: number;
  isRunning: boolean;
  tick: number;
}

export interface CollisionResult {
  winner: Bot;
  loser: Bot;
  orbsTransferred: number;
}

export interface GameEvent {
  type: 'ORB_COLLECTED' | 'ORBS_DEPOSITED' | 'COLLISION' | 'MESSAGE';
  botId: string;
  data: any;
  timestamp: number;
}

// Trading related types
export interface TradingPair {
  base: string;
  quote: string;
  minIQ: number;
}

export interface TradingIndicator {
  name: string;
  minIQ: number;
}

export const TRADING_PAIRS: TradingPair[] = [
  { base: 'BTC', quote: 'USDC', minIQ: 1 },
  { base: 'ETH', quote: 'USDC', minIQ: 3 },
  { base: 'SOL', quote: 'USDC', minIQ: 5 },
  { base: 'DOGE', quote: 'USDC', minIQ: 8 },
  { base: 'PEPE', quote: 'USDC', minIQ: 12 }
];

export const TRADING_INDICATORS: TradingIndicator[] = [
  { name: 'Simple Moving Average', minIQ: 1 },
  { name: 'RSI', minIQ: 3 },
  { name: 'MACD', minIQ: 5 },
  { name: 'Bollinger Bands', minIQ: 8 },
  { name: 'Fibonacci Retracement', minIQ: 12 }
];