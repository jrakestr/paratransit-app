import React from 'react';
import { Calendar, Wrench, AlertCircle, CheckCircle } from 'lucide-react';

const maintenanceSchedule = [
  {
    id: 1,
    vehicle_id: 'VH002',
    vehicle_info: 'Mercedes Sprinter (MS-250-02)',
    service_type: 'Preventive Maintenance',
    date: '2024-03-20',
    mileage: '60,000',
    status: 'Scheduled',
    priority: 'High',
    notes: 'Full service including brake inspection'
  },
  {
    id: 2,
    vehicle_id: 'VH001',
    vehicle_info: 'Ford Transit 350 (FT-350-01)',
    service_type: 'Safety Inspection',
    date: '2024-03-25',
    mileage: '35,000',
    status: 'Scheduled',
    priority: 'Medium',
    notes: 'Annual DOT inspection'
  },
  {
    id: 3,
    vehicle_id: 'VH003',
    vehicle_info: 'Dodge Grand Caravan (DG-CAR-03)',
    service_type: 'Tire Rotation',
    date: '2024-04-01',
    mileage: '46,000',
    status: 'Pending',
    priority: 'Low',
    notes: 'Include brake pad inspection'
  }
];

export function MaintenanceTimeline() {
  const getPriorityIcon = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'medium':
        return <Wrench className="h-4 w-4 text-yellow-500" />;
      case 'low':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Maintenance Schedule
        </h3>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {maintenanceSchedule.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== maintenanceSchedule.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                        {getPriorityIcon(event.priority)}
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {event.vehicle_info}
                        </p>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {event.service_type} - {event.notes}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          Mileage: {event.mileage}
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.date}
                        </div>
                        <span className={`inline-flex mt-1 items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          event.status === 'Scheduled' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}