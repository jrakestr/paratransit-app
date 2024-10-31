import React from 'react';
import { TaskTimeline } from '../components/dashboard/tasks/TaskTimeline';
import { FleetMetrics } from '../components/fleet/FleetMetrics';
import { ComplianceMetrics } from '../components/compliance/ComplianceMetrics';
import { FleetPerformanceChart } from '../components/fleet/analytics/FleetPerformanceChart';

export function Dashboard() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Task Timeline */}
        <div className="mb-8">
          <TaskTimeline />
        </div>

        {/* Performance Overview */}
        <div className="mb-8 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Overview</h2>
          
          {/* Fleet Performance - Full Width */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-5 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-gray-900">Fleet Performance</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                    Daily
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                    Weekly
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                    Monthly
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <FleetMetrics 
                onShowVehicleTable={() => {}}
                onScheduleMaintenance={() => {}}
              />
              <div className="mt-6">
                <FleetPerformanceChart />
              </div>
            </div>
          </div>

          {/* Compliance Status - Full Width */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-5 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-gray-900">Compliance Status</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                    Active
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                    Pending
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                    All
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ComplianceMetrics />
              <div className="mt-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Driver License Renewal</p>
                          <p className="text-xs text-gray-500 mt-1">Due in 15 days</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vehicle Utilization */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-base font-medium text-gray-900 mb-4">Vehicle Utilization</h3>
            <div className="space-y-4">
              {['FT-350-01', 'MS-250-02', 'DG-CAR-03'].map((vehicle) => (
                <div key={vehicle} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{vehicle}</span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${Math.random() * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {Math.floor(Math.random() * 100)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Schedule */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-base font-medium text-gray-900 mb-4">Upcoming Maintenance</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Oil Change</p>
                    <p className="text-xs text-gray-500">Vehicle: FT-350-01</p>
                  </div>
                  <span className="text-sm text-gray-600">Mar 25</span>
                </div>
              ))}
            </div>
          </div>

          {/* Driver Status */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-base font-medium text-gray-900 mb-4">Driver Status</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-500">On Route</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}