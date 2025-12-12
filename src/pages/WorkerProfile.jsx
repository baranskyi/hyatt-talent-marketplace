import { useState } from 'react';
import { MapPin, Mail, Phone, Calendar, Star, Shield, Award, TrendingUp, ShieldCheck, ShieldAlert, Camera } from 'lucide-react';
import StarRating from '../components/StarRating';
import VerificationModal from '../components/VerificationModal';
import toast from 'react-hot-toast';
import { currentWorker, workerReviews } from '../data/mockData';

export default function WorkerProfile() {
  const worker = currentWorker;
  const [showVerification, setShowVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(worker.verified);

  const handleVerificationComplete = () => {
    setIsVerified(true);
    toast.success(
      <div className="flex flex-col">
        <div className="flex items-center font-semibold">
          <ShieldCheck className="text-green-500 mr-2" size={20} />
          Identity Verified!
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Your account is now fully verified.
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Verification Modal */}
      <VerificationModal
        isOpen={showVerification}
        onClose={() => setShowVerification(false)}
        onComplete={handleVerificationComplete}
      />

      {/* Header */}
      <div className="bg-hyatt-blue py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <img
                src={worker.avatar}
                alt={worker.name}
                className="w-32 h-32 rounded-2xl object-cover border-4 border-hyatt-gold shadow-lg"
              />
              {isVerified && (
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-md">
                  <Shield size={16} />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-white mb-2">{worker.name}</h1>
              <div className="flex items-center justify-center md:justify-start text-gray-300 mb-3">
                <MapPin size={16} className="mr-2" />
                {worker.location}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <StarRating rating={worker.rating} size={20} />
                <span className="text-gray-300">({worker.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-hyatt-gold mb-1">
                €{worker.stats.totalEarnings.toLocaleString()}
              </div>
              <div className="text-gray-500">Total Earned</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-hyatt-blue mb-1">
                {worker.stats.shiftsCompleted}
              </div>
              <div className="text-gray-500">Shifts Done</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-500 mb-1">
                {worker.stats.onTimeRate}%
              </div>
              <div className="text-gray-500">On-Time Rate</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-purple-500 mb-1">
                {worker.stats.repeatBookings}%
              </div>
              <div className="text-gray-500">Repeat Bookings</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hyatt-blue mb-4">About</h2>
              <p className="text-gray-600">{worker.bio}</p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hyatt-blue mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {worker.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-hyatt-blue/10 text-hyatt-blue px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hyatt-blue mb-4">Recent Reviews</h2>
              <div className="space-y-4">
                {workerReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium text-hyatt-blue">{review.hotel}</div>
                        <div className="text-sm text-gray-400">{review.manager} • {review.date}</div>
                      </div>
                      <StarRating rating={review.rating} showNumber={false} size={14} />
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hyatt-blue mb-4">Contact</h2>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail size={18} className="mr-3 text-gray-400" />
                  {worker.email}
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone size={18} className="mr-3 text-gray-400" />
                  {worker.phone}
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-3 text-gray-400" />
                  Member since {worker.memberSince}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hyatt-blue mb-4">Languages</h2>
              <div className="space-y-2">
                {worker.languages.map((lang, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-hyatt-gold rounded-full mr-3"></div>
                    <span className="text-gray-600">{lang}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hyatt-blue mb-4">Availability</h2>
              <div className="flex items-center">
                <TrendingUp className="text-hyatt-gold mr-3" size={24} />
                <span className="text-2xl font-bold text-hyatt-blue">{worker.availability}</span>
              </div>
            </div>

            {/* Verification Status */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hyatt-blue mb-4">Verification Status</h2>
              {isVerified ? (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center text-green-700 mb-2">
                      <ShieldCheck size={24} className="mr-2" />
                      <span className="font-bold">Fully Verified</span>
                    </div>
                    <p className="text-sm text-green-600">Identity confirmed via KYC process</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Camera size={16} className="mr-2 text-green-500" />
                      Photo verified
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Shield size={16} className="mr-2 text-green-500" />
                      ID document scanned
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <div className="flex items-center text-yellow-700 mb-2">
                      <ShieldAlert size={24} className="mr-2" />
                      <span className="font-bold">Not Verified</span>
                    </div>
                    <p className="text-sm text-yellow-600">Complete KYC to unlock all features</p>
                  </div>
                  <button
                    onClick={() => setShowVerification(true)}
                    className="w-full bg-hyatt-gold text-hyatt-blue py-3 rounded-xl font-semibold hover:bg-hyatt-gold-light transition-all flex items-center justify-center"
                  >
                    <Shield size={18} className="mr-2" />
                    Start Verification
                  </button>
                </div>
              )}
            </div>

            {/* Badges */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hyatt-blue mb-4">Achievements</h2>
              <div className="space-y-3">
                <div className="flex items-center bg-yellow-50 text-yellow-700 px-4 py-3 rounded-xl">
                  <Award className="mr-3" size={20} />
                  <span className="font-medium">Top Performer</span>
                </div>
                {isVerified && (
                  <div className="flex items-center bg-green-50 text-green-700 px-4 py-3 rounded-xl">
                    <Shield className="mr-3" size={20} />
                    <span className="font-medium">Verified Identity</span>
                  </div>
                )}
                <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-3 rounded-xl">
                  <Star className="mr-3" size={20} />
                  <span className="font-medium">5-Star Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
