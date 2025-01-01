export const CONFIG = {
  DEX: {
    name: 'pump.fun',
    rpcEndpoint: 'https://api.pump.fun/v1',
    websocket: 'wss://stream.pump.fun'
  },
  
  TRADING: {
    maxSlippage: 0.5,
    maxPositionSize: 5, // % of portfolio
    gasMultiplier: 1.2,
    minLiquidity: 50000,
    tradingEnabled: true
  },

  RISK: {
    maxLossPerTrade: 2, // %
    maxDailyLoss: 15, // %
    autoStopLoss: true,
    trailingStop: 1.5 // %
  },

  MONITORING: {
    priceUpdateInterval: 100, // ms
    volumeThreshold: 100000,
    minHolders: 100
  }
};
