import React from 'react';
import {
  GaugeIcon,
  ThermometerIcon,
  BatteryIcon,
  Navigation2Icon,
  TruckIcon,
  Clock,
  AlertTriangle,
  Wrench,
  Fuel,
  Activity
} from 'lucide-react';

interface VehicleDetailsProps {
  vehicleId: string;
}

export function VehicleDetails({ vehicleId }: VehicleDetailsProps) {
  // Mock Samsara API data - would be replaced with actual API integration
  const vehicleData = {
    id: vehicleId,
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
    diagnostics: {
      engineLoad: "45%",
      coolantTemp: "190°F",
      oilLife: "65%",
      tirePressures: {
        frontLeft: "35 PSI",
        frontRight: "36 PSI",
        rearLeft: "38 PSI",
        rearRight: "38 PSI"
      }
    },
    alerts: [
      { id: 1, type: "warning", message: "Oil change due in 500 miles" },
      { id: 2, type: "info", message: "Tire rotation scheduled next week" }
    ],
    faultCodes: [
      { code: "P0128", description: "Coolant Thermostat", severity: "low" }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Real-time Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <BatteryIcon className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm text-gray-500">Battery</span>
          </div>
          <p className="text-xl font-semibold">{vehicleData.status.batteryVoltage}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Navigation2Icon className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm text-gray-500">Location</span>
          </div>
          <p className="text-xl font-semibold">{vehicleData.status.location}</p>
        </div>
      </div>

      {/* Engine Hours and Service */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-sm text-gray-500">Engine Hours:</span>
          <span className="ml-2 font-medium">{vehicleData.status.engineHours} hrs</span>
        </div>
        <span className="text-sm text-gray-500">
          Last updated: {vehicleData.status.lastUpdate}
        </span>
      </div>
    </div>
  );
}