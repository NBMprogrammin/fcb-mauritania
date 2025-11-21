'use client';
import { useRef } from 'react';

const celebrities = [
  { id: 1, name: "Sileye Djiby Sow", profession: "إعلامية", image: "/Sileye_Djiby_Sow.jpg", social: { facebook: "https://www.facebook.com/profile.php?id=61581911201591&mibextid=rS40aB7S9Ucbxw6v"} },
  { id: 2, name: "EL Abbass", profession: "رياضي سابق", image: "/EL_Abbass.jpg", social: { facebook: "https://www.facebook.com/ahmedou.karlos?mibextid=rS40aB7S9Ucbxw6v", tiktok: "https://www.tiktok.com/@elabbas06?_r=1&_t=ZM-91aj7yUHzwW" } },
  { id: 3, name: "يعقوب محمد لمين", profession: "فنان تشكيلي", image: "/يعقوب_محمد_لمين.jpg", social: { facebook: "https://www.facebook.com/yacoub.mouhamed.79", tiktok: "https://www.tiktok.com/@yacoub_katloni?_r=1&_t=ZM-91aiyMdVpV6", } },
  { id: 4, name: "عبد الله ولد محمد", profession: "ممثل", image: "https://svgsilh.com/svg_v2/1299368.svg", social: {  } },
  { id: 5, name: "إبراهيم ولد سيدي", profession: "كاتب", image: "https://img.freepik.com/free-vector/joyful-child-jumping-with-excitement_1308-182468.jpg?semt=ais_incoming&w=740&q=80", social: {  } },
  { id: 6, name: "الحسن ولد البشير", profession: "رياضي", image: "https://img.lovepik.com/png/20231110/exciting-clipart-cartoon-figure-running-while-he-gets-excited-vector_548845_wh1200.png", social: {  } },
  { id: 7, name: "عمر ولد عبد الله", profession: "فنان", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiq0w41oFAYrfQf-GNr_ee8VxOChbYLwnMQ&s", social: {  } },
];

export default function CelebritiesSection() {
  const sliderRef = useRef(null);

  const scrollToSlide = (direction) => {
    const slider = sliderRef.current;
    const cardWidth = slider.querySelector('.celebrity-card').offsetWidth + 24; // عرض الكارد + الـ gap
    const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
    
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 mauritania-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white text-glow">
          🌟 مشاهير البرسا في موريتانيا
        </h2>
        <p className="text-center text-yellow-200 mb-8">
          شخصيات وطنية تشاركنا حب البرشلونة
        </p>

        {/* السلايدر */}
        <div className="relative mb-12">
          {/* أزرار التنقل */}
          <button 
            onClick={() => scrollToSlide('prev')}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 md:w-12 md:h-12 rounded-full z-10 flex items-center justify-center transition-all shadow-lg backdrop-blur-sm border border-white/30"
          >
            <span className='btntoactionslide'>
              {'>'}
            </span>
          </button>
          
          <button 
            onClick={() => scrollToSlide('next')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 md:w-12 md:h-12 rounded-full z-10 flex items-center justify-center transition-all shadow-lg backdrop-blur-sm border border-white/30"
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
            {celebrities.map((celebrity) => (
              <div 
                key={celebrity.id} 
                className="flex-shrink-0 w-64 md:w-72 lg:w-80 snap-center celebrity-card"
              >
                <CelebrityCard celebrity={celebrity} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const CelebrityCard = ({ celebrity }) => {
  return (
    <div style={{ height: '320px', position: 'relative', }} className="relative group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-transparent hover:border-yellow-400 hover:bg-white/20 transition-all duration-400 transform hover:scale-102 shadow-lg">
      {/* الصورة - تأخذ 100% عرض */}
      <div className="relative h-100 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-yellow-400 flex items-center justify-center">
          <span className="text-4xl text-white">
            <img style={{ position: 'absolute', top: '0px', left: '0px', height: '100%' }} src={celebrity.image ? celebrity.image : 'https://www.fcbarcelona.com/resources/v3.3.2-7537/i/elements/default-player-large.png'} alt="" />
          </span>
        </div>
      </div>

      {/* المحتوى */}
      <div className="showmoredatuser">
        <h3 className="font-bold text-white text-lg mb-1">{celebrity.name}</h3>
        <p className="text-yellow-200 text-sm mb-3">{celebrity.profession}</p>
        
        {/* روابط التواصل الاجتماعي */}
        <div className="flex justify-center gap-3">
          {celebrity.social.facebook && (
            <a href={celebrity.social.facebook} className="text-white hover:text-blue-400 transition-colors text-lg" target='_blank' title="فيسبوك">
              <img className='imgiconsol' src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" />
            </a>
          )}
          {celebrity.social.tiktok && (
            <a href={celebrity.social.tiktok} className="text-white hover:text-black transition-colors text-lg" target='_blank' title="تيك توك">
              <img className='imgiconsol' src="https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=000000" alt="" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}