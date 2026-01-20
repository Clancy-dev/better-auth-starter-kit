import React from 'react';
import { NavUserTypes } from '../nav-user';


interface RoleColorMap {
  [key: string]: string;
}

const DashboardWelcome = ({ user }: { user: NavUserTypes }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const getRoleColor = (role?: string): string => {
    const colors: RoleColorMap = {
      'Administrator': 'text-rose-700',
      'Manager': 'text-teal-700',
      'User': 'text-amber-700',
      'Guest': 'text-slate-600',
    };
   return role ? colors[role] || 'text-slate-600' : 'text-slate-600';
  };

  const getCurrentDate = () => { 
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <div className="rounded-lg bg-slate-50 px-6 py-4 border border-slate-200 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
            {getGreeting()}, <span className="text-blue-950">{user.name}</span>!
          </h1>
          
          <div className="space-y-1">
            <p className="text-slate-500 text-xs font-medium">
              {getCurrentDate()}
            </p>
            <p className="text-slate-600 text-xs">
              Welcome back to your dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold ${getRoleColor(user.role)}`}>
            {user.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardWelcome;
