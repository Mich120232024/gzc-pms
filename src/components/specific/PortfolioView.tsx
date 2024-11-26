import React from "react";

interface PortfolioItem {
  id: number;
  name: string;
  value: number;
}

const PortfolioView: React.FC = () => {
  // Sample portfolio data
  const portfolioItems: PortfolioItem[] = [
    { id: 1, name: "Stock A", value: 1200 },
    { id: 2, name: "Stock B", value: 850 },
    { id: 3, name: "Stock C", value: 960 },
  ];

  return (
    <div>
      <h2>Portfolio Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Asset Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {portfolioItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioView;
