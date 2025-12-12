import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, DollarSign, Users, CheckCircle, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { shifts } from '../data/mockData';

export default function ShiftDetails() {
  const { id } = useParams();
  const shift = shifts.find((s) => s.id === parseInt(id));

  if (!shift) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Shift not found</h2>
          <Link to="/shifts" className="text-hyatt-gold hover:underline mt-4 block">
            Back to shifts
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    toast.success(
      <div className="flex items-center">
        <CheckCircle className="text-green-500 mr-2" size={20} />
        <span>Application submitted successfully!</span>
      </div>,
      {
        duration: 3000,
        style: {
          background: '#fff',
          color: '#1C3144',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-64 md:h-80">
        <img
          src={shift.image}
          alt={shift.hotel}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Back Button */}
        <Link
          to="/shifts"
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-hyatt-blue px-4 py-2 rounded-lg flex items-center hover:bg-white transition-all"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back
        </Link>

        {/* Hotel Name */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-4xl mx-auto">
            {shift.badge && (
              <span className="inline-block bg-hyatt-gold text-hyatt-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {shift.badge}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-white">{shift.hotel}</h1>
            <div className="flex items-center text-white/80 mt-2">
              <MapPin size={18} className="mr-2" />
              {shift.location}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Role Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-hyatt-blue">{shift.role}</h2>
                <span className="text-2xl font-bold text-hyatt-gold">
                  {shift.currency}{shift.rate}/hr
                </span>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center text-gray-500 mb-1">
                    <Calendar size={16} className="mr-2" />
                    Date
                  </div>
                  <div className="font-semibold text-hyatt-blue">{shift.date}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center text-gray-500 mb-1">
                    <Clock size={16} className="mr-2" />
                    Time
                  </div>
                  <div className="font-semibold text-hyatt-blue">{shift.time}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center text-gray-500 mb-1">
                    <Clock size={16} className="mr-2" />
                    Duration
                  </div>
                  <div className="font-semibold text-hyatt-blue">{shift.duration}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center text-gray-500 mb-1">
                    <DollarSign size={16} className="mr-2" />
                    Est. Earnings
                  </div>
                  <div className="font-semibold text-hyatt-gold">
                    {shift.currency}{shift.rate * parseInt(shift.duration)}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold text-hyatt-blue mb-2">Description</h3>
                <p className="text-gray-600">{shift.description}</p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="font-semibold text-hyatt-blue mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {shift.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Users className="text-hyatt-gold mr-2" size={20} />
                  <span className="text-gray-600">
                    <span className="font-bold text-hyatt-blue">{shift.slotsLeft}</span> spots left
                  </span>
                </div>
                <span className="text-sm text-gray-400">of {shift.slotsTotal}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div
                  className="bg-hyatt-gold h-2 rounded-full transition-all"
                  style={{ width: `${((shift.slotsTotal - shift.slotsLeft) / shift.slotsTotal) * 100}%` }}
                ></div>
              </div>

              <button
                onClick={handleApply}
                className="w-full bg-hyatt-gold text-hyatt-blue py-4 rounded-xl font-semibold text-lg hover:bg-hyatt-gold-light transition-all shadow-md hover:shadow-lg"
              >
                Apply Now
              </button>

              <p className="text-center text-gray-400 text-sm mt-4">
                Usually responds within 24 hours
              </p>
            </div>

            {/* Hotel Info Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-semibold text-hyatt-blue mb-4">About the Hotel</h3>
              <img
                src={shift.image}
                alt={shift.hotel}
                className="w-full h-32 object-cover rounded-xl mb-4"
              />
              <h4 className="font-medium text-hyatt-blue">{shift.hotel}</h4>
              <p className="text-gray-500 text-sm">{shift.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
