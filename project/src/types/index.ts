export interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  yield: number;
  shares: number;
  dividends: number;
  quarterlyDividends: string[];
  trend: number[];
}

export interface MetricData {
  label: string;
  value: string;
  change: number;
  changePercent: number;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}