import React from 'react';
import { BarChart3, TrendingUp, Users, AlertTriangle, ArrowRight, Bus, Wrench } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { ComplianceTable } from './ComplianceTable'';
import { PerformanceChart } from './PerformanceChart';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const stats = [
    {
      name: 'Total Trips',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: BarChart3,
    },
    {
      name: 'Fleet Utilization',
      value: '87%',
      change: '+5.2%',
      changeType: 'positive' as const,
      icon: Bus,
      onClick: () => onNavigate('fleet')
    },
    {
      name: 'Active Drivers',
      value: '24',
      change: '-2',
      changeType: 'negative' as const,
      icon: Users,
    },
    {
      name: 'Compliance Score',
      value: '94%',
      change: '-3%',
      changeType: 'negative' as const,
      icon: AlertTriangle,
      onClick: () => onNavigate('compliance')
    },
  ];
/* push performance chart down and add TaskTimeline above */
  /* fix margins and padding of the compliance table, text is too close to the edge */

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Stats Cards */}
        <div className="py-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatsCard key={stat.name} {...stat} />
            ))}
          </div>
        </div>
        
        {/* Performance Chart */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Performance Overview</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <PerformanceChart />
          </div>
        </div>

        {/* Maintenance Alerts */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Maintenance Alerts</h2>
            <button
              onClick={() => onNavigate('fleet')}
              className="flex items-center text-sm text-blue-600 hover:text-blue-800"
            >
              View All Maintenance
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="space-y-4">
              {[
                {
                  vehicle: 'MS-250-02',
                  type: 'Preventive Maintenance',
                  due: '2024-03-20',
                  priority: 'High'
                },
                {
                  vehicle: 'FT-350-01',
                  type: 'Safety Inspection',
                  due: '2024-03-25',
                  priority: 'Medium'
                }
              ].map((alert) => (
                <div
                  key={alert.vehicle}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <Wrench className={`h-5 w-5 mr-3 ${
                      alert.priority === 'High' ? 'text-red-500' : 'text-yellow-500'
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {alert.vehicle} - {alert.type}
                      </p>
                      <p className="text-sm text-gray-500">Due: {alert.due}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      alert.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {alert.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Compliance Table */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Compliance Status</h2>
          <div className="bg-white rounded-lg shadow">
            <ComplianceTable />
          </div>
        </div>
      </div>
    </div>
  );
}