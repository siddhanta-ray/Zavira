// components/ContractHistoryCard.tsx
export function ContractHistoryCard({
  image,
  reward,
  location,
}: {
  image: string;
  reward: string;
  location: string;
}) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md">
      <img src={image} alt={location} className="w-full h-32 object-cover" />
      <div className="absolute top-0 left-0 w-full bg-[#2d5016]/90 text-white font-mono px-3 py-1 text-sm font-bold">
        Verified +{reward} ZVR
      </div>
      <div className="bg-white px-2 py-1 font-mono text-xs text-[#2d5016]">{location}</div>
    </div>
  );
}
