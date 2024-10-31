import React from 'react';
import { Shield, AlertTriangle, Clock, CheckCircle } from 'lucide-react';

const metrics = [
  {
    name: 'Overall Compliance',
    value: '94%',
    icon: Shield,
    change: '-2%',
    changeType: 'negative' as const,
  },
  {
    name: 'Critical Alerts',
    value: '3',
    icon: AlertTriangle,
    change: '+1',
    changeType: 'negative' as const,
  },
  {
    name: 'Pending Renewals',
    value: '8',
    icon: Clock,
    change: '5 due this week',
    changeType: 'warning' as const,
  },
  {
    name: 'Compliant Items',
    value: '156',
    icon: CheckCircle,
    change: '+12',
    changeType: 'positive' as const,
  },
];

export function ComplianceOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6"
          >
            <dt>
              <div className="absolute rounded-md bg-blue-500 p-3">
                <metric.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {metric.name}
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

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Renewals</h3>
          <div className="space-y-4">
            {[
              { item: "Driver's Medical Card - John Smith", date: '2024-03-25' },
              { item: 'Vehicle Insurance - Unit FT-350-01', date: '2024-04-01' },
              { item: 'DOT Certification - Unit MS-250-02', date: '2024-04-15' },
            ].map((renewal) => (
              <div
                key={renewal.item}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
              >
                <span className="text-sm font-medium text-gray-900">{renewal.item}</span>
                <span className="text-sm text-gray-500">{renewal.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Alerts</h3>
          <div className="space-y-4">
            {[
              {
                title: 'Drug Test Overdue',
                description: 'Random testing requirement for Q1 not met',
                severity: 'high',
              },
              {
                title: 'Insurance Update Required',
                description: 'Policy renewal needed for 2 vehicles',
                severity: 'medium',
              },
              {
                title: 'Training Certification Expiring',
                description: '5 drivers need refresher training',
                severity: 'low',
              },
            ].map((alert) => (
              <div
                key={alert.title}
                className="flex items-start p-3 bg-gray-50 rounded-md"
              >
                <AlertTriangle
                  className={`h-5 w-5 mr-3 ${
                    alert.severity === 'high'
                      ? 'text-red-500'
                      : alert.severity === 'medium'
                      ? 'text-yellow-500'
                      : 'text-blue-500'
                  }`}
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{alert.title}</h4>
                  <p className="text-sm text-gray-500">{alert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}