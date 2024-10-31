import React from 'react';
import { Modal } from '../shared/Modal';

interface DriverAssignmentFormProps {
  onClose: () => void;
}

export function DriverAssignmentForm({ onClose }: DriverAssignmentFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <Modal title="Assign Driver" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Driver
            </label>
            <select 
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Select a driver</option>
              <option value="JS001">John Smith - CDL-B</option>
              <option value="SJ002">Sarah Johnson - CDL-B</option>
              <option value="MW003">Mike Wilson - CDL-B</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vehicle
            </label>
            <select 
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Select a vehicle</option>
              <option value="FT-350-01">FT-350-01 - Ford Transit 350</option>
              <option value="MS-250-02">MS-250-02 - Mercedes Sprinter</option>
              <option value="DG-CAR-03">DG-CAR-03 - Dodge Grand Caravan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Assignment Start Date
            </label>
            <input
              type="date"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Shift
            </label>
            <select 
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="morning">Morning (6:00 AM - 2:00 PM)</option>
              <option value="afternoon">Afternoon (2:00 PM - 10:00 PM)</option>
              <option value="night">Night (10:00 PM - 6:00 AM)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter any additional notes..."
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
          >
            Assign Driver
          </button>
        </div>
      </form>
    </Modal>
  );
}