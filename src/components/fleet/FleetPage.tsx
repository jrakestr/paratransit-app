import React, { useState } from 'react';
import { VehicleList } from './VehicleList';
import { VehicleDetails } from './VehicleDetails';
import { FleetAnalytics } from './FleetAnalytics';
import { FuelIdleAnalysis } from './FuelIdleAnalysis';
import { NewVehicleForm } from './forms/NewVehicleForm';
import { Plus } from 'lucide-react';

export function FleetPage() {
  const [activeTab, setActiveTab] = useState('vehicles');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [showNewVehicleForm, setShowNewVehicleForm] = useState(false);

  const tabs = [
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'fuel', label: 'Fuel & Idle Analysis' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'vehicles':
        return (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button
                onClick={() => setShowNewVehicleForm(true)}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Vehicle
              </button>
            </div>
            <div className="flex gap-6">
              <div className={`${selectedVehicleId ? 'w-2/3' : 'w-full'}`}>
                <VehicleList 
                  onVehicleSelect={setSelectedVehicleId}
                  selectedVehicleId={selectedVehicleId}
                />
              </div>
              {selectedVehicleId && (
                <div className="w-1/3">
                  <VehicleDetails vehicleId={selectedVehicleId} />
                </div>
              )}
            </div>
          </div>
        );
      case 'analytics':
        return <FleetAnalytics />;
      case 'fuel':
        return <FuelIdleAnalysis />;
      default:
        return null;
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Fleet Management</h1>
        
        <div className="mt-4 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id !== 'vehicles') {
                    setSelectedVehicleId(null);
                  }
                }}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-6">
          {renderContent()}
        </div>
      </div>

      {showNewVehicleForm && (
        <NewVehicleForm onClose={() => setShowNewVehicleForm(false)} />
      )}
    </div>
  );
}