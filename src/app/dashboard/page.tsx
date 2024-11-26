// src/app/dashboard/page.tsx
"use client";
import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { LiveTicker } from "@/components/dashboard/LiveTicker";
import { PortfolioTable } from "@/components/portfolio/PortfolioTable";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <MainLayout>
      <LiveTicker />
      <PortfolioTable />

      {/* Trading Modules */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
        <div className="border-b border-gray-700/50">
          <div className="flex gap-1 p-1">
            {["Orders", "Positions", "Executions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === tab.toLowerCase()
                    ? "bg-gray-700/80 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/40"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6 min-h-[300px]">
          <div className="text-gray-400">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} module
            coming soon...
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
