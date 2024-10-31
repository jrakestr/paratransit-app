import React, { useState } from 'react';
import { PartsTable } from './PartsTable';
import { PartsSidebar } from './PartsSidebar';
import { PartDetailsPanel } from './PartDetailsPanel';
import { PartsHeader } from './PartsHeader';
import { Plus, FileText, Download } from 'lucide-react';

export function PartsInventoryPage() {
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);
  const [showNewPartForm, setShowNewPartForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleNewPart = () => {
    setShowNewPartForm(true);
  };

  const handleExport = () => {
    // Implement export functionality
    console.log('Exporting inventory report...');
  };

  return (
    <div className="h-full">
      <div className="flex h-full">
        {/* Sidebar */}
        <PartsSidebar
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <PartsHeader
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {/* Action Buttons */}
          <div className="px-6 py-4 flex justify-between items-center border-b border-gray-200">
            <div className="flex space-x-3">
              <button
                onClick={handleNewPart}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Part
              </button>
              <button
                onClick={handleExport}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Inventory
              </button>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
              <FileText className="h-4 w-4 mr-2" />
              Generate Purchase Orders
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex overflow-hidden">
            <div className={`flex-1 overflow-auto ${selectedPartId ? 'mr-96' : ''}`}>
              <PartsTable
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
                onPartSelect={setSelectedPartId}
                selectedPartId={selectedPartId}
              />
            </div>

            {/* Part Details Slide-out Panel */}
            {selectedPartId && (
              <div className="w-96 border-l border-gray-200 bg-white overflow-y-auto">
                <PartDetailsPanel
                  partId={selectedPartId}
                  onClose={() => setSelectedPartId(null)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}