import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  FileText,
  Bell,
  Bus,
  FileCheck
} from 'lucide-react';
import { Logo } from '../common/Logo';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Fleet Management', icon: Bus, href: '/fleet' },
    { name: 'Compliance', icon: FileCheck, href: '/compliance' },
    { name: 'Calendar', icon: Calendar, href: '/calendar' },
    { name: 'Team', icon: Users, href: '/team' },
    { name: 'Messages', icon: MessageSquare, href: '/messages' },
    { name: 'Documents', icon: FileText, href: '/documents' },
    { name: 'Notifications', icon: Bell, href: '/notifications' },
  ];

  return (
    <div 
      className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="flex-shrink-0 px-4 py-4 flex items-center justify-between">
        <Logo collapsed={isCollapsed} />
        <button
          onClick={onToggle}
          className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
        >
          {isCollapsed ? (
            <ChevronRight className="h-6 w-6" />
          ) : (
            <ChevronLeft className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <item.icon className="h-6 w-6 mr-3" />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Settings */}
      <div className="flex-shrink-0 border-t border-gray-200 p-4">
        <Link
          to="/settings"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <Settings className="h-6 w-6 mr-3" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
}