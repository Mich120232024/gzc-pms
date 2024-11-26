// src/components/portfolio/PortfolioTable.tsx
export const PortfolioTable = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">FX Portfolio</h2>
        <select className="bg-gray-700/50 border-none rounded-lg p-2 px-4">
          <option>All Accounts</option>
          <option>Account 1</option>
          <option>Account 2</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr>
              <th className="text-left p-3">Currency Pair</th>
              <th className="text-right p-3">Position</th>
              <th className="text-right p-3">Entry Price</th>
              <th className="text-right p-3">Current Price</th>
              <th className="text-right p-3">P/L</th>
              <th className="text-right p-3">P/L %</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700/50">
              <td className="p-3">EUR/USD</td>
              <td className="p-3 text-right">1,000,000</td>
              <td className="p-3 text-right">1.0920</td>
              <td className="p-3 text-right">1.0934</td>
              <td className="p-3 text-right text-green-400">+1,400</td>
              <td className="p-3 text-right text-green-400">+0.14%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
