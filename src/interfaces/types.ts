export interface TradeSignal {
  pair: string;
  type: 'buy' | 'sell';
  price: number;
  confidence: number;
  timestamp: number;
}

export interface PoolData {
  address: string;
  liquidity: number;
  volume: number;
  price: number;
  holders: number;
}
