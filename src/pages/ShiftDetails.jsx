import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Clock, Calendar, DollarSign, Users, CheckCircle, ArrowLeft, FileText } from 'lucide-react';
import toast from 'react-hot-toast';
import { shifts } from '../data/mockData';
import ContractModal from '../components/ContractModal';

export default function ShiftDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const shift = shifts.find((s) => s.id === parseInt(id));
  const [showContract, setShowContract] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

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

  const handleApplyClick = () => {
    setShowContract(true);
  };

  const handleContractSign = () => {
    setShowContract(false);
    setIsApplied(true);

    toast.success(
      <div className="flex flex-col">
        <div className="flex items-center font-semibold">
          <CheckCircle className="text-green-500 mr-2" size={20} />
          Application Submitted!
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Contract signed. You'll hear back within 24-48 hours.
        </p>
      </div>,
      {
        duration: 5000,
        style: {
          background: '#fff',
          color: '#1C3144',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        },
      }
    );

    // Redirect to My Shifts after a delay
    setTimeout(() => {
      navigate('/my-shifts');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contract Modal */}
      <ContractModal
        isOpen={showContract}
        onClose={() => setShowContract(false)}
        onSign={handleContractSign}
        shift={shift}
      />

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

            {/* Contract Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-start">
                <FileText className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Contract Required</h3>
                  <p className="text-blue-700 text-sm">
                    Before starting work, you'll need to review and sign a digital employment contract
                    covering GDPR, payment terms, dress code, and Hyatt brand standards.
                  </p>
                </div>
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

              {isApplied ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                  <h3 className="font-semibold text-green-700 mb-1">Application Submitted!</h3>
                  <p className="text-sm text-gray-500">You'll hear back within 24-48 hours</p>
                </div>
              ) : (
                <>
                  <button
                    onClick={handleApplyClick}
                    className="w-full bg-hyatt-gold text-hyatt-blue py-4 rounded-xl font-semibold text-lg hover:bg-hyatt-gold-light transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <FileText size={20} className="mr-2" />
                    Apply Now
                  </button>

                  <p className="text-center text-gray-400 text-sm mt-4">
                    You'll review & sign a contract before submitting
                  </p>
                </>
              )}
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
