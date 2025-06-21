export default function ContractsHistory() {
  const completedContracts = [
    {
      id: 1,
      location: 'City Centre, Newtown, Kolkata, West Bengal',
      earnings: 70,
      status: 'Verified',
      image: '/api/placeholder/200/120'
    },
    {
      id: 2,
      location: 'City Centre, Newtown, Kolkata, West Bengal',
      earnings: 40,
      status: 'Verified',
      image: '/api/placeholder/200/120'
    },
    {
      id: 3,
      location: 'City Centre, Newtown, Kolkata, West Bengal',
      earnings: 80,
      status: 'Verified',
      image: '/api/placeholder/200/120'
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        📋 Contracts History
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        {completedContracts.map((contract) => (
          <div key={contract.id} className="border rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={contract.image}
                alt="Completed contract"
                className="w-full h-24 object-cover"
              />
              <div className="absolute inset-0 bg-green-500 bg-opacity-90 flex flex-col justify-center items-center text-white">
                <div className="text-sm font-semibold">{contract.status}</div>
                <div className="text-lg font-bold">+{contract.earnings} ZVR</div>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-600">{contract.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}