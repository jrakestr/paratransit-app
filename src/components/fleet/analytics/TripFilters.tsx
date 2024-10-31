import React from 'react';
import { Calendar } from 'lucide-react';

interface TripFiltersProps {
  dateRange: { start: string; end: string };
  setDateRange: (range: { start: string; end: string }) => void;
  selectedVehicles: string[];
  setSelectedVehicles: (vehicles: string[]) => void;
  selectedDrivers: string[];
  setSelectedDrivers: (drivers: string[]) => void;
}

export function TripFilters({
  dateRange,
  setDateRange,
  selectedVehicles,
  setSelectedVehicles,
  selectedDrivers,
  setSelectedDrivers,
}: TripFiltersProps) {
  // Mock data - would be replaced with actual data from your system
  const vehicles = [
    { id: 'V001', name: 'FT-350-01' },
    { id: 'V002', name: 'MS-250-02' },
    // Add more vehicles
  ];

  const drivers = [
    { id: 'D001', name: 'John Smith' },
    { id: 'D002', name: 'Sarah Johnson' },
    // Add more drivers
  ];

  return (
    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Date Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date Range</label>
          <div className="mt-1 flex space-x-2">
            <div className="relative flex-1">
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) =>
                  setDateRange({ ...dateRange, start: e.target.value })
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
              <Calendar className="absolute right-3 top-2 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative flex-1">
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) =>
                  setDateRange({ ...dateRange, end: e.target.value })
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
              <Calendar className="absolute right-3 top-2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Vehicle Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Vehicles</label>
          <select
            multiple
            value={selectedVehicles}
            onChange={(e) =>
              setSelectedVehicles(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>

        {/* Driver Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Drivers</label>
          <select
            multiple
            value={selectedDrivers}
            onChange={(e) =>
              setSelectedDrivers(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            {drivers.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}