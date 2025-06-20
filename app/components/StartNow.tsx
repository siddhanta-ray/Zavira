export default function StartNow() {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Start Your Journey</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: '📋',
            title: 'Upload Your Requirements',
            text: 'Share your waste management needs and let our AI-powered system analyze the best solutions for your specific requirements.'
          },
          {
            icon: '🎯',
            title: 'Take Assessment',
            text: 'Complete our comprehensive sustainability assessment to identify opportunities and create your personalized action plan.'
          },
          {
            icon: '👥',
            title: 'Become a Member',
            text: 'Join our community of environmental champions and access exclusive resources, tools, and expert support.'
          }
        ].map((card, index) => (
          <div key={index} className="bg-white p-8 text-center rounded-3xl shadow-md hover:-translate-y-1 transition-all border-2 border-transparent hover:border-[#7fb069]">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#d4f1a4] text-3xl mx-auto mb-6">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-[#2d5016] mb-2">{card.title}</h3>
            <p className="text-sm text-[#4a7c59]">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}