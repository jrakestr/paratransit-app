import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock, Star } from 'lucide-react';

interface PartsSidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}

interface Category {
  id: string;
  name: string;
  count: number;
  subcategories?: Category[];
}

export function PartsSidebar({
  selectedCategory,
  onCategorySelect,
}: PartsSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Mock data - would be replaced with actual categories
  const categories: Category[] = [
    {
      id: 'filters',
      name: 'Filters',
      count: 45,
      subcategories: [
        { id: 'oil-filters', name: 'Oil Filters', count: 15 },
        { id: 'air-filters', name: 'Air Filters', count: 20 },
        { id: 'fuel-filters', name: 'Fuel Filters', count: 10 },
      ],
    },
    {
      id: 'brakes',
      name: 'Brakes',
      count: 32,
      subcategories: [
        { id: 'brake-pads', name: 'Brake Pads', count: 12 },
        { id: 'rotors', name: 'Rotors', count: 8 },
        { id: 'calipers', name: 'Calipers', count: 12 },
      ],
    },
    // Add more categories
  ];

  const recentParts = [
    { id: 'P001', name: 'Oil Filter', number: 'FIL-001' },
    { id: 'P002', name: 'Brake Pad Set', number: 'BRK-001' },
    // Add more recent parts
  ];

  const frequentParts = [
    { id: 'P003', name: 'Air Filter', number: 'FIL-002' },
    { id: 'P004', name: 'Wiper Blades', number: 'WIP-001' },
    // Add more frequent parts
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const renderCategory = (category: Category, level = 0) => (
    <div key={category.id} className="space-y-1">
      <button
        onClick={() => {
          if (category.subcategories) {
            toggleCategory(category.id);
          }
          onCategorySelect(category.id);
        }}
        className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
          selectedCategory === category.id
            ? 'bg-blue-50 text-blue-600'
            : 'text-gray-600 hover:bg-gray-50'
        }`}
        style={{ paddingLeft: `${level * 1.5 + 0.75}rem` }}
      >
        {category.subcategories ? (
          expandedCategories.includes(category.id) ? (
            <ChevronDown className="h-4 w-4 mr-2" />
          ) : (
            <ChevronRight className="h-4 w-4 mr-2" />
          )
        ) : (
          <div className="w-4 mr-2" />
        )}
        <span className="flex-1 text-left">{category.name}</span>
        <span className="text-xs text-gray-400">{category.count}</span>
      </button>
      {category.subcategories &&
        expandedCategories.includes(category.id) &&
        category.subcategories.map((sub) => renderCategory(sub, level + 1))}
    </div>
  );

  return (
    <div className="w-64 border-r border-gray-200 bg-white overflow-y-auto">
      <div className="p-4 space-y-8">
        {/* Categories */}
        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Categories
          </h3>
          <div className="mt-2 space-y-1">
            {categories.map((category) => renderCategory(category))}
          </div>
        </div>

        {/* Frequently Used Parts */}
        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Frequently Used
          </h3>
          <div className="mt-2 space-y-1">
            {frequentParts.map((part) => (
              <button
                key={part.id}
                className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
              >
                <Star className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="flex-1 text-left">{part.name}</span>
                <span className="text-xs text-gray-400">{part.number}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recently Viewed Parts */}
        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Recently Viewed
          </h3>
          <div className="mt-2 space-y-1">
            {recentParts.map((part) => (
              <button
                key={part.id}
                className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
              >
                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="flex-1 text-left">{part.name}</span>
                <span className="text-xs text-gray-400">{part.number}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}