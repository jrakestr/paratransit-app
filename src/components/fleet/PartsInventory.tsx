import React, { useState } from 'react';
import { SearchBar } from './search/SearchBar';
import { InventoryCards } from './cards/InventoryCards';
import { InventoryCharts } from './charts/InventoryCharts';
import { Package, AlertTriangle, ShoppingCart, History } from 'lucide-react';

export function PartsInventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Parts Inventory Management</h1>
        
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <InventoryCards />
        
        <InventoryCharts />
      </div>
    </div>
  );
}