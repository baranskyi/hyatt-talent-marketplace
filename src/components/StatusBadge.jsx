import { Check, Clock, X } from 'lucide-react';

export default function StatusBadge({ status }) {
  const config = {
    confirmed: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      icon: Check,
      label: 'Confirmed'
    },
    pending: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      icon: Clock,
      label: 'Pending'
    },
    rejected: {
      bg: 'bg-red-100',
      text: 'text-red-700',
      icon: X,
      label: 'Rejected'
    },
    completed: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      icon: Check,
      label: 'Completed'
    }
  };

  const { bg, text, icon: Icon, label } = config[status] || config.pending;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${bg} ${text}`}>
      <Icon size={14} className="mr-1" />
      {label}
    </span>
  );
}
