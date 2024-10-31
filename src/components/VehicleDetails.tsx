import React, { useState } from 'react';
import {
  GaugeIcon,
  ThermometerIcon,
  BatteryIcon,
  Navigation2Icon,
  TruckIcon,
  ClockIcon,
  AlertTriangleIcon,
  Wrench,
  Fuel,
  Activity,
  Edit2,
  X,
  Calendar,
  FileText,
  Tag,
  Key
} from 'lucide-react';

interface VehicleDetailsProps {
  vehicleId: string;
}

export function VehicleDetails({ vehicleId }: VehicleDetailsProps) {
  const [isEditing, setIsEditing] = useState(false);

  // Mock Samsara API data - would be replaced with actual API integration
  const vehicleData = {
    id: vehicleId,
    basicInfo: {
      number: 'FT-350-01',
      make: 'Ford',
      model: 'Transit 350',
      year: '2023',
      vin: '1FTBW2CM7MKA12345',
      plate: 'ABC1234',
      registrationExpiry: '2024-12-15',
      lastInspection: '2024-02-15',
      nextInspection: '2024-03-15'
    },
    status: {
      engineTemp: "194°F",
      oilPressure: "40 PSI",
      fuelLevel: "75%",
      batteryVoltage: "12.8V",
      speed: "0 MPH",
      location: "Main Depot",
      lastUpdate: "2 minutes ago",
      engineHours: "1,234",
      odometer: "45,678",
      defLevel: "95%",
      ambientTemp: "72°F",
      intakeTemp: "98°F"
    },
    maintenance: {
      lastService: '2024-02-15',
      nextService: '2024-03-15',
      oilLife: "65%",
      tirePressures: {
        frontLeft: "35 PSI",
        frontRight: "36 PSI",
        rearLeft: "38 PSI",
        rearRight: "38 PSI"
      }
    },
    specifications: {
      fuelType: 'Diesel',
      capacity: '15 passengers',
      gvwr: '9,500 lbs',
      length: '22 feet',
      height: '9 feet',
      wheelbase: '148 inches'
    }
  };

  return (
    <div className="bg-white border-l border-gray-200 shadow-lg h-full overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {vehicleData.basicInfo.year} {vehicleData.basicInfo.make} {vehicleData.basicInfo.model}
          </h2>
          <p className="text-sm text-gray-500">Unit: {vehicleData.basicInfo.number}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Edit2 className="h-4 w-4 mr-2" />
            Edit Vehicle
          </button>
        </div>
      </div>

      <div className="px-6 py-4 space-y-6">
        {/* Basic Information */}
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Vehicle Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Key className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-500">VIN:</span>
                <span className="ml-2 font-medium">{vehicleData.basicInfo.vin}</span>
              </div>
              <div className="flex items-center text-sm">
                <Tag className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-500">License Plate:</span>
                <span className="ml-2 font-medium">{vehicleData.basicInfo.plate}</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-500">Registration Expires:</span>
                <span className="ml-2 font-medium">{vehicleData.basicInfo.registrationExpiry}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Activity className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-500">Odometer:</span>
                <span className="ml-2 font-medium">{vehicleData.status.odometer} mi</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-500">Engine Hours:</span>
                <span className="ml-2 font-medium">{vehicleData.status.engineHours} hrs</span>
              </div>
              <div className="flex items-center text-sm">
                <FileText className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-500">Last Inspection:</span>
                <span className="ml-2 font-medium">{vehicleData.basicInfo.lastInspection}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time Status */}
        <section className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Real-time Status</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <ThermometerIcon className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-500">Engine Temp</span>
              </div>
              <p className="text-xl font-semibold">{vehicleData.status.engineTemp}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <GaugeIcon className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-500">Oil Pressure</span>
              </div>
              <p className="text-xl font-semibold">{vehicleData.status.oilPressure}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Fuel className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-500">Fuel Level</span>
              </div>
              <p className="text-xl font-semibold">{vehicleData.status.fuelLevel}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <BatteryIcon className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-500">Battery</span>
              </div>
              <p className="text-xl font-semibold">{vehicleData.status.batteryVoltage}</p>
            </div>
          </div>
        </section>

        {/* Maintenance Status */}
        <section className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Maintenance Status</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium">Next Service Due</span>
                </div>
                <span className="text-sm font-medium">{vehicleData.maintenance.nextService}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(vehicleData.maintenance.tirePressures).map(([position, pressure]) => (
                <div key={position} className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">{position}</p>
                  <p className="text-lg font-medium">{pressure}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Specifications */}
        <section className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Specifications</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(vehicleData.specifications).map(([key, value]) => (
              <div key={key} className="flex items-center text-sm">
                <span className="text-gray-500">{key}:</span>
                <span className="ml-2 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Last Update Timestamp */}
        <div className="text-sm text-gray-500 text-right border-t pt-4">
          Last updated: {vehicleData.status.lastUpdate}
        </div>
      </div>
    </div>
  );
}