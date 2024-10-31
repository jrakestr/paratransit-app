import React from 'react';
import { Bell, Clock } from 'lucide-react';

interface Event {
  id: string;
  type: string;
  timestamp: string;
  description: string;
  severity: 'info' | 'warning' | 'critical';
}

interface VehicleEventsProps {
  vehicleId?: string;
}

export function VehicleEvents({ vehicleId }: VehicleEventsProps) {
  // This would be replaced with actual Samsara API data filtered by vehicleId
  const events: Event[] = [
    {
      id: 'evt1',
      type: 'Engine Fault',
      timestamp: '2024-02-28T14:30:00Z',
      description: 'Check Engine Light Activated',
      severity: 'critical'
    },
    {
      id: 'evt2',
      type: 'Geofence',
      timestamp: '2024-02-28T14:15:00Z',
      description: 'Vehicle entered depot zone',
      severity: 'info'
    },
    {
      id: 'evt3',
      type: 'Speed Alert',
      timestamp: '2024-02-28T14:00:00Z',
      description: 'Vehicle exceeded speed limit',
      severity: 'warning'
    }
  ];

  const getSeverityColor = (severity: Event['severity']) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <div className="flex items-center">
          <Bell className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Recent Events</h3>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {events.map((event) => (
          <li key={event.id} className="px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(event.severity)}`}>
                    {event.type}
                  </span>
                  <span className="ml-2 flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(event.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-900">{event.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}