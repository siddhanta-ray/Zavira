export default function FeaturesSection() {
  const features = [
    {
      title: 'Location-Based Matching',
      description:
        'Smart geo-location system connects contractors with nearby issues, optimizing response times and efficiency.',
    },
    {
      title: 'AI-Powered Verification',
      description:
        'Google Gemini validates image authenticity and categorizes issues automatically.',
    },
    {
      title: 'Blockchain Transparency',
      description:
        'All transactions, stakes, and rewards are recorded on-chain, ensuring complete transparency and trust.',
    },
    {
      title: 'Stake-to-Commit System',
      description:
        'Contractors stake tokens to ensure accountability, getting rewards upon successful completion and verification.',
    },
    {
      title: 'DAO Governance',
      description:
        'Community-driven validation and platform governance through decentralized autonomous organization.',
    },
    {
      title: 'Impact Analytics',
      description:
        'Track community improvements, contractor performance, and overall platform impact with detailed analytics.',
    },
  ];

  return (
    <section id="features" className="mb-20">
      <h2 className="font-mono text-4xl font-bold text-[#2D5016] mb-10">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#F8FDF4] rounded-2xl shadow-md p-6 text-center flex flex-col items-center"
          >
            {/* Icon Placeholder */}
            <div className="w-12 h-12 bg-[#EEFFC5] rounded-md mb-4"></div>

            {/* Title */}
            <h3 className="font-mono text-xl font-bold text-[#2D5016] mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="font-mono text-md text-[#2D5016]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
