import React from 'react';
import { Truck, Wrench, AlertTriangle, Gauge } from 'lucide-react';

interface FleetMetricsProps {
  onShowVehicleTable: () => void;
  onScheduleMaintenance: () => void;
}

export function FleetMetrics({ onShowVehicleTable, onScheduleMaintenance }: FleetMetricsProps) {
  const metrics = [
    {
      name: 'Total Fleet Size',
      value: '30',
      icon: Truck,
      description: 'Active vehicles',
      change: '+2 from last month',
      action: onShowVehicleTable
    },
    {
      name: 'Maintenance Due',
      value: '4',
      icon: Wrench,
      description: 'Within 7 days',
      change: 'Critical: 2',
      alert: true,
      action: onScheduleMaintenance
    },
    {
      name: 'Fleet Utilization',
      value: '87%',
      icon: Gauge,
      description: 'Current rate',
      change: '+5% from last month'
    },
    {
      name: 'Service Alerts',
      value: '3',
      icon: AlertTriangle,
      description: 'Open tickets',
      change: '2 high priority',
      alert: true
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.name}
          className={`relative bg-white rounded-lg shadow-sm p-6 ${
            metric.action ? 'cursor-pointer transition-colors hover:bg-gray-50' : ''
          }`}
          onClick={metric.action}
        >
          <div className="flex items-start">
            <div className={`absolute rounded-lg p-3 ${
              metric.alert ? 'bg-red-500' : 'bg-blue-500'
            }`}>
              <metric.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div className="ml-16 w-full">
              <p className="text-sm font-medium text-gray-500 truncate">{metric.name}</p>
              <div className="mt-2">
                <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
                <p className={`text-xs mt-1 ${
                  metric.alert ? 'text-red-600' : 'text-blue-600'
                }`}>
                  {metric.change}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}