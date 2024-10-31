import React, { useState } from 'react';
import { BarChart, Activity, Fuel, Clock, TrendingUp, Gauge } from 'lucide-react';
import { TripActivityReport } from './analytics/TripActivityReport';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function FleetAnalytics() {
  const [activeView, setActiveView] = useState<'overview' | 'trips'>('overview');

  // Sample data for the charts
  const performanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Total Trips',
        data: [125, 132, 143, 128, 147, 135, 142],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const fuelData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Fuel Consumption (gal)',
        data: [85, 92, 78, 88, 90, 82, 79],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const idleTimeData = {
    labels: ['Vehicle 1', 'Vehicle 2', 'Vehicle 3', 'Vehicle 4', 'Vehicle 5'],
    datasets: [{
      label: 'Idle Time (hours)',
      data: [2.5, 1.8, 3.2, 1.5, 2.8],
      backgroundColor: '#10b981',
      borderRadius: 4
    }]
  };

  if (activeView === 'trips') {
    return <TripActivityReport />;
  }

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex justify-end">
        <button
          onClick={() => setActiveView('trips')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View Trip Activity
        </button>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Total Distance</p>
              <p className="text-2xl font-bold">12,458 mi</p>
            </div>
            <Activity className="h-8 w-8 text-blue-500" />
          </div>
          <div className="text-sm text-green-600">+5.2% from last week</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Fuel Efficiency</p>
              <p className="text-2xl font-bold">8.5 MPG</p>
            </div>
            <Fuel className="h-8 w-8 text-red-500" />
          </div>
          <div className="text-sm text-red-600">-2.1% from last week</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Idle Time</p>
              <p className="text-2xl font-bold">124.5 hrs</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-500" />
          </div>
          <div className="text-sm text-yellow-600">+1.8% from last week</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Operating Cost</p>
              <p className="text-2xl font-bold">$0.85/mi</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
          <div className="text-sm text-green-600">-3.2% from last week</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Trends</h3>
          <div className="h-80">
            <Line
              data={performanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Fuel Consumption Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Fuel Consumption</h3>
          <div className="h-80">
            <Line
              data={fuelData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Idle Time Chart */}
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Vehicle Idle Time Analysis</h3>
          <div className="h-80">
            <Bar
              data={idleTimeData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}