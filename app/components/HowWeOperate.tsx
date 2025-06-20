export default function HowWeOperate() {
  const steps = [
    'Assessment & Planning',
    'Smart Collection System',
    'Advanced Processing',
    'Resource Recovery',
    'Impact Monitoring'
  ];

  return (
    <section className="bg-white p-12 rounded-3xl shadow-md mb-10">
      <h2 className="text-3xl font-bold text-[#2d5016] mb-6">How We Operate</h2>
      <div className="flex flex-col gap-6">
        {steps.map((title, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-[#f8fdf4] hover:bg-[#d4f1a4] rounded-xl px-6 py-4 transition-transform hover:translate-x-2"
          >
            <div className="w-12 h-12 bg-[#7fb069] text-white rounded-full flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>
            <div className="text-lg font-semibold text-[#2d5016]">{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}