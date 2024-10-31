import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  name: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
  onClick?: () => void;
}

export function StatsCard({ name, value, change, changeType, icon: Icon, onClick }: StatsCardProps) {
  return (
    <div
      className={`relative bg-white rounded-lg shadow-sm p-6 ${
        onClick ? 'cursor-pointer transition-colors hover:bg-gray-50' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="rounded-lg bg-blue-500 p-3 flex-shrink-0">
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-500 truncate">{name}</p>
          <div className="mt-2 flex flex-wrap items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <p
              className={`ml-2 text-sm font-medium truncate ${
                changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {change}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}