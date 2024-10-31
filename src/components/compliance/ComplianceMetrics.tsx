import React from 'react';
import { Shield, AlertTriangle, Clock, CheckCircle } from 'lucide-react';

interface MetricCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ElementType;
}

export function ComplianceMetrics() {
  const metrics: MetricCard[] = [
    {
      title: 'Overall Compliance',
      value: '94%',
      change: '-2%',
      changeType: 'negative',
      icon: Shield,
    },
    {
      title: 'Critical Alerts',
      value: '3',
      change: '+1',
      changeType: 'negative',
      icon: AlertTriangle,
    },
    {
      title: 'Pending Renewals',
      value: '8',
      change: '5 due this week',
      changeType: 'neutral',
      icon: Clock,
    },
    {
      title: 'Compliant Items',
      value: '156',
      change: '+12',
      changeType: 'positive',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.title}
          className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6"
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
                metric.changeType === 'positive'
                  ? 'text-green-600'
                  : metric.changeType === 'negative'
                  ? 'text-red-600'
                  : 'text-yellow-600'
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