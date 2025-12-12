import { useState } from 'react';
import { Briefcase, Users, TrendingUp, CheckCircle, X, Clock, Star } from 'lucide-react';
import toast from 'react-hot-toast';
import StarRating from '../components/StarRating';
import { adminStats, adminApplications } from '../data/mockData';

export default function AdminDashboard() {
  const [applications, setApplications] = useState(adminApplications);

  const handleAccept = (id) => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: 'accepted' } : app
    ));
    toast.success(
      <div className="flex items-center">
        <CheckCircle className="text-green-500 mr-2" size={20} />
        <span>Worker accepted successfully!</span>
      </div>,
      { duration: 3000 }
    );
  };

  const handleReject = (id) => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: 'rejected' } : app
    ));
    toast.error(
      <div className="flex items-center">
        <X className="text-red-500 mr-2" size={20} />
        <span>Application declined</span>
      </div>,
      { duration: 3000 }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-hyatt-blue py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Hotel Admin Dashboard
              </h1>
              <p className="text-gray-300">Grand Hyatt Istanbul</p>
            </div>
            <button className="bg-hyatt-gold text-hyatt-blue px-6 py-3 rounded-xl font-semibold hover:bg-hyatt-gold-light transition-all">
              + Post New Shift
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <Briefcase className="text-hyatt-gold" size={24} />
              <span className="text-sm text-gray-400">Active</span>
            </div>
            <div className="text-3xl font-bold text-hyatt-blue">{adminStats.activeShifts}</div>
            <div className="text-sm text-gray-500">Open Shifts</div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="text-yellow-500" size={24} />
              <span className="text-sm text-gray-400">New</span>
            </div>
            <div className="text-3xl font-bold text-hyatt-blue">{adminStats.totalApplications}</div>
            <div className="text-sm text-gray-500">Applications</div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="text-blue-500" size={24} />
              <span className="text-sm text-gray-400">Pool</span>
            </div>
            <div className="text-3xl font-bold text-hyatt-blue">{adminStats.workersInPool}</div>
            <div className="text-sm text-gray-500">Workers</div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="text-green-500" size={24} />
              <span className="text-sm text-gray-400">Rate</span>
            </div>
            <div className="text-3xl font-bold text-green-500">{adminStats.fillRate}%</div>
            <div className="text-sm text-gray-500">Fill Rate</div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <Star className="text-hyatt-gold" size={24} />
              <span className="text-sm text-gray-400">Avg</span>
            </div>
            <div className="text-3xl font-bold text-hyatt-gold">{adminStats.avgRating}</div>
            <div className="text-sm text-gray-500">Rating</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Applications */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-hyatt-blue">Recent Applications</h2>
              </div>

              <div className="divide-y divide-gray-100">
                {applications.map((app) => (
                  <div key={app.id} className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Worker Avatar */}
                      <img
                        src={app.worker.avatar}
                        alt={app.worker.name}
                        className="w-14 h-14 rounded-xl object-cover"
                      />

                      {/* Worker Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-hyatt-blue">{app.worker.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <StarRating rating={app.worker.rating} size={14} />
                              <span>• {app.worker.shiftsCompleted} shifts</span>
                            </div>
                          </div>
                          <span className="text-sm text-gray-400">{app.appliedAt}</span>
                        </div>

                        {/* Shift Info */}
                        <div className="bg-gray-50 rounded-lg p-3 mb-3">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-hyatt-blue">{app.shift.role}</span>
                            <span className="text-sm text-gray-500">{app.shift.date}</span>
                          </div>
                          <span className="text-sm text-gray-500">{app.shift.time}</span>
                        </div>

                        {/* Actions */}
                        {app.status === 'pending' ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleAccept(app.id)}
                              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all"
                            >
                              <CheckCircle size={16} className="mr-2" />
                              Accept
                            </button>
                            <button
                              onClick={() => handleReject(app.id)}
                              className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-all"
                            >
                              <X size={16} className="mr-2" />
                              Decline
                            </button>
                          </div>
                        ) : (
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            app.status === 'accepted'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {app.status === 'accepted' ? (
                              <><CheckCircle size={14} className="mr-1" /> Accepted</>
                            ) : (
                              <><X size={14} className="mr-1" /> Declined</>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hyatt-blue mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-hyatt-gold/10 text-hyatt-blue rounded-xl font-medium hover:bg-hyatt-gold/20 transition-all">
                  + Post New Shift
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all">
                  View All Workers
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all">
                  Export Reports
                </button>
              </div>
            </div>

            {/* Upcoming Shifts */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hyatt-blue mb-4">Today's Shifts</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-medium text-hyatt-blue">Waiter</div>
                    <div className="text-sm text-gray-500">18:00 - 23:00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">4/5 filled</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-medium text-hyatt-blue">Kitchen Helper</div>
                    <div className="text-sm text-gray-500">10:00 - 16:00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-yellow-600">2/3 filled</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-medium text-hyatt-blue">Front Desk</div>
                    <div className="text-sm text-gray-500">08:00 - 14:00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">Full</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
