export default function Footer() {
  return (
    <footer className="bg-[#4A7C59] text-white p-10 rounded-3xl text-center">
      <div className="flex justify-center gap-8 mb-6">
        {['About Us', 'Services', 'Contact', 'Privacy', 'Terms'].map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase().replace(/ /g, '')}`}
            className="text-[#EEFFC5] hover:text-white font-medium"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="text-sm">&copy; 2025 EcoChain. Building sustainable futures through innovative waste management.</p>
    </footer>
  );
}