import React from 'react';
import { Search, Filter } from 'lucide-react';

const vehicleRecords = [
  {
    id: 'VH001',
    unit: 'FT-350-01',
    make: 'Ford Transit 350',
    insurance: { status: 'Valid', expiration: '2024-12-15' },
    dot: { status: 'Valid', expiration: '2024-08-20' },
    fireExt: { status: 'Valid', expiration: '2024-06-10' },
    maintenance: { status: 'Due', nextDate: '2024-03-25' },
    safetyInsp: { status: 'Valid', expiration: '2024-05-15' },
  },
  {
    id: 'VH002',
    unit: 'MS-250-02',
    make: 'Mercedes Sprinter',
    insurance: { status: 'Valid', expiration: '2024-11-30' },
    dot: { status: 'Expired', expiration: '2024-02-15' },
    fireExt: { status: 'Valid', expiration: '2024-07-20' },
    maintenance: { status: 'Valid', nextDate: '2024-04-10' },
    safetyInsp: { status: 'Due', expiration: '2024-03-01' },
  },
];

export function VehicleCompliance() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search vehicles..."
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <Search className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
        </div>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Insurance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DOT Cert
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fire Ext.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Maintenance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Safety Insp.
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vehicleRecords.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {vehicle.make}
                    </div>
                    <div className="text-sm text-gray-500">Unit: {vehicle.unit}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ComplianceStatus status={vehicle.insurance} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ComplianceStatus status={vehicle.dot} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ComplianceStatus status={vehicle.fireExt} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ComplianceStatus status={vehicle.maintenance} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ComplianceStatus status={vehicle.safetyInsp} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ComplianceStatus({ status }: { status: { status: string; expiration?: string; nextDate?: string } }) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'valid':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'due':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-1">
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
          status.status
        )}`}
      >
        {status.status}
      </span>
      <div className="text-xs text-gray-500">
        {status.expiration || status.nextDate}
      </div>
    </div>
  );
}