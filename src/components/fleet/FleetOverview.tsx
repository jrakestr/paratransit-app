import React, { useState } from 'react';
import { FleetMetrics } from './FleetMetrics';
import { VehicleTable } from './VehicleTable';
import { MaintenanceTimeline } from './MaintenanceTimeline';
import { VehicleEvents } from './VehicleEvents';
import { NewVehicleForm } from './forms/NewVehicleForm';
import { MaintenanceForm } from './forms/MaintenanceForm';
import { DriverAssignmentForm } from './forms/DriverAssignmentForm';
import { Calendar, DollarSign, TrendingUp, Wrench, Plus } from 'lucide-react';

export function FleetOverview() {
  const [activeForm, setActiveForm] = useState<'vehicle' | 'maintenance' | 'driver' | null>(null);
  const [showVehicleTable, setShowVehicleTable] = useState(false);

  const handleFormClose = () => {
    setActiveForm(null);
  };

  return (
    <div className="space-y-6">
      {/* Fleet Metrics */}
      <FleetMetrics 
        onShowVehicleTable={() => setShowVehicleTable(true)}
        onScheduleMaintenance={() => setActiveForm('maintenance')} 
      />

      {/* Add New Vehicle Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setActiveForm('vehicle')}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Vehicle
        </button>
      </div>

      {/* Cost Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Maintenance Cost', value: '$12,450', icon: Wrench },
          { label: 'Fuel Cost', value: '$8,320', icon: DollarSign },
          { label: 'Cost per Mile', value: '$0.85', icon: TrendingUp },
          { label: 'Monthly Average', value: '$4,280', icon: Calendar },
        ].map((metric) => (
          <div key={metric.label} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <metric.icon className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-sm text-gray-500">{metric.label}</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">{metric.value}</span>
          </div>
        ))}
      </div>

      {/* Vehicle Table (shown when Total Fleet Size is clicked) */}
      {showVehicleTable && (
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Vehicle Fleet</h3>
            <button
              onClick={() => setShowVehicleTable(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              ×
            </button>
          </div>
          <div className="p-4">
            <VehicleTable onAssignDriver={() => setActiveForm('driver')} />
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      {!showVehicleTable && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vehicle Table - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Active Fleet</h3>
              </div>
              <div className="p-4">
                <VehicleTable onAssignDriver={() => setActiveForm('driver')} />
              </div>
            </div>
          </div>

          {/* Recent Events - Takes up 1 column */}
          <div>
            <VehicleEvents />
          </div>
        </div>
      )}

      {/* Maintenance Timeline */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Maintenance Schedule</h3>
        </div>
        <div className="p-4">
          <MaintenanceTimeline />
        </div>
      </div>

      {/* Modal Forms */}
      {activeForm === 'vehicle' && (
        <NewVehicleForm onClose={handleFormClose} />
      )}
      
      {activeForm === 'maintenance' && (
        <MaintenanceForm onClose={handleFormClose} />
      )}
      
      {activeForm === 'driver' && (
        <DriverAssignmentForm onClose={handleFormClose} />
      )}
    </div>
  );
}