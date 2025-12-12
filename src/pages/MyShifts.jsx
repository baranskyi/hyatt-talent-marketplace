import { useState } from 'react';
import { Calendar, Clock, MapPin, DollarSign, Star } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import StarRating from '../components/StarRating';
import { myShifts } from '../data/mockData';

export default function MyShifts() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: myShifts.upcoming.length },
    { id: 'pending', label: 'Pending', count: myShifts.pending.length },
    { id: 'completed', label: 'Completed', count: myShifts.completed.length },
  ];

  const renderShiftCard = (shift, type) => {
    if (type === 'completed') {
      return (
        <div key={shift.id} className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-hyatt-blue text-lg">{shift.hotel}</h3>
              <span className="text-hyatt-gold font-medium">{shift.role}</span>
            </div>
            <StatusBadge status="completed" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-2 text-gray-400" />
              {shift.date}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-2 text-gray-400" />
              {shift.time}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <DollarSign size={18} className="mr-2 text-green-500" />
                <span className="font-bold text-green-600">
                  {shift.currency}{shift.earnings} earned
                </span>
              </div>
              <StarRating rating={shift.rating} showNumber={false} size={16} />
            </div>
            {shift.review && (
              <p className="text-gray-600 text-sm italic">"{shift.review}"</p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div key={shift.id} className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-hyatt-blue text-lg">{shift.hotel}</h3>
            <span className="text-hyatt-gold font-medium">{shift.role}</span>
          </div>
          <StatusBadge status={shift.status} />
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2 text-gray-400" />
            {shift.date}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-2 text-gray-400" />
            {shift.time}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-hyatt-gold">
            {shift.currency}{shift.rate}/hr
          </span>
          {shift.appliedAt && (
            <span className="text-sm text-gray-400">Applied: {shift.appliedAt}</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-hyatt-blue py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">My Shifts</h1>
          <p className="text-gray-300">Track your upcoming work and earnings</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 font-medium transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'text-hyatt-gold border-hyatt-gold'
                    : 'text-gray-500 border-transparent hover:text-hyatt-blue'
                }`}
              >
                {tab.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id
                    ? 'bg-hyatt-gold text-hyatt-blue'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        {activeTab === 'completed' && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow-md p-4 text-center">
              <div className="text-2xl font-bold text-hyatt-gold">
                €{myShifts.completed.reduce((sum, s) => sum + s.earnings, 0)}
              </div>
              <div className="text-sm text-gray-500">Total Earned</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 text-center">
              <div className="text-2xl font-bold text-hyatt-blue">
                {myShifts.completed.length}
              </div>
              <div className="text-sm text-gray-500">Shifts Done</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 text-center">
              <div className="text-2xl font-bold text-green-500">
                {(myShifts.completed.reduce((sum, s) => sum + s.rating, 0) / myShifts.completed.length).toFixed(1)}
              </div>
              <div className="text-sm text-gray-500">Avg Rating</div>
            </div>
          </div>
        )}

        {/* Shift List */}
        <div className="space-y-4">
          {activeTab === 'upcoming' && myShifts.upcoming.map((shift) => renderShiftCard(shift, 'upcoming'))}
          {activeTab === 'pending' && myShifts.pending.map((shift) => renderShiftCard(shift, 'pending'))}
          {activeTab === 'completed' && myShifts.completed.map((shift) => renderShiftCard(shift, 'completed'))}
        </div>

        {/* Empty State */}
        {((activeTab === 'upcoming' && myShifts.upcoming.length === 0) ||
          (activeTab === 'pending' && myShifts.pending.length === 0) ||
          (activeTab === 'completed' && myShifts.completed.length === 0)) && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No shifts yet</h3>
            <p className="text-gray-500">Start browsing and apply for available shifts</p>
          </div>
        )}
      </div>
    </div>
  );
}
