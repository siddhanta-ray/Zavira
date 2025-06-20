
export default function HowWeOperate() {
  return (
    <section className="h-screen snap-start bg-lime-200 pt-24 px-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">How We Operate</h2>
      <ul className="space-y-4">
        <li className="bg-gray-100 p-4 rounded">Step 1: Volunteers register on the platform</li>
        <li className="bg-gray-100 p-4 rounded">Step 2: Cleanup tasks are assigned</li>
        <li className="bg-gray-100 p-4 rounded">Step 3: Participants complete tasks and submit proof</li>
        <li className="bg-gray-100 p-4 rounded">Step 4: Rewards are issued through blockchain</li>
      </ul>
    </section>
  );
}