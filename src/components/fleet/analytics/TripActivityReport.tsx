import React, { useState } from 'react';
import { Download, Filter, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { TripActivityTable } from './TripActivityTable';
import { TripMetricsCards } from './TripMetricsCards';
import { TripFilters } from './TripFilters';

export function TripActivityReport() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>([]);

  const handleExport = () => {
    // Implement CSV export functionality
    console.log('Exporting data...');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Trip Activity Report</h2>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {showFilters ? (
              <ChevronUp className="h-4 w-4 ml-2" />
            ) : (
              <ChevronDown className="h-4 w-4 ml-2" />
            )}
          </button>
          <button
            onClick={handleExport}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <TripMetricsCards />

      {/* Filters */}
      {showFilters && (
        <TripFilters
          dateRange={dateRange}
          setDateRange={setDateRange}
          selectedVehicles={selectedVehicles}
          setSelectedVehicles={setSelectedVehicles}
          selectedDrivers={selectedDrivers}
          setSelectedDrivers={setSelectedDrivers}
        />
      )}

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search trips..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm pl-10"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>

      {/* Trip Table */}
      <TripActivityTable
        searchTerm={searchTerm}
        dateRange={dateRange}
        selectedVehicles={selectedVehicles}
        selectedDrivers={selectedDrivers}
      />
    </div>
  );
}