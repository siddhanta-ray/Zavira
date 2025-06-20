'use client';
import { useState } from 'react';
import ContractCarousel from '@/app/components/ContractCarousel';
import ContractModal from '@/app/components/ContractModal';

export default function Contactor() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const nearbyContracts = new Array(6).fill(0);
  const historyContracts = new Array(5).fill(0);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCardIndex(null);
  };

  return (
    <div className="min-h-screen bg-[#f1f9d0] p-6 rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-bold text-[#2d5016]">Welcome XYZ</h1>
          <p className="text-sm italic text-gray-700">Newtown, Kolkata 700034</p>
        </div>
        <div className="bg-white border border-gray-400 px-4 py-1 rounded-full text-sm shadow">
          Current token: <strong>90</strong>
        </div>
      </div>

      {/* Carousels */}
      <ContractCarousel
        title="Contracts near you:"
        cards={nearbyContracts}
        onCardClick={handleCardClick}
        type="nearby"
      />
      <ContractCarousel
        title="Contract history:"
        cards={historyContracts}
        type="history"
      />

      {/* Modal */}
      <ContractModal show={showModal} onClose={closeModal} index={selectedCardIndex} />
    </div>
  );
}
