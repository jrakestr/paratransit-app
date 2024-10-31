import React, { useState } from 'react';
import { AlertTriangle, Search, Filter, FileText, Camera, Play, User, Clock, MapPin, Video } from 'lucide-react';

interface Incident {
  id: string;
  date: string;
  type: string;
  driver: string;
  vehicle: string;
  description: string;
  status: 'Open' | 'Under Review' | 'Resolved';
  severity: 'High' | 'Medium' | 'Low';
  location: string;
  videoId?: string;
  videoSource?: 'Samsara' | 'Lytx';
  driverScore?: number;
  harshEvents?: number;
  speedingEvents?: number;
  coordinates?: [number, number];
}

const incidents: Incident[] = [
  {
    id: 'INC001',
    date: '2024-02-15',
    type: 'Harsh Braking',
    driver: 'John Smith',
    vehicle: 'FT-350-01',
    description: 'Harsh braking event detected on Main St.',
    status: 'Under Review',
    severity: 'Medium',
    location: '123 Main St, Springfield',
    videoId: 'SAM-123456',
    videoSource: 'Samsara',
    driverScore: 85,
    harshEvents: 2,
    speedingEvents: 1,
    coordinates: [42.3601, -71.0589]
  },
  {
    id: 'INC002',
    date: '2024-02-20',
    type: 'Accident',
    driver: 'Sarah Johnson',
    vehicle: 'MS-250-02',
    description: 'Minor collision in parking lot',
    status: 'Open',
    severity: 'High',
    location: '456 Oak Ave, Springfield',
    videoId: 'LYX-789012',
    videoSource: 'Lytx',
    driverScore: 92,
    harshEvents: 0,
    speedingEvents: 0,
    coordinates: [42.3505, -71.0678]
  },
  {
    id: 'INC003',
    date: '2024-02-25',
    type: 'Speeding',
    driver: 'Mike Wilson',
    vehicle: 'DG-CAR-03',
    description: '15mph over speed limit on Highway 1',
    status: 'Open',
    severity: 'Medium',
    location: 'Highway 1, Mile Marker 45',
    videoId: 'SAM-345678',
    videoSource: 'Samsara',
    driverScore: 78,
    harshEvents: 1,
    speedingEvents: 3,
    coordinates: [42.3429, -71.0892]
  }
];

export function IncidentMonitoring() {
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoView = (incident: Incident) => {
    setSelectedIncident(incident);
    setShowVideo(true);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search incidents..."
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <Search className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
            <Camera className="h-4 w-4 mr-2" />
            Request Video
          </button>
        </div>
      </div>

      {/* Incidents List */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Incident Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Driver Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Video
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {incidents.map((incident) => (
                <tr key={incident.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <AlertTriangle className={`h-5 w-5 mr-3 ${
                        incident.severity === 'High' ? 'text-red-500' : 
                        incident.severity === 'Medium' ? 'text-yellow-500' : 'text-blue-500'
                      }`} />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {incident.type}
                        </div>
                        <div className="text-sm text-gray-500">
                          {incident.description}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {incident.date}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {incident.driver}
                        </div>
                        <div className="text-sm text-gray-500">
                          Vehicle: {incident.vehicle}
                        </div>
                        <div className="mt-1">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            incident.driverScore >= 90 ? 'bg-green-100 text-green-800' :
                            incident.driverScore >= 80 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            Score: {incident.driverScore}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <div className="text-sm text-gray-900">{incident.location}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      incident.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                      incident.status === 'Open' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {incident.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {incident.videoId && (
                      <button
                        onClick={() => handleVideoView(incident)}
                        className="flex items-center text-blue-600 hover:text-blue-900"
                      >
                        <Video className="h-4 w-4 mr-1" />
                        View
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
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

      {/* Video Modal */}
      {showVideo && selectedIncident && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Incident Video - {selectedIncident.id}
              </h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg mb-4">
                {/* Video player would be integrated here */}
                <div className="flex items-center justify-center h-full">
                  <div className="text-white text-center">
                    <Play className="h-12 w-12 mx-auto mb-2" />
                    <p>Video from {selectedIncident.videoSource}</p>
                    <p className="text-sm text-gray-400">ID: {selectedIncident.videoId}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Incident Details</h4>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-xs text-gray-500">Date & Time</dt>
                      <dd className="text-sm">{selectedIncident.date}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500">Location</dt>
                      <dd className="text-sm">{selectedIncident.location}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500">Description</dt>
                      <dd className="text-sm">{selectedIncident.description}</dd>
                    </div>
                  </dl>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Driver Metrics</h4>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-xs text-gray-500">Safety Score</dt>
                      <dd className="text-sm">{selectedIncident.driverScore}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500">Harsh Events (30 days)</dt>
                      <dd className="text-sm">{selectedIncident.harshEvents}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500">Speeding Events (30 days)</dt>
                      <dd className="text-sm">{selectedIncident.speedingEvents}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}