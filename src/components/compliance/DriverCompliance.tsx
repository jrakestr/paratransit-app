import React from 'react';
import { Search, Filter, FileText, Calendar } from 'lucide-react';

const driverRecords = [
  {
    id: 'DR001',
    name: 'John Smith',
    license: { status: 'Valid', expiration: '2024-09-15', type: 'CDL-B' },
    medical: { status: 'Due', expiration: '2024-03-25' },
    drugTest: { status: 'Valid', lastTest: '2024-01-15', nextDue: '2024-07-15' },
    training: { status: 'Valid', completed: '2023-12-10', renewal: '2024-12-10' },
    mvr: { status: 'Valid', lastCheck: '2024-01-20', points: 0 }
  },
  {
    id: 'DR002',
    name: 'Sarah Johnson',
    license: { status: 'Valid', expiration: '2024-11-30', type: 'CDL-B' },
    medical: { status: 'Valid', expiration: '2024-08-15' },
    drugTest: { status: 'Due', lastTest: '2023-07-20', nextDue: '2024-03-20' },
    training: { status: 'Due', completed: '2023-04-15', renewal: '2024-04-15' },
    mvr: { status: 'Valid', lastCheck: '2024-01-20', points: 2 }
  }
];

export function DriverCompliance() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search drivers..."
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <Search className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Driver Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  License
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medical Card
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Drug Test
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Training
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MVR Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {driverRecords.map((driver) => (
                <tr key={driver.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{driver.name}</div>
                    <div className="text-sm text-gray-500">ID: {driver.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ComplianceStatus
                      status={driver.license.status}
                      detail={`${driver.license.type} - Exp: ${driver.license.expiration}`}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ComplianceStatus
                      status={driver.medical.status}
                      detail={`Exp: ${driver.medical.expiration}`}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ComplianceStatus
                      status={driver.drugTest.status}
                      detail={`Next: ${driver.drugTest.nextDue}`}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ComplianceStatus
                      status={driver.training.status}
                      detail={`Renewal: ${driver.training.renewal}`}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ComplianceStatus
                      status={driver.mvr.status}
                      detail={`Points: ${driver.mvr.points}`}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      <FileText className="h-5 w-5" />
                    </button>
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

function ComplianceStatus({ status, detail }: { status: string; detail: string }) {
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
          status
        )}`}
      >
        {status}
      </span>
      <div className="text-xs text-gray-500">{detail}</div>
    </div>
  );
}