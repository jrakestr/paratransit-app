import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

// Define interfaces for type safety and better code documentation
interface ComplianceItem {
  category: string;
  items: {
    name: string;
    identifier: string;
    status: 'Valid' | 'Expiring' | 'Expired';
    expiration: string;
    daysRemaining: number;
  }[];
}

// Comprehensive compliance data structure
const complianceData: ComplianceItem[] = [
  {
    category: 'Vehicle Insurance & Certifications',
    items: [
      {
        name: 'Commercial Vehicle Insurance',
        identifier: 'FT-350-01',
        status: 'Valid',
        expiration: '2024-12-15',
        daysRemaining: 245
      },
      {
        name: 'DOT Certification',
        identifier: 'MS-250-02',
        status: 'Expiring',
        expiration: '2024-04-30',
        daysRemaining: 14
      }
    ]
  },
  {
    category: 'Driver Compliance',
    items: [
      {
        name: 'CDL License',
        identifier: 'John Smith',
        status: 'Valid',
        expiration: '2024-09-20',
        daysRemaining: 180
      },
      {
        name: 'Medical Certificate',
        identifier: 'Sarah Johnson',
        status: 'Expired',
        expiration: '2024-02-15',
        daysRemaining: 0
      }
    ]
  },
  {
    category: 'Company Certifications',
    items: [
      {
        name: 'Business License',
        identifier: 'PT-2024-001',
        status: 'Valid',
        expiration: '2025-01-20',
        daysRemaining: 280
      },
      {
        name: 'Safety Certification',
        identifier: 'SAF-2024-002',
        status: 'Valid',
        expiration: '2024-08-10',
        daysRemaining: 116
      }
    ]
  }
];

export function ComplianceTable() {
  // Helper function to determine status icon and color
  const getStatusIndicator = (status: string, daysRemaining: number) => {
    switch (status) {
      case 'Valid':
        return {
          icon: CheckCircle,
          colorClass: 'text-green-500',
          bgClass: 'bg-green-100',
          textClass: 'text-green-800'
        };
      case 'Expiring':
        return {
          icon: Clock,
          colorClass: 'text-yellow-500',
          bgClass: 'bg-yellow-100',
          textClass: 'text-yellow-800'
        };
      case 'Expired':
        return {
          icon: AlertTriangle,
          colorClass: 'text-red-500',
          bgClass: 'bg-red-100',
          textClass: 'text-red-800'
        };
      default:
        return {
          icon: CheckCircle,
          colorClass: 'text-gray-500',
          bgClass: 'bg-gray-100',
          textClass: 'text-gray-800'
        };
    }
  };

  return (
    <div className="mt-4 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          {/* Iterate through each compliance category */}
          {complianceData.map((category) => (
            <div key={category.category} className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {category.category}
              </h3>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                      Item
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Identifier
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Expiration
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Days Remaining
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {category.items.map((item) => {
                    const statusIndicator = getStatusIndicator(
                      item.status,
                      item.daysRemaining
                    );
                    const StatusIcon = statusIndicator.icon;

                    return (
                      <tr key={`${item.name}-${item.identifier}`}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                          <div className="font-medium text-gray-900">{item.name}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.identifier}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <div className="flex items-center">
                            <StatusIcon
                              className={`h-5 w-5 mr-2 ${statusIndicator.colorClass}`}
                            />
                            <span
                              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${statusIndicator.bgClass} ${statusIndicator.textClass}`}
                            >
                              {item.status}
                            </span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.expiration}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              item.daysRemaining <= 30
                                ? 'bg-red-100 text-red-800'
                                : item.daysRemaining <= 90
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {item.daysRemaining} days
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}