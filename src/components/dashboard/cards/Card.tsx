import React from 'react';
import { Clock, User } from 'lucide-react';

interface CardProps {
  data: {
    id: string;
    title: string;
    description: string;
    status: string;
    assignee: {
      name: string;
      avatar: string;
    };
    dueDate: string;
  };
}

export default function Card({ data }: CardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-900">{data.title}</h3>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
              data.status
            )}`}
          >
            {data.status}
          </span>
        </div>

        <p className="text-sm text-gray-500">{data.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <img
                src={data.assignee.avatar}
                alt={data.assignee.name}
                className="h-6 w-6 rounded-full"
              />
              <span className="ml-2 text-sm text-gray-500">
                {data.assignee.name}
              </span>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {data.dueDate}
          </div>
        </div>
      </div>
    </div>
  );
}