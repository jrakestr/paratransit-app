import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Clock, Users, MessageSquare } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  assignees: string[];
  comments: number;
  attachments: number;
  progress: number;
}

const initialTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Client Feedback Revisions',
    description: 'Address client feedback from the latest design review.',
    startTime: '09:30 am',
    endTime: '12:20 am',
    assignees: ['John', 'Sarah', 'Mike'],
    comments: 2,
    attachments: 5,
    progress: 46
  },
  {
    id: 'task-2',
    title: 'Design Mood Board',
    description: 'Create a mood board for the upcoming project.',
    startTime: '01:00 pm',
    endTime: '03:30 pm',
    assignees: ['Emma'],
    comments: 0,
    attachments: 1,
    progress: 10
  },
  {
    id: 'task-3',
    title: 'UI Tweaks',
    description: 'Make small adjustments to the homepage design.',
    startTime: '04:00 pm',
    endTime: '05:00 pm',
    assignees: ['John', 'Emma'],
    comments: 3,
    attachments: 0,
    progress: 0
  }
];

export function TaskTimeline() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Upcoming Tasks</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
              Sort by
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
              Filter
            </button>
          </div>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-gray-50 rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{task.title}</h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {task.startTime} - {task.endTime}
                          </p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Options</span>
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>

                      <p className="text-sm text-gray-600 mb-4">{task.description}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span>{task.assignees.length}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            <span>{task.comments}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{task.attachments}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <div>
                              <span className="text-xs font-semibold inline-block text-blue-600">
                                Task Progress
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-semibold inline-block text-blue-600">
                                {task.progress}%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                            <div
                              style={{ width: `${task.progress}%` }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}