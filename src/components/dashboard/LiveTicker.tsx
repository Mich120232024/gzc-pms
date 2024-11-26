// src/components/dashboard/LiveTicker.tsx
interface FXTicker {
  pair: string;
  price: number;
  change: number;
}

export const LiveTicker = () => {
  const fxTickers: FXTicker[] = [
    { pair: "EUR/USD", price: 1.0934, change: -0.15 },
    { pair: "GBP/USD", price: 1.2672, change: 0.25 },
    { pair: "USD/JPY", price: 149.45, change: -0.32 },
    { pair: "USD/CHF", price: 0.8865, change: 0.18 },
    { pair: "AUD/USD", price: 0.6584, change: -0.45 },
  ];

  return (
    <div className="grid grid-cols-5 gap-3 mb-6 overflow-x-auto pb-2">
      {fxTickers.map((ticker) => (
        <div
          key={ticker.pair}
          className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl transition-all duration-200 hover:bg-gray-800/80 hover:transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
        >
          <div className="text-sm text-gray-400 font-medium">{ticker.pair}</div>
          <div className="text-xl font-bold tracking-tight">{ticker.price}</div>
          <div
            className={`text-sm font-medium ${
              ticker.change >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {ticker.change >= 0 ? "+" : ""}
            {ticker.change}%
          </div>
        </div>
      ))}
    </div>
  );
};
