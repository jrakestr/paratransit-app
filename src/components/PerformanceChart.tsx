import React from 'react';

const performanceData = {
  trips: [423, 445, 478, 486, 491, 503, 521],
  revenue: [12400, 13100, 13800, 14200, 14500, 15100, 15600],
  dates: ['Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26'],
};

export function PerformanceChart() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-500">Weekly Overview</h3>
          <p className="text-2xl font-semibold text-gray-900">
            {performanceData.trips[performanceData.trips.length - 1]} trips
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
            Trips
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
            Revenue
          </button>
        </div>
      </div>

      <div className="relative h-[200px] mt-4">
        <div className="absolute inset-0 flex items-end justify-between">
          {performanceData.trips.map((value, index) => {
            const height = (value / Math.max(...performanceData.trips)) * 100;
            return (
              <div key={index} className="flex flex-col items-center w-full">
                <div
                  className="w-12 bg-blue-500 rounded-t"
                  style={{ height: `${height}%` }}
                />
                <div className="mt-2 text-xs text-gray-500">
                  {performanceData.dates[index]}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500">Avg. Daily Trips</p>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            {Math.round(
              performanceData.trips.reduce((a, b) => a + b) / performanceData.trips.length
            )}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500">Growth</p>
          <p className="mt-1 text-xl font-semibold text-green-600">+12.4%</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500">Completion Rate</p>
          <p className="mt-1 text-xl font-semibold text-gray-900">98.3%</p>
        </div>
      </div>
    </div>
  );
}