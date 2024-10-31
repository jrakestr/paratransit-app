import React from 'react';
import { ComplianceOverview } from './ComplianceOverview';
import { VehicleCompliance } from './VehicleCompliance';
import { DriverCompliance } from './DriverCompliance';
import { IncidentMonitoring } from './IncidentMonitoring';
import { Tabs } from './Tabs';

export function CompliancePage() {
  const [activeTab, setActiveTab] = React.useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'vehicles', label: 'Vehicle Records' },
    { id: 'drivers', label: 'Driver Records' },
    { id: 'incidents', label: 'Incident Monitoring' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'vehicles':
        return <VehicleCompliance />;
      case 'drivers':
        return <DriverCompliance />;
      case 'incidents':
        return <IncidentMonitoring />;
      default:
        return <ComplianceOverview />;
    }
  };

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Compliance Management</h1>
        <div className="mt-4">
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>
        <div className="mt-6">{renderContent()}</div>
      </div>
    </div>
  );
}