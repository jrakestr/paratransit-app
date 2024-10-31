import React, { useState } from 'react';
import { BarChart, Calendar, Clock, Fuel, User } from 'lucide-react';

export function FuelIdleAnalysis() {
  const [analysisType, setAnalysisType] = useState('vehicle');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDriver, setSelectedDriver] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const mockData = {
    fuelConsumption: [
      { date: '2024-03-01', value: 45.2 },
      { date: '2024-03-02', value: 42.8 },
      { date: '2024-03-03', value: 48.5 },
    ],
    idleTime: [
      { date: '2024-03-01', value: 1.5 },
      { date: '2024-03-02', value: 2.1 },
      { date: '2024-03-03', value: 1.8 },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Fuel & Idle Time Analysis</h2>
        <div className="flex space-x-4 mb-4">
          <button
            className={`flex items-center px-4 py-2 rounded ${
              analysisType === 'vehicle'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setAnalysisType('vehicle')}
          >
            <Fuel className="w-4 h-4 mr-2" />
            By Vehicle
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded ${
              analysisType === 'date'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setAnalysisType('date')}
          >
            <Calendar className="w-4 h-4 mr-2" />
            By Date
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded ${
              analysisType === 'driver'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setAnalysisType('driver')}
          >
            <User className="w-4 h-4 mr-2" />
            By Driver
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Fuel className="w-5 h-5 mr-2 text-blue-600" />
            Fuel Consumption
          </h3>
          <div className="h-64 flex items-center justify-center">
            <BarChart className="w-8 h-8 text-gray-400" />
            <span className="ml-2 text-gray-500">Chart will be displayed here</span>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Idle Time
          </h3>
          <div className="h-64 flex items-center justify-center">
            <BarChart className="w-8 h-8 text-gray-400" />
            <span className="ml-2 text-gray-500">Chart will be displayed here</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Analysis Details</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Fuel Consumption</p>
              <p className="text-2xl font-bold text-blue-600">45.5 gal/day</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Average Idle Time</p>
              <p className="text-2xl font-bold text-blue-600">1.8 hrs/day</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Efficiency Score</p>
              <p className="text-2xl font-bold text-green-600">85%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}