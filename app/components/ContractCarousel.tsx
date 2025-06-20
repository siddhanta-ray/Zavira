'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ContractCard from './ContractCard';

interface ContractCarouselProps {
  title: string;
  cards: number[];
  onCardClick?: (index: number) => void;
  type?: 'nearby' | 'history';
}

export default function ContractCarousel({
  title,
  cards,
  onCardClick,
  type = 'nearby'
}: ContractCarouselProps) {
  return (
    <div className="mb-8">
      <h2 className="text-md font-semibold text-[#2d5016] mb-3">{title}</h2>
      <Swiper spaceBetween={16} slidesPerView={2} breakpoints={{ 768: { slidesPerView: type === 'history' ? 5 : 4 } }}>
        {cards.map((_, i) => (
          <SwiperSlide key={i}>
            <ContractCard
              onClick={onCardClick ? () => onCardClick(i) : undefined}
              color={type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
