// components/WelcomeSection.js
export default function WelcomeSection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome back, Contractor
          </h2>
          <p className="text-gray-600 flex items-center">
            <span className="mr-2">📍</span>
            Newtown, Kolkata 700034
          </p>
        </div>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-center">
            <div className="font-bold text-lg">23</div>
            <div className="text-sm">Contracts Completed</div>
          </div>
          <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-center">
            <div className="font-bold text-lg">03</div>
            <div className="text-sm">Active Contracts</div>
          </div>
          <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-center">
            <div className="font-bold text-lg">4.9</div>
            <div className="text-sm">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}