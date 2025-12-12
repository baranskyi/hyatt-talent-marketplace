import { useState } from 'react';
import { X, FileText, Shield, CreditCard, Shirt, Award, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import SignaturePad from './SignaturePad';

export default function ContractModal({ isOpen, onClose, onSign, shift }) {
  const [agreements, setAgreements] = useState({
    gdpr: false,
    payment: false,
    dresscode: false,
    brand: false,
    terms: false
  });
  const [hasSignature, setHasSignature] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  if (!isOpen) return null;

  const allAgreed = Object.values(agreements).every(v => v);
  const canSign = allAgreed && hasSignature;

  const handleCheckbox = (key) => {
    setAgreements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSign = () => {
    if (canSign) {
      onSign();
    }
  };

  const todayDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-hyatt-blue text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="mr-3" size={28} />
                <div>
                  <h2 className="text-xl font-bold">Employment Contract</h2>
                  <p className="text-white/70 text-sm">Hyatt Talent Marketplace - Hourly Work Agreement</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center mt-6 space-x-4">
              <div className={`flex items-center ${currentStep >= 1 ? 'text-hyatt-gold' : 'text-white/50'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 1 ? 'bg-hyatt-gold text-hyatt-blue' : 'bg-white/20'}`}>1</div>
                <span className="ml-2 text-sm hidden sm:inline">Review</span>
              </div>
              <div className="w-8 h-px bg-white/30"></div>
              <div className={`flex items-center ${currentStep >= 2 ? 'text-hyatt-gold' : 'text-white/50'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 2 ? 'bg-hyatt-gold text-hyatt-blue' : 'bg-white/20'}`}>2</div>
                <span className="ml-2 text-sm hidden sm:inline">Agree</span>
              </div>
              <div className="w-8 h-px bg-white/30"></div>
              <div className={`flex items-center ${currentStep >= 3 ? 'text-hyatt-gold' : 'text-white/50'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 3 ? 'bg-hyatt-gold text-hyatt-blue' : 'bg-white/20'}`}>3</div>
                <span className="ml-2 text-sm hidden sm:inline">Sign</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {currentStep === 1 && (
              <div className="space-y-6">
                {/* Contract Header */}
                <div className="text-center border-b pb-4">
                  <h3 className="text-lg font-bold text-hyatt-blue">HOURLY EMPLOYMENT CONTRACT</h3>
                  <p className="text-gray-500 text-sm">Contract Date: {todayDate}</p>
                </div>

                {/* Parties */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-hyatt-blue mb-2">Parties</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Employer:</strong> {shift?.hotel || 'Hyatt Hotels Corporation'}, acting through Hyatt Talent Marketplace<br/>
                    <strong>Worker:</strong> As registered in the Hyatt Talent Marketplace platform
                  </p>
                </div>

                {/* Position Details */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-hyatt-blue mb-2">Position Details</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div><strong>Role:</strong> {shift?.role || 'As specified'}</div>
                    <div><strong>Rate:</strong> {shift?.currency}{shift?.rate}/hour</div>
                    <div><strong>Date:</strong> {shift?.date || 'As scheduled'}</div>
                    <div><strong>Hours:</strong> {shift?.time || 'As scheduled'}</div>
                  </div>
                </div>

                {/* Contract Sections */}
                <div className="space-y-4">
                  <div className="border rounded-xl p-4">
                    <div className="flex items-start">
                      <CreditCard className="text-hyatt-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-hyatt-blue">1. Payment Terms</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Compensation shall be paid on the <strong>25th of each month</strong> following the work period.
                          Payment will be made via bank transfer to the account registered in your profile.
                          Overtime hours (if applicable) will be compensated at 1.5x the standard rate.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex items-start">
                      <Shield className="text-hyatt-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-hyatt-blue">2. Data Protection (GDPR)</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Your personal data will be processed in accordance with the General Data Protection Regulation (EU) 2016/679.
                          Data collected includes: identity information, contact details, work history, and performance reviews.
                          You have the right to access, rectify, and request deletion of your data.
                          Data retention period: 3 years after last engagement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex items-start">
                      <Shirt className="text-hyatt-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-hyatt-blue">3. Dress Code & Appearance</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Workers must adhere to Hyatt's professional appearance standards:<br/>
                          • Clean, pressed uniform (provided by hotel) or business attire<br/>
                          • Neat, well-groomed hair and minimal jewelry<br/>
                          • Name badge must be worn at all times<br/>
                          • Closed-toe, non-slip footwear required
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex items-start">
                      <Award className="text-hyatt-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-hyatt-blue">4. Brand Standards & Conduct</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          As a representative of Hyatt, you agree to:<br/>
                          • Uphold Hyatt's "World of Care" values<br/>
                          • Provide exceptional guest service at all times<br/>
                          • Maintain confidentiality of guest and company information<br/>
                          • Refrain from any conduct that may damage Hyatt's reputation<br/>
                          • Follow all hotel policies and supervisor instructions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex items-start">
                      <Clock className="text-hyatt-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-hyatt-blue">5. General Terms</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          • <strong>Punctuality:</strong> Arrive 15 minutes before shift start<br/>
                          • <strong>Cancellation:</strong> 48-hour notice required; late cancellations may affect rating<br/>
                          • <strong>No-show policy:</strong> Failure to appear results in account suspension<br/>
                          • <strong>Insurance:</strong> Worker's compensation provided during shifts<br/>
                          • <strong>Termination:</strong> Either party may end engagement with written notice
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-full bg-hyatt-blue text-white py-3 rounded-xl font-semibold hover:bg-hyatt-blue/90 transition-all"
                >
                  I Have Read the Contract → Continue
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-hyatt-blue">Confirm Your Agreement</h3>
                  <p className="text-gray-500 text-sm">Please check each box to confirm you understand and agree</p>
                </div>

                <label className="flex items-start p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
                  <input
                    type="checkbox"
                    checked={agreements.gdpr}
                    onChange={() => handleCheckbox('gdpr')}
                    className="mt-1 w-5 h-5 text-hyatt-gold rounded border-gray-300 focus:ring-hyatt-gold"
                  />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <Shield size={18} className="text-hyatt-gold mr-2" />
                      <span className="font-medium text-hyatt-blue">GDPR & Data Protection</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      I consent to the processing of my personal data as described in the contract.
                    </p>
                  </div>
                </label>

                <label className="flex items-start p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
                  <input
                    type="checkbox"
                    checked={agreements.payment}
                    onChange={() => handleCheckbox('payment')}
                    className="mt-1 w-5 h-5 text-hyatt-gold rounded border-gray-300 focus:ring-hyatt-gold"
                  />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <CreditCard size={18} className="text-hyatt-gold mr-2" />
                      <span className="font-medium text-hyatt-blue">Payment Terms</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      I understand payment will be made on the 25th of each month.
                    </p>
                  </div>
                </label>

                <label className="flex items-start p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
                  <input
                    type="checkbox"
                    checked={agreements.dresscode}
                    onChange={() => handleCheckbox('dresscode')}
                    className="mt-1 w-5 h-5 text-hyatt-gold rounded border-gray-300 focus:ring-hyatt-gold"
                  />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <Shirt size={18} className="text-hyatt-gold mr-2" />
                      <span className="font-medium text-hyatt-blue">Dress Code</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      I agree to follow Hyatt's professional appearance standards.
                    </p>
                  </div>
                </label>

                <label className="flex items-start p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
                  <input
                    type="checkbox"
                    checked={agreements.brand}
                    onChange={() => handleCheckbox('brand')}
                    className="mt-1 w-5 h-5 text-hyatt-gold rounded border-gray-300 focus:ring-hyatt-gold"
                  />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <Award size={18} className="text-hyatt-gold mr-2" />
                      <span className="font-medium text-hyatt-blue">Brand Standards</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      I will uphold Hyatt's values and maintain professional conduct.
                    </p>
                  </div>
                </label>

                <label className="flex items-start p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
                  <input
                    type="checkbox"
                    checked={agreements.terms}
                    onChange={() => handleCheckbox('terms')}
                    className="mt-1 w-5 h-5 text-hyatt-gold rounded border-gray-300 focus:ring-hyatt-gold"
                  />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <FileText size={18} className="text-hyatt-gold mr-2" />
                      <span className="font-medium text-hyatt-blue">General Terms & Conditions</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      I accept all terms including punctuality, cancellation, and no-show policies.
                    </p>
                  </div>
                </label>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    disabled={!allAgreed}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                      allAgreed
                        ? 'bg-hyatt-blue text-white hover:bg-hyatt-blue/90'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Continue to Sign →
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-hyatt-blue">Sign the Contract</h3>
                  <p className="text-gray-500 text-sm">Please sign below to complete your application</p>
                </div>

                {/* Summary */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center text-green-700 mb-2">
                    <CheckCircle size={20} className="mr-2" />
                    <span className="font-medium">All agreements confirmed</span>
                  </div>
                  <p className="text-sm text-green-600">
                    You have agreed to GDPR, payment terms, dress code, brand standards, and general terms.
                  </p>
                </div>

                {/* Signature Pad */}
                <SignaturePad onSignatureChange={setHasSignature} />

                {/* Legal Notice */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <div className="flex items-start">
                    <AlertCircle size={20} className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-yellow-700">
                      By signing this contract, you acknowledge that this electronic signature is legally binding
                      and equivalent to a handwritten signature under applicable laws.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleSign}
                    disabled={!canSign}
                    className={`flex-1 py-4 rounded-xl font-semibold transition-all flex items-center justify-center ${
                      canSign
                        ? 'bg-hyatt-gold text-hyatt-blue hover:bg-hyatt-gold-light shadow-lg'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <CheckCircle size={20} className="mr-2" />
                    Sign & Submit Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
