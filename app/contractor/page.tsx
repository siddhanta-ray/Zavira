import ContractCard from '@/app/components/ContractCard';
import { ContractSummaryCard } from '@/app/components/ContractSummaryCard';
import { ContractSearchBox } from '@/app/components/ContractSearchBox';
import { ContractHistoryCard } from '@/app/components/ContractHistoryCard';
import DashboardHeader from '@/app/components/DasboardHeader';

export default function ContractorDashboard() {
  return (
    <main className="p-6 bg-gradient-to-br from-[#f5ffe4] to-[#dcf2c3] min-h-screen font-mono">
      <DashboardHeader name="Contractor" location="Newtown, Kolkata 700034" />

      <div className="grid grid-cols-3 gap-4 mb-6">
        <ContractSummaryCard label="Contracts Completed" value="23" />
        <ContractSummaryCard label="Active Contracts" value="03" />
        <ContractSummaryCard label="Rating" value="4.9" />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="col-span-2">
          <h3 className="text-xl font-bold text-[#2d5016] mb-2">Available Contracts Near You</h3>
          <ContractSearchBox />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <ContractCard
              image="/contractu.jpg"
              location="City Centre, Newtown, Kolkata, West Bengal"
              actionLabel="Take Contract (Stake: 50 ZVR)"
            />
            <ContractCard
              image="/contractu.jpg"
              location="Chingrighata, Kolkata, West Bengal"
              actionLabel="Take Contract (Stake: 70 ZVR)"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="text-[#2d5016] font-bold mb-2">💰 1,100 ZVR | 0x7A9...3B2</div>
          <h3 className="text-lg font-bold text-[#2d5016] mb-4">📄 Active Contracts</h3>
          <ContractCard
            image="/contractu.jpg"
            location="City Centre, Newtown, Kolkata, West Bengal"
            actionLabel="30 ZVR Staked"
          />
          <ContractCard
            image="/light.jpg"
            location="Newtown, Action Area II, Kolkata, West Bengal"
            actionLabel="20 ZVR Staked"
          />
        </div>
      </div>

      <div className="bg-[#2d5016]/10 p-4 rounded-xl">
        <h3 className="text-lg font-bold text-[#2d5016] mb-4">📄 Contracts History</h3>
        <div className="grid grid-cols-3 gap-4">
          <ContractHistoryCard image="/public/icons/Chingrighata.png" reward="70" location="City Centre, Newtown, Kolkata, West Bengal" />
          <ContractHistoryCard image="/contractu.jpg" reward="40" location="City Centre, Newtown, Kolkata, West Bengal" />
          <ContractHistoryCard image="/contractu.jpg" reward="80" location="City Centre, Newtown, Kolkata, West Bengal" />
        </div>
      </div>
    </main>
  );
}