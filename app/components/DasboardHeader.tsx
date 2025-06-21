
export default function DashboardHeader({
  name,
  location,
}: {
  name: string;
  location: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold font-mono text-[#2d5016] mb-1">
        Welcome back, {name}
      </h2>
      <p className="text-[#4a7c59] text-sm font-mono">
        <span className="mr-1">📍</span>
        {location}
      </p>
    </div>
  );
}
