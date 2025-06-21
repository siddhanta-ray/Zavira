export default function Contractor() {
  const nearbyContracts = new Array(4).fill(0);
  const historyContracts = new Array(5).fill(0);

  return (
    <div className="min-h-screen bg-[#f1f9d0] p-6 rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          {/* <h1 className="text-xl font-bold text-[#2d5016]">Welcome XYZ</h1> */}
          {/* <p className="text-sm italic text-gray-700">Newtown, Kolkata 700034</p> */}
        </div>
        <div className="bg-white border border-gray-400 px-4 py-1 rounded-full text-sm shadow">
          Current token: <strong>90</strong>
        </div>
      </div>

      {/* Contracts near you */}
      <div className="mb-8">
        <h2 className="text-md font-semibold text-[#2d5016] mb-3">Contracts near you:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {nearbyContracts.map((_, i) => (
            <div key={i} className="h-32 bg-green-400 rounded-lg shadow cursor-pointer hover:scale-105 transition" />
          ))}
        </div>
      </div>

      {/* Contract history */}
      <div>
        <h2 className="text-md font-semibold text-[#2d5016] mb-3">Contract history:</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {historyContracts.map((_, i) => (
            <div key={i} className="h-28 bg-green-200 rounded-lg shadow-sm cursor-pointer hover:scale-105 transition" />
          ))}
        </div>
      </div>
    </div>
  );
}
