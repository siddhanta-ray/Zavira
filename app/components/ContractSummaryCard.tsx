export function ContractSummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#2d5016] text-white font-mono rounded-lg px-4 py-3 text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm mt-1">{label}</div>
    </div>
  );
}