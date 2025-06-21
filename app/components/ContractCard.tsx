export default function ContractCard({ image, location, action, actionLabel }: {
  image: string;
  location: string;
  action?: React.ReactNode;
  actionLabel?: string;
}) {
  return (
    <div className="bg-[#f5fdf0] rounded-xl p-3 shadow-md">
      <img src={image} alt={location} className="rounded-md mb-2 w-full h-40 object-cover" />
      <p className="font-mono text-sm text-[#2d5016] mb-2">{location}</p>
      {action && (
        <div className="bg-[#2d5016] text-white font-mono text-sm px-3 py-1 rounded-full text-center">
          {actionLabel || action}
        </div>
      )}
    </div>
  );
}