import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

interface PartsTableProps {
  searchTerm: string;
  selectedCategory: string | null;
  onPartSelect: (partId: string) => void;
  selectedPartId: string | null;
}

interface Part {
  id: string;
  number: string;
  name: string;
  category: string;
  quantity: number;
  minQuantity: number;
  price: number;
  supplier: string;
  lastOrdered: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export function PartsTable({
  searchTerm,
  selectedCategory,
  onPartSelect,
  selectedPartId,
}: PartsTableProps) {
  const [sortField, setSortField] = useState<keyof Part>('number');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Mock data - would be replaced with actual inventory data
  const parts: Part[] = [
    {
      id: 'P001',
      number: 'FIL-001',
      name: 'Oil Filter',
      category: 'Filters',
      quantity: 15,
      minQuantity: 10,
      price: 12.99,
      supplier: 'AutoParts Inc',
      lastOrdered: '2024-02-15',
      status: 'In Stock',
    },
    {
      id: 'P002',
      number: 'BRK-001',
      name: 'Brake Pad Set',
      category: 'Brakes',
      quantity: 5,
      minQuantity: 8,
      price: 89.99,
      supplier: 'BrakeMasters',
      lastOrdered: '2024-02-10',
      status: 'Low Stock',
    },
    // Add more mock data
  ];

  const handleSort = (field: keyof Part) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: keyof Part }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    );
  };

  return (
    <div className="min-w-full divide-y divide-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {[
              { key: 'number', label: 'Part Number' },
              { key: 'name', label: 'Name' },
              { key: 'category', label: 'Category' },
              { key: 'quantity', label: 'Quantity' },
              { key: 'price', label: 'Price' },
              { key: 'status', label: 'Status' },
              { key: 'supplier', label: 'Supplier' },
              { key: 'lastOrdered', label: 'Last Ordered' },
            ].map((column) => (
              <th
                key={column.key}
                onClick={() => handleSort(column.key as keyof Part)}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center">
                  {column.label}
                  <SortIcon field={column.key as keyof Part} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {parts.map((part) => (
            <tr
              key={part.id}
              onClick={() => onPartSelect(part.id)}
              className={`hover:bg-gray-50 cursor-pointer ${
                selectedPartId === part.id ? 'bg-blue-50' : ''
              }`}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {part.number}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {part.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {part.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="flex items-center">
                  {part.quantity}
                  {part.quantity <= part.minQuantity && (
                    <AlertTriangle className="h-4 w-4 text-yellow-500 ml-2" />
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${part.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    part.status === 'In Stock'
                      ? 'bg-green-100 text-green-800'
                      : part.status === 'Low Stock'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {part.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {part.supplier}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {part.lastOrdered}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}