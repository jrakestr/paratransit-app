import React from 'react';
import { MapPin, AlertTriangle, CheckCircle } from 'lucide-react';

interface VehicleListProps {
  onVehicleSelect: (vehicleId: string) => void;
  selectedVehicleId: string | null;
}

export function VehicleList({ onVehicleSelect, selectedVehicleId }: VehicleListProps) {
  const vehicles = [
    {
      id: 'VH001',
      number: 'FT-350-01',
      make: 'Ford',
      model: 'Transit 350',
      year: '2023',
      status: 'Active',
      location: 'Main Depot - A1',
      mileage: '34,892',
      lastService: '2024-02-15',
      nextService: '2024-03-15',
      driver: 'John Smith'
    },
    {
      id: 'VH002',
      number: 'MS-250-02',
      make: 'Mercedes',
      model: 'Sprinter',
      year: '2022',
      status: 'Maintenance',
      location: 'Service Center',
      mileage: '56,231',
      lastService: '2024-01-20',
      nextService: '2024-03-20',
      driver: 'Unassigned'
    },
    {
      id: 'VH003',
      number: 'DG-CAR-03',
      make: 'Dodge',
      model: 'Grand Caravan',
      year: '2024',
      status: 'Active',
      location: 'North Station - B3',
      mileage: '12,458',
      lastService: '2024-02-01',
      nextService: '2024-04-01',
      driver: 'Sarah Johnson'
    },
    {
      id: 'VH004',
      number: 'TY-SIE-04',
      make: 'Toyota',
      model: 'Sienna',
      year: '2023',
      status: 'Active',
      location: 'South Depot - C2',
      mileage: '28,567',
      lastService: '2024-02-10',
      nextService: '2024-04-10',
      driver: 'Mike Wilson'
    },
    {
      id: 'VH005',
      number: 'FT-350-05',
      make: 'Ford',
      model: 'Transit 350',
      year: '2023',
      status: 'Active',
      location: 'Main Depot - A2',
      mileage: '41,234',
      lastService: '2024-02-20',
      nextService: '2024-03-20',
      driver: 'Emily Davis'
    },
    {
      id: 'VH006',
      number: 'MS-250-06',
      make: 'Mercedes',
      model: 'Sprinter',
      year: '2022',
      status: 'Out of Service',
      location: 'Service Center',
      mileage: '62,789',
      lastService: '2024-01-15',
      nextService: '2024-03-15',
      driver: 'Unassigned'
    },
    {
      id: 'VH007',
      number: 'CV-EXP-07',
      make: 'Chevrolet',
      model: 'Express 3500',
      year: '2023',
      status: 'Active',
      location: 'East Station - D1',
      mileage: '32,456',
      lastService: '2024-02-05',
      nextService: '2024-04-05',
      driver: 'Robert Chen'
    },
    {
      id: 'VH008',
      number: 'TY-SIE-08',
      make: 'Toyota',
      model: 'Sienna',
      year: '2024',
      status: 'Active',
      location: 'West Depot - E2',
      mileage: '15,789',
      lastService: '2024-03-01',
      nextService: '2024-05-01',
      driver: 'Lisa Thompson'
    },
    {
      id: 'VH009',
      number: 'FT-350-09',
      make: 'Ford',
      model: 'Transit 350',
      year: '2023',
      status: 'Maintenance',
      location: 'Service Center',
      mileage: '38,901',
      lastService: '2024-02-25',
      nextService: '2024-03-25',
      driver: 'Unassigned'
    },
    {
      id: 'VH010',
      number: 'MS-250-10',
      make: 'Mercedes',
      model: 'Sprinter',
      year: '2022',
      status: 'Active',
      location: 'North Station - B1',
      mileage: '52,345',
      lastService: '2024-01-10',
      nextService: '2024-03-10',
      driver: 'David Kim'
    },
    {
      id: 'VH011',
      number: 'CV-EXP-11',
      make: 'Chevrolet',
      model: 'Express 3500',
      year: '2023',
      status: 'Active',
      location: 'South Depot - C1',
      mileage: '29,678',
      lastService: '2024-02-15',
      nextService: '2024-04-15',
      driver: 'Maria Garcia'
    },
    {
      id: 'VH012',
      number: 'TY-SIE-12',
      make: 'Toyota',
      model: 'Sienna',
      year: '2024',
      status: 'Active',
      location: 'Main Depot - A3',
      mileage: '18,234',
      lastService: '2024-03-05',
      nextService: '2024-05-05',
      driver: 'James Wilson'
    },
    {
      id: 'VH013',
      number: 'FT-350-13',
      make: 'Ford',
      model: 'Transit 350',
      year: '2023',
      status: 'Active',
      location: 'East Station - D2',
      mileage: '35,678',
      lastService: '2024-02-28',
      nextService: '2024-03-28',
      driver: 'Anna Martinez'
    },
    {
      id: 'VH014',
      number: 'MS-250-14',
      make: 'Mercedes',
      model: 'Sprinter',
      year: '2022',
      status: 'Out of Service',
      location: 'Service Center',
      mileage: '59,012',
      lastService: '2024-01-25',
      nextService: '2024-03-25',
      driver: 'Unassigned'
    },
    {
      id: 'VH015',
      number: 'CV-EXP-15',
      make: 'Chevrolet',
      model: 'Express 3500',
      year: '2023',
      status: 'Active',
      location: 'West Depot - E1',
      mileage: '31,234',
      lastService: '2024-02-20',
      nextService: '2024-04-20',
      driver: 'Thomas Lee'
    }
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vehicle Info
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Driver
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vehicles.map((vehicle) => (
              <tr 
                key={vehicle.id} 
                onClick={() => onVehicleSelect(vehicle.id)}
                className={`cursor-pointer hover:bg-gray-50 ${
                  selectedVehicleId === vehicle.id ? 'bg-blue-50' : ''
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </div>
                    <div className="text-sm text-gray-500">
                      Unit: {vehicle.number}
                    </div>
                    <div className="text-sm text-gray-500">
                      Mileage: {vehicle.mileage}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    vehicle.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : vehicle.status === 'Maintenance'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {vehicle.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1.5 text-gray-400" />
                    {vehicle.location}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {vehicle.driver}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {new Date(vehicle.nextService) < new Date() ? (
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    )}
                    <div>
                      <div className="text-sm text-gray-900">
                        Next: {vehicle.nextService}
                      </div>
                      <div className="text-xs text-gray-500">
                        Last: {vehicle.lastService}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}