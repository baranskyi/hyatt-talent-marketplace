import { useRef, useState, useEffect } from 'react';
import { Eraser, Check } from 'lucide-react';

export default function SignaturePad({ onSignatureChange }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Set drawing style
    ctx.strokeStyle = '#1C3144';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (e.touches) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.lineTo(x, y);
    ctx.stroke();
    setHasSignature(true);
    onSignatureChange(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
    onSignatureChange(false);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">
          Sign below (use mouse or finger)
        </label>
        <button
          type="button"
          onClick={clearSignature}
          className="flex items-center text-sm text-gray-500 hover:text-red-500 transition-colors"
        >
          <Eraser size={16} className="mr-1" />
          Clear
        </button>
      </div>

      <div className="relative border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-32 cursor-crosshair touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />

        {!hasSignature && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-gray-400 text-sm">Draw your signature here</span>
          </div>
        )}
      </div>

      {hasSignature && (
        <div className="flex items-center text-green-600 text-sm">
          <Check size={16} className="mr-1" />
          Signature captured
        </div>
      )}
    </div>
  );
}
