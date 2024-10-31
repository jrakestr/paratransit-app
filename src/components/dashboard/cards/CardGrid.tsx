import React, { Suspense } from 'react';
import { VirtualizedList } from './VirtualizedList';
import { CardSkeleton } from './CardSkeleton';

const Card = React.lazy(() => import('./Card'));

interface CardData {
  id: string;
  title: string;
  description: string;
  status: string;
  assignee: {
    name: string;
    avatar: string;
  };
  dueDate: string;
}

export function CardGrid() {
  // Mock data - replace with actual data source
  const cards: CardData[] = Array.from({ length: 50 }, (_, i) => ({
    id: `card-${i}`,
    title: `Task ${i + 1}`,
    description: 'This is a sample task description',
    status: i % 3 === 0 ? 'In Progress' : i % 3 === 1 ? 'Completed' : 'Pending',
    assignee: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    dueDate: '2024-03-20'
  }));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Tasks</h2>
      
      <VirtualizedList
        items={cards}
        renderItem={(card) => (
          <Suspense fallback={<CardSkeleton />}>
            <Card key={card.id} data={card} />
          </Suspense>
        )}
        itemHeight={200} // Adjust based on your card height
        containerHeight={800} // Adjust based on your container height
      />
    </div>
  );
}