import React from 'react';
import {
  X,
  Package,
  DollarSign,
  TrendingUp,
  Truck,
  Building,
  AlertTriangle,
  Clock,
  Tool,
} from 'lucide-react';

interface PartDetailsPanelProps {
  partId: string;
  onClose: () => void;
}

export function PartDetailsPanel({ partId, onClose }: PartDetailsPanelProps) {
  // Mock data - would be replaced with actual part details
  const partDetails = {
    id: partId,
    number: 'FIL-001',
    name: 'Oil Filter',
    description: 'High-performance oil filter for Transit vans',
    category: 'Filters',
    manufacturer: 'FilterCo',
    inventory: {
      quantity: 15,
      minQuantity: 10,
      maxQuantity: 30,
      reorderPoint: 12,
      location: 'A-123',
    },
    pricing: {
      current: 12.99,
      history: [
        { date: '2024-01', price: 11.99 },
        { date: '2024-02', price: 12.99 },
      ],
    },
    usage: {
      last30Days: 8,
      last90Days: 24,
      averageMonthly: 8,
    },
    maintenance: [
      {
        date: '2024-02-15',
        vehicle: 'FT-350-01',
        type: 'Replacement',
      },
      {
        date: '2024-02-01',
        vehicle: 'MS-250-02',
        type: 'Replacement',
      },
    ],
    compatibility: [
      { model: 'Ford Transit 350', years: '2020-2024' },
      { model: 'Ford Transit 250', years: '2020-2024' },
    ],
    supplier: {
      name: 'AutoParts Inc',
      contact: 'John Doe',
      phone: '(555) 123-4567',
      email: 'john@autoparts.com',
      leadTime: '3-5 days',
    },
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-medium text-gray-900">{partDetails.name}</h2>
          <p className="text-sm text-gray-500">Part #{partDetails.number}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* Inventory Status */}
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Inventory Status
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Package className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-500">Current Stock</span>
              </div>
              <p className="text-xl font-semibold">{partDetails.inventory.quantity}</p>
              {partDetails.inventory.quantity <= partDetails.inventory.reorderPoint && (
                <div className="mt-2 flex items-center text-yellow-600">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  <span className="text-sm">Low Stock Alert</span>
                </div>
              )}
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-500">Monthly Usage</span>
              </div>
              <p className="text-xl font-semibold">{partDetails.usage.averageMonthly}</p>
            </div>
          </div>
        </section>

        {/* Price History */}
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Price History
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-500">Current Price</span>
              </div>
              <p className="text-lg font-semibold">
                ${partDetails.pricing.current.toFixed(2)}
              </p>
            </div>
            <div className="space-y-2">
              {partDetails.pricing.history.map((item) => (
                <div
                  key={item.date}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-500">{item.date}</span>
                  <span className="font-medium">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compatible Vehicles */}
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Compatible Vehicles
          </h3>
          <div className="space-y-2">
            {partDetails.compatibility.map((vehicle) => (
              <div
                key={vehicle.model}
                className="flex items-center bg-gray-50 p-3 rounded-lg"
              >
                <Truck className="h-5 w-5 text-blue-500 mr-3" />
                <div>
                  <p className="font-medium">{vehicle.model}</p>
                  <p className="text-sm text-gray-500">Years: {vehicle.years}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maintenance History */}
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Maintenance
          </h3>
          <div className="space-y-3">
            {partDetails.maintenance.map((record, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-50 p-3 rounded-lg"
              >
                <Tool className="h-5 w-5 text-blue-500 mr-3" />
                <div>
                  <p className="font-medium">{record.vehicle}</p>
                  <p className="text-sm text-gray-500">
                    {record.type} - {record.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supplier Information */}
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Supplier Details
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <Building className="h-5 w-5 text-blue-500 mr-2" />
              <span className="font-medium">{partDetails.supplier.name}</span>
            </div>
            <div className="space-y-2 text-sm">
              <p>Contact: {partDetails.supplier.contact}</p>
              <p>Phone: {partDetails.supplier.phone}</p>
              <p>Email: {partDetails.supplier.email}</p>
              <div className="flex items-center mt-3 text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>Lead Time: {partDetails.supplier.leadTime}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex justify-between">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            Update Inventory
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
            Create Purchase Order
          </button>
        </div>
      </div>
    </div>
  );
}