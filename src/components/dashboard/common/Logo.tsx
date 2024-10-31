import React from 'react';
import { Bus } from 'lucide-react';

interface LogoProps {
  collapsed?: boolean;
}

export function Logo({ collapsed }: LogoProps) {
  return (
    <div className="flex items-center">
      <Bus className="h-8 w-8 text-blue-600" />
      {!collapsed && (
        <span className="ml-2 text-xl font-bold text-gray-900">
          ParaTransit Pro
        </span>
      )}
    </div>
  );
}