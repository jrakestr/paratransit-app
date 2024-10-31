import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TripActivityTableProps {
  searchTerm: string;
  dateRange: { start: string; end: string };
  selectedVehicles: string[];
  selectedDrivers: string[];
}

interface Trip {
  id: string;
  vehicleId: string;
  vehicleName: string;
  driverId: string;
  driverName: string;
  startTime: string;
  endTime: string;
  duration: string;
  distance: string;
  startLocation: string;
  endLocation: string;
  status: 'completed' | 'in-progress' | 'cancelled';
  fuelUsed: string;
  avgSpeed: string;
}

export function TripActivityTable({
  searchTerm,
  dateRange,
  selectedVehicles,
  selectedDrivers,
}: TripActivityTableProps) {
  const [sortField, setSortField] = useState<keyof Trip>('startTime');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Mock data - would be replaced with Samsara API data
  const trips: Trip[] = [
    {
      id: 'T001',
      vehicleId: 'V001',
      vehicleName: 'FT-350-01',
      driverId: 'D001',
      driverName: 'John Smith',
      startTime: '2024-03-10 08:00:00',
      endTime: '2024-03-10 10:30:00',
      duration: '2.5 hrs',
      distance: '85 mi',
      startLocation: 'Main Depot',
      endLocation: 'North Station',
      status: 'completed',
      fuelUsed: '8.2 gal',
      avgSpeed: '34 mph',
    },
    // Add more mock data as needed
  ];

  const handleSort = (field: keyof Trip) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: keyof Trip }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    );
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                { key: 'startTime', label: 'Date/Time' },
                { key: 'vehicleName', label: 'Vehicle' },
                { key: 'driverName', label: 'Driver' },
                { key: 'duration', label: 'Duration' },
                { key: 'distance', label: 'Distance' },
                { key: 'startLocation', label: 'Start Location' },
                { key: 'endLocation', label: 'End Location' },
                { key: 'status', label: 'Status' },
                { key: 'fuelUsed', label: 'Fuel Used' },
                { key: 'avgSpeed', label: 'Avg Speed' },
              ].map((column) => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key as keyof Trip)}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    {column.label}
                    <SortIcon field={column.key as keyof Trip} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {trips.map((trip) => (
              <tr key={trip.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(trip.startTime).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {trip.vehicleName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {trip.driverName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {trip.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {trip.distance}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {trip.startLocation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {trip.endLocation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      trip.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : trip.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {trip.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {trip.fuelUsed}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {trip.avgSpeed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}