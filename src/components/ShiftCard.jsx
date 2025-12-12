import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, Users } from 'lucide-react';

export default function ShiftCard({ shift }) {
  return (
    <Link to={`/shifts/${shift.id}`} className="block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
        {/* Image */}
        <div className="relative h-40">
          <img
            src={shift.image}
            alt={shift.hotel}
            className="w-full h-full object-cover"
          />
          {shift.badge && (
            <span className="absolute top-3 right-3 bg-hyatt-gold text-hyatt-blue text-xs font-semibold px-3 py-1 rounded-full">
              {shift.badge}
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h3 className="text-white font-semibold text-lg">{shift.hotel}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Role & Rate */}
          <div className="flex justify-between items-start mb-3">
            <span className="bg-hyatt-blue/10 text-hyatt-blue px-3 py-1 rounded-full text-sm font-medium">
              {shift.role}
            </span>
            <span className="text-hyatt-gold font-bold text-lg">
              {shift.currency}{shift.rate}/hr
            </span>
          </div>

          {/* Details */}
          <div className="space-y-2 text-gray-600 text-sm">
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-gray-400" />
              {shift.location}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-gray-400" />
              {shift.date}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2 text-gray-400" />
              {shift.time} ({shift.duration})
            </div>
          </div>

          {/* Slots */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm">
                <Users size={16} className="mr-2 text-hyatt-gold" />
                <span className="text-gray-600">
                  <span className="font-semibold text-hyatt-blue">{shift.slotsLeft}</span> spots left
                </span>
              </div>
              <span className="text-hyatt-gold text-sm font-medium">View Details →</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
