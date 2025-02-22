import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const AddStudentModal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
 
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-md transform rounded-lg bg-white p-6 text-left shadow-xl transition-all">
       
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="mt-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudentModal
