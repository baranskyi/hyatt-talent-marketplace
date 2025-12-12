import { useState } from 'react';
import { Search, MapPin, Briefcase, Filter } from 'lucide-react';
import ShiftCard from '../components/ShiftCard';
import { shifts, roleCategories, locations } from '../data/mockData';

export default function BrowseShifts() {
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter shifts (visual only - doesn't need to actually work for demo)
  const filteredShifts = shifts.filter((shift) => {
    const matchesRole = selectedRole === 'All Roles' || shift.role === selectedRole;
    const matchesLocation = selectedLocation === 'All Locations' || shift.location === selectedLocation;
    const matchesSearch = shift.hotel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         shift.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-hyatt-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Available Shifts
          </h1>
          <p className="text-gray-300">
            Find your next opportunity at Hyatt hotels across Europe
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search hotels or roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hyatt-gold focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hyatt-gold focus:border-transparent outline-none appearance-none bg-white cursor-pointer min-w-[180px]"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Role Filter */}
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hyatt-gold focus:border-transparent outline-none appearance-none bg-white cursor-pointer min-w-[160px]"
              >
                {roleCategories.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-hyatt-blue">{filteredShifts.length}</span> shifts available
          </p>
          <button className="flex items-center text-hyatt-blue hover:text-hyatt-gold transition-colors">
            <Filter size={18} className="mr-2" />
            More Filters
          </button>
        </div>

        {/* Shift Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShifts.map((shift) => (
            <ShiftCard key={shift.id} shift={shift} />
          ))}
        </div>

        {/* Empty State */}
        {filteredShifts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No shifts found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
}
