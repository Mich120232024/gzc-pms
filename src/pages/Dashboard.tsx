import React from "react";
import PortfolioView from "../components/specific/PortfolioView";

const Dashboard: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h1>Dashboard</h1>
          <PortfolioView />
        </div>
        <div className="col-md-4">
          <div className="bg-light p-3 border rounded">
            <h3>Sidebar</h3>
            <p>Additional Information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
