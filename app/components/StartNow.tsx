// components/StartNow.tsx
export default function StartNow() {
  return (
    <section className="h-screen snap-start bg-lime-200 pt-50 px-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">Start Now</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow p-4  rounded">
          <h4 className="font-bold mb-2">Create an Account</h4>
          <p>Sign up to get started and earn rewards.</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h4 className="font-bold mb-2">Join a Cleanup</h4>
          <p>Contribute to real-world cleanups in your area.</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h4 className="font-bold mb-2">Track Your Impact</h4>
          <p>Visualize how much waste you've helped divert.</p>
        </div>
      </div>
    </section>
  );
}