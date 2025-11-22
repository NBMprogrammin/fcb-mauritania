'use client';
import { useRef } from 'react';

export default function PlayersSection({datplayers}) {
  const sliderRef = useRef(null);

  const scrollToSlide = (direction) => {
    const slider = sliderRef.current;
    // let scrollAmount;
    
    // if (window.innerWidth <= 300) {
    //   scrollAmount = direction === 'next' ? '100%' : '-100%'; // 200 + 16
    // } else if (window.innerWidth <= 450) {
    //   scrollAmount = direction === 'next' ? 320 : -320; // 300 + 20
    // } else {
    //   scrollAmount = direction === 'next' ? 440 : -440; // 440 + 24
    // }
    const cardWidth = slider.querySelector('.celebrity-card').offsetWidth + 24; // عرض الكارد + الـ gap
    const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
    
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  if(datplayers && datplayers.content) {
    return (
      <section className="stylcolodbggpold py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="titelsectrionplayers text-4xl font-bold text-center mb-4 text-green-900">
            🌟 نجوم الفريق
          </h2>
          <p className="titelsectrionplayers text-center text-gray-600 mb-12">
            تعرف على أبرز لاعبي برشلونة
          </p>

          {/* السلايدر CSS النقي */}
          <div className="relative">
            {/* أزرار التنقل */}
            <button 
              onClick={() => scrollToSlide('prev')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white w-12 h-12 rounded-full z-10 flex items-center justify-center transition-all shadow-lg hover:scale-110 border-2 border-white"
            >
              <span className='btntoactionslide'>
                {'>'}
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSlide('next')}
              style={{ fontSize: '20px' }}
              className="absolute right-0 top-1/2 fs-2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white w-12 h-12 rounded-full z-10 flex items-center justify-center transition-all shadow-lg hover:scale-110 border-2 border-white"
            >
              <span className='btntoactionslide'>
                {'<'}
              </span>
            </button>

            {/* حاوية السلايدر */}
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto scrollbar-hide gap-2 snap-x snap-mandatory scroll-smooth"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {datplayers ? datplayers.content.map((player) => (
                <div 
                  key={player.id} 
                  className="flex-shrink-0 w-100 snap-center celebrity-card" // عرض ثابت للكارد
                >
                  <PlayerCard player={player} />
                </div>
              )) : ''}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const PlayerCard = ({ player }) => {
  return (
    <div className="group cardSatPayle relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-400 transform ">
      {/* صورة اللاعب */}
      <div className="cardpayshowdat relative h-100 overflow-hidden">
        <img 
          src={player.headshot.imageUrl ? player.headshot.imageUrl : 'https://www.fcbarcelona.com/resources/v3.3.2-7537/i/elements/default-player-large.png'} 
          alt={player.title}
          className="w-full h-100 imgcardpale object-cover transition-all duration-700 scale-110 group-hover:scale-100 "
        />
        
        {/* الإحصائيات */}
        <div className='stlcardsf'>
          <div className='stlnameandmbrplay'>
            <div className='numberpaley'>{player.metadata?.['shirt-number'] ? player.metadata?.['shirt-number'] : '0'}</div>
            <div className='text-right'>
              <h3 className="text-lg font-bold text-green-900 mb-1" style={{ color: '#fff' }}>{player.title}</h3>
              <p className="text-gray-600 text-sm" style={{ color: '#fff' }}>{player.position}</p>
            </div>
          </div>
          <div className={`p-4 text-white w-full dfulttyp
              `}>
            <div className="AllDatShowPlay">
              <div className="stydatplayshow">
                <span className="text-sm">المباريات</span>
                <span className="font-bold">109</span>
                <span className="text-sm">20252026</span>
                <span className="font-bold">12</span>
              </div>
              <div className="stydatplayshow">
                <span className="text-sm">الأهداف</span>
                <span className="font-bold text-yellow-300">21</span>
                <span className="text-sm">20252026</span>
                <span className="font-bold text-yellow-300">9</span>
              </div>
              <div className="stydatplayshow">
                <span className="text-sm">التمريرات</span>
                <span className="font-bold">3</span>
                <span className="text-sm">2025/2026</span>
                <span className="font-bold">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}