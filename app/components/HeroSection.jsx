'use client';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [showCounter, setShowCounter] = useState(false);
  const fullText = "رابطة مشجعي نادي برشلونة في ";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowCounter(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* الخلفية المتحركة */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-yellow-600 to-green-800">
        {/* كرات متحركة تمثل العلم */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-green-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-yellow-300 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-green-400 rounded-full opacity-35 animate-pulse"></div>
        
        {/* النجوم الخلفية */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 text-center text-white px-4">
        {/* النص المكتوب */}
        <h1 className="titelpage">
          {displayText}
          {displayText.length === fullText.length && (
            <div className='titelmrandfls'>
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                موريتانيا
              </span>
                <img style={{ 
                  width: '40px',
                  height: '40px'
                 }} src="https://img.freepik.com/premium-photo/national-flag-palestine-background-with-flag-palestine_659987-34798.jpg" alt="" />
            </div>
          )}
        </h1>

        <div>
          <div className='Stylbigimglogoweb'>
            <div className='inldmovrt colddagmr'></div>
            <div className='inldmovrm colegdmr'></div>
            <div className='inldmovrb colesgrgmr'></div>
            
            <div className='inldmovlt colegdmr'></div>
            <div className='inldmovlm colesgrgmr'></div>
            <div className='inldmovlb colddagmr'></div>
            <img className='logoweb' src="/fcbmr.jpg" alt="" />
          </div>
        </div>

        {/* عداد التنازلي لعيد الاستقلال */}
        <div className='timemr'>
          {showCounter && <IndependenceCounter />}
        </div>

        {/* الأزرار */}
        <div className="stbtninsectiohome">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            🎉 الانتساب للرابطة
          </button>
          <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            ⚽ استكشاف المزيد
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

// مكون عداد الاستقلال
const IndependenceCounter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const independenceDay = new Date('2025-11-28');
    const now = new Date();
    const difference = independenceDay - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return (
    <div className="bg-opacity-50 rounded-2xl p-6 backdrop-blur-sm">
      <h3 className="tieltimeedit text-2xl font-bold mb-4">⏳ العد التنازلي لعيد الاستقلال 
        <span className="bg-gradient-to-r fs-6 from-yellow-400 to-green-400 bg-clip-text text-transparent animate-pulse">
          65
        </span>
      </h3>
      <div className="flex gap-4 justify-center">
        <TimeUnit value={timeLeft.days} label="يوم" />
        <TimeUnit value={timeLeft.hours} label="ساعة" />
        <TimeUnit value={timeLeft.minutes} label="دقيقة" />
        <TimeUnit value={timeLeft.seconds} label="ثانية" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="text-center">
      <div className="bg-white text-green-900 rounded-lg py-2 px-3 text-2xl font-bold min-w-[60px]">
        {value}
      </div>
      <div className="text-yellow-300 mt-2">{label}</div>
    </div>
  );
}