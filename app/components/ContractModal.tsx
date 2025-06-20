interface ContractModalProps {
  show: boolean;
  onClose: () => void;
  index: number | null;
}

export default function ContractModal({ show, onClose, index }: ContractModalProps) {
  if (!show || index === null) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-2 text-[#2d5016]">Contract #{index + 1}</h3>
        <p className="text-sm text-gray-700 mb-4">Details about the contract will appear here.</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#2d5016] text-white rounded hover:bg-[#3c6e22]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
