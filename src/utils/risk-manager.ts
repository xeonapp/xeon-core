export class RiskManager {
  private maxPositionSize = 5; // % of portfolio
  private stopLossDefault = 2.5; // %

  calculatePositionSize(
    balance: number,
    risk: number
  ): number {
    return balance * (risk / 100);
  }

  setStopLoss(entry: number, risk: number): number {
    return entry * (1 - risk / 100);
  }
}
