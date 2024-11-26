import React from "react";
import { Button } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to GZC_PMS</h1>
      <p>Your platform for portfolio management.</p>
      <Button variant="primary" href="/dashboard">
        Go to Dashboard
      </Button>
    </div>
  );
};

export default Home;
