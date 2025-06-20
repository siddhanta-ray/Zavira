interface ContractCardProps {
  onClick?: () => void;
  color?: 'nearby' | 'history';
}

export default function ContractCard({ onClick, color = 'nearby' }: ContractCardProps) {
  return (
    <div
      onClick={onClick}
      className={`h-32 md:h-28 rounded-lg shadow cursor-pointer hover:scale-105 transition-all ${
        color === 'nearby' ? 'bg-green-400' : 'bg-green-200'
      }`}
    />
  );
}
