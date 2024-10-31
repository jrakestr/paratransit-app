import React from 'react';
import { Package, AlertTriangle, ShoppingCart, History, Wrench } from 'lucide-react';

export function InventoryCards() {
  const cards = [
    {
      icon: Package,
      title: 'Total Parts',
      value: '2,547',
      color: 'text-blue-500'
    },
    {
      icon: AlertTriangle,
      title: 'Low Stock Items',
      value: '23',
      color: 'text-yellow-500'
    },
    {
      icon: ShoppingCart,
      title: 'Pending Orders',
      value: '12',
      color: 'text-green-500'
    },
    {
      icon: History,
      title: 'Monthly Turnover',
      value: '15.8%',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card) => (
        <div key={card.title} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <card.icon className={`h-6 w-6 ${card.color}`} />
            <h3 className="font-medium text-gray-900">{card.title}</h3>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
        </div>
      ))}
    </div>
  );
}