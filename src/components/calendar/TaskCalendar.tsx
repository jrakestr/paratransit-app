import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface Task {
  id: string;
  title: string;
  start: string;
  end: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  extendedProps?: {
    description?: string;
    assignees?: string[];
    status?: string;
    priority?: string;
  };
}

export function TaskCalendar() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Client Feedback Revisions',
      start: '2024-03-14T09:30:00',
      end: '2024-03-14T12:20:00',
      backgroundColor: '#EBF5FF',
      borderColor: '#3B82F6',
      textColor: '#1E40AF',
      extendedProps: {
        description: 'Address client feedback from the latest design review.',
        assignees: ['John D.', 'Sarah M.', 'Mike R.'],
        status: 'in-progress',
        priority: 'high'
      }
    },
    {
      id: '2',
      title: 'Design Mood Board',
      start: '2024-03-14T13:00:00',
      end: '2024-03-14T15:30:00',
      backgroundColor: '#FEF3C7',
      borderColor: '#F59E0B',
      textColor: '#92400E',
      extendedProps: {
        description: 'Create a mood board for the upcoming project.',
        assignees: ['Emily L.'],
        status: 'todo',
        priority: 'medium'
      }
    },
    {
      id: '3',
      title: 'UI Tweaks',
      start: '2024-03-14T16:00:00',
      end: '2024-03-14T17:30:00',
      backgroundColor: '#ECFDF5',
      borderColor: '#10B981',
      textColor: '#065F46',
      extendedProps: {
        description: 'Make small improvements to the homepage design.',
        assignees: ['Chris P.', 'Anna M.'],
        status: 'todo',
        priority: 'low'
      }
    }
  ]);

  const handleEventDrop = (info: any) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === info.event.id) {
        return {
          ...task,
          start: info.event.startStr,
          end: info.event.endStr
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleEventClick = (info: any) => {
    // Handle event click - could show a modal with task details
    console.log('Event clicked:', info.event);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth'
        }}
        editable={true}
        droppable={true}
        events={tasks}
        eventDrop={handleEventDrop}
        eventClick={handleEventClick}
        slotMinTime="08:00:00"
        slotMaxTime="20:00:00"
        allDaySlot={false}
        height="auto"
        slotDuration="00:30:00"
        eventContent={(eventInfo) => (
          <div className="p-2">
            <div className="font-medium">{eventInfo.event.title}</div>
            {eventInfo.event.extendedProps.assignees && (
              <div className="text-xs mt-1 flex items-center">
                <span className="mr-1">👥</span>
                {eventInfo.event.extendedProps.assignees.length} assignees
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
}