import React from 'react';
import { Activity, Clock, MapPin, Users } from 'lucide-react';

interface MetricCard {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ElementType;
  onClick?: () => void;
}

export function TripMetricsCards() {
  const metrics: MetricCard[] = [
    {
      title: 'Total Distance',
      value: '12,458 mi',
      change: '+5.2%',
      changeType: 'increase',
      icon: Activity,
    },
    {
      title: 'Total Duration',
      value: '845 hrs',
      change: '+3.1%',
      changeType: 'increase',
      icon: Clock,
    },
    {
      title: 'Active Vehicles',
      value: '28',
      change: '-2',
      changeType: 'decrease',
      icon: MapPin,
    },
    {
      title: 'Active Drivers',
      value: '24',
      change: '+1',
      changeType: 'increase',
      icon: Users,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.title}
          className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 cursor-pointer hover:bg-gray-50"
          onClick={metric.onClick}
        >
          <dt>
            <div className="absolute rounded-md bg-blue-500 p-3">
              <metric.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              {metric.title}
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                metric.changeType === 'increase'
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {metric.change}
            </p>
          </dd>
        </div>
      ))}
    </div>
  );
}