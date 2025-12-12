import { useState } from 'react';
import { X, Camera, FileText, CheckCircle, Upload, Scan, User, CreditCard, AlertCircle, Shield } from 'lucide-react';

export default function VerificationModal({ isOpen, onClose, onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [documentUploaded, setDocumentUploaded] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

  if (!isOpen) return null;

  const simulateScan = (type) => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      if (type === 'photo') {
        setPhotoUploaded(true);
      } else {
        setDocumentUploaded(true);
      }
    }, 2000);
  };

  const handleComplete = () => {
    setVerificationComplete(true);
    setTimeout(() => {
      onComplete();
      onClose();
    }, 2000);
  };

  const resetScanState = () => {
    setScanComplete(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="bg-hyatt-blue text-white p-6 flex-shrink-0 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="mr-3" size={28} />
                <div>
                  <h2 className="text-xl font-bold">Identity Verification</h2>
                  <p className="text-white/70 text-sm">KYC Process - Secure & Fast</p>
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
                <span className="ml-2 text-sm hidden sm:inline">Photo</span>
              </div>
              <div className="w-8 h-px bg-white/30"></div>
              <div className={`flex items-center ${currentStep >= 2 ? 'text-hyatt-gold' : 'text-white/50'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 2 ? 'bg-hyatt-gold text-hyatt-blue' : 'bg-white/20'}`}>2</div>
                <span className="ml-2 text-sm hidden sm:inline">Document</span>
              </div>
              <div className="w-8 h-px bg-white/30"></div>
              <div className={`flex items-center ${currentStep >= 3 ? 'text-hyatt-gold' : 'text-white/50'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 3 ? 'bg-hyatt-gold text-hyatt-blue' : 'bg-white/20'}`}>3</div>
                <span className="ml-2 text-sm hidden sm:inline">Confirm</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto flex-1 min-h-0">
            {/* Step 1: Photo Verification */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-hyatt-blue">Photo Verification</h3>
                  <p className="text-gray-500 text-sm mt-1">Take or upload a clear photo of your face</p>
                </div>

                {/* Photo Preview Area */}
                <div className="relative">
                  {photoUploaded ? (
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                        alt="Profile photo"
                        className="w-full h-64 object-cover rounded-2xl"
                      />
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <CheckCircle size={16} className="mr-1" />
                        Uploaded
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl h-64 flex flex-col items-center justify-center bg-gray-50">
                      {isScanning ? (
                        <div className="text-center">
                          <div className="w-16 h-16 border-4 border-hyatt-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                          <p className="text-gray-600 font-medium">Processing photo...</p>
                          <p className="text-gray-400 text-sm">Analyzing image quality</p>
                        </div>
                      ) : (
                        <>
                          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                            <User size={40} className="text-gray-400" />
                          </div>
                          <p className="text-gray-500 text-sm mb-4">No photo uploaded yet</p>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                {!photoUploaded && !isScanning && (
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => simulateScan('photo')}
                      className="flex items-center justify-center bg-hyatt-blue text-white py-3 rounded-xl font-medium hover:bg-hyatt-blue/90 transition-all"
                    >
                      <Camera size={20} className="mr-2" />
                      Take Photo
                    </button>
                    <button
                      onClick={() => simulateScan('photo')}
                      className="flex items-center justify-center bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all"
                    >
                      <Upload size={20} className="mr-2" />
                      Upload
                    </button>
                  </div>
                )}

                {/* Demo Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start">
                    <AlertCircle size={20} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-700">
                      <strong>Demo Mode:</strong> Click any button to simulate photo capture with pre-loaded image.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => { setCurrentStep(2); resetScanState(); }}
                  disabled={!photoUploaded}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    photoUploaded
                      ? 'bg-hyatt-gold text-hyatt-blue hover:bg-hyatt-gold-light'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue to Document Scan
                </button>
              </div>
            )}

            {/* Step 2: Document Verification */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-hyatt-blue">Document Verification</h3>
                  <p className="text-gray-500 text-sm mt-1">Scan your passport or ID card</p>
                </div>

                {/* Document Type Selection */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="border-2 border-hyatt-gold bg-hyatt-gold/5 rounded-xl p-4 text-center cursor-pointer">
                    <CreditCard size={32} className="mx-auto mb-2 text-hyatt-gold" />
                    <span className="font-medium text-hyatt-blue">ID Card</span>
                  </div>
                  <div className="border-2 border-gray-200 rounded-xl p-4 text-center cursor-pointer hover:border-gray-300 transition-all">
                    <FileText size={32} className="mx-auto mb-2 text-gray-400" />
                    <span className="font-medium text-gray-600">Passport</span>
                  </div>
                </div>

                {/* Document Preview Area */}
                <div className="relative">
                  {documentUploaded ? (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6">
                        <div className="flex items-start gap-4">
                          {/* ID Card Preview */}
                          <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-16 h-20 bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=130&fit=crop&crop=face"
                                  alt="ID Photo"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="h-2 bg-gray-300 rounded w-3/4 mb-2"></div>
                                <div className="h-2 bg-gray-200 rounded w-1/2 mb-2"></div>
                                <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                              </div>
                            </div>
                            <div className="border-t pt-3 mt-3">
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                  <span className="text-gray-400">Name</span>
                                  <p className="font-medium text-gray-700">Maria Gonzalez</p>
                                </div>
                                <div>
                                  <span className="text-gray-400">DOB</span>
                                  <p className="font-medium text-gray-700">15/03/1995</p>
                                </div>
                                <div>
                                  <span className="text-gray-400">ID Number</span>
                                  <p className="font-medium text-gray-700">••••••7842</p>
                                </div>
                                <div>
                                  <span className="text-gray-400">Expiry</span>
                                  <p className="font-medium text-gray-700">12/2028</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <CheckCircle size={16} className="mr-1" />
                          Scanned
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl h-48 flex flex-col items-center justify-center bg-gray-50">
                      {isScanning ? (
                        <div className="text-center">
                          <div className="relative w-20 h-20 mx-auto mb-4">
                            <Scan size={48} className="text-hyatt-gold animate-pulse" />
                            <div className="absolute inset-0 border-2 border-hyatt-gold rounded-lg animate-ping opacity-50"></div>
                          </div>
                          <p className="text-gray-600 font-medium">Scanning document...</p>
                          <p className="text-gray-400 text-sm">Extracting information</p>
                        </div>
                      ) : (
                        <>
                          <Scan size={48} className="text-gray-300 mb-4" />
                          <p className="text-gray-500 text-sm">Position document in camera view</p>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Scan Button */}
                {!documentUploaded && !isScanning && (
                  <button
                    onClick={() => simulateScan('document')}
                    className="w-full flex items-center justify-center bg-hyatt-blue text-white py-3 rounded-xl font-medium hover:bg-hyatt-blue/90 transition-all"
                  >
                    <Scan size={20} className="mr-2" />
                    Scan Document
                  </button>
                )}

                {/* Demo Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start">
                    <AlertCircle size={20} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-700">
                      <strong>Demo Mode:</strong> Click "Scan Document" to simulate OCR scanning with pre-loaded data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    disabled={!documentUploaded}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                      documentUploaded
                        ? 'bg-hyatt-gold text-hyatt-blue hover:bg-hyatt-gold-light'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
              <div className="space-y-6">
                {verificationComplete ? (
                  <div className="text-center py-8">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={48} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Verification Complete!</h3>
                    <p className="text-gray-500">Your identity has been verified successfully.</p>
                  </div>
                ) : (
                  <>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-hyatt-blue">Confirm Your Information</h3>
                      <p className="text-gray-500 text-sm mt-1">Review and submit for verification</p>
                    </div>

                    {/* Summary Cards */}
                    <div className="space-y-4">
                      {/* Photo Summary */}
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <div className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                            alt="Profile"
                            className="w-16 h-16 rounded-xl object-cover mr-4"
                          />
                          <div className="flex-1">
                            <div className="flex items-center text-green-700 mb-1">
                              <CheckCircle size={18} className="mr-2" />
                              <span className="font-medium">Photo Verified</span>
                            </div>
                            <p className="text-sm text-green-600">Clear face photo captured</p>
                          </div>
                        </div>
                      </div>

                      {/* Document Summary */}
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <div className="flex items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <CreditCard size={28} className="text-hyatt-blue" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center text-green-700 mb-1">
                              <CheckCircle size={18} className="mr-2" />
                              <span className="font-medium">Document Scanned</span>
                            </div>
                            <p className="text-sm text-green-600">ID Card - ••••••7842</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Extracted Info */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-medium text-hyatt-blue mb-3">Extracted Information</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-400">Full Name</span>
                          <p className="font-medium text-gray-700">Maria Gonzalez</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Date of Birth</span>
                          <p className="font-medium text-gray-700">15 March 1995</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Nationality</span>
                          <p className="font-medium text-gray-700">Spain</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Document Expiry</span>
                          <p className="font-medium text-gray-700">December 2028</p>
                        </div>
                      </div>
                    </div>

                    {/* Legal Notice */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <div className="flex items-start">
                        <AlertCircle size={20} className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-yellow-700">
                          By submitting, you confirm that the information provided is accurate and you consent to identity verification processing.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleComplete}
                        className="flex-1 bg-hyatt-gold text-hyatt-blue py-4 rounded-xl font-semibold hover:bg-hyatt-gold-light transition-all flex items-center justify-center shadow-lg"
                      >
                        <Shield size={20} className="mr-2" />
                        Complete Verification
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
