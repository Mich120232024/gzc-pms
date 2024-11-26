// src/components/layout/MainLayout.tsx
'use client';
import React from 'react';
import { LayoutDashboard, LineChart, Settings, Users } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Trading', icon: LineChart },
    { name: 'Settings', icon: Settings },
    { name: 'Profile', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-800">
        <div className="flex h-16 items-center px-6">
          <span className="text-xl font-bold text-white">GZC PMS</span>
        </div>
        <nav className="px-3 mt-6">
          {navigation.map(item => {
            const Icon = item.icon;
            return (
              
                key={item.name}
                href="#"
                className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md mb-1"
              >
                <Icon className="h-5 w-5 mr-3" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>
      </div>
      <div className="pl-64">
        <main className="py-6 px-8">
          {children}
        </main>
      </div>
    </div>
  );
}