'use client';
import { useState, useEffect } from 'react';
import { getArabicTimeRemaining } from '../utils/dateUtils';

export default function MatchesSection(datmatchfcballs) {
  const [nextMatchTime, setNextMatchTime] = useState({});
  
  useEffect(() => {
    // محاكاة بيانات المباراة القادمة
    const matchDate = new Date(datmatchfcballs.datMatchFcB.matches[0].utcDate);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = matchDate - now;

      setNextMatchTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <h2 className="text-4xl font-bold text-center mb-4 text-green-900">
          ⚽ المباريات القادمة
        </h2>
        <p className="text-center text-gray-600 mb-12">
          تابع أهم مواجهات الفريق
        </p>

        {/* عداد المباراة القادمة */}
        <div className="bg-gradient-to-r from-green-800 to-yellow-600 rounded-2xl p-8 text-white text-center mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">المباراة القادمة</h3>
          <div className="flex justify-center gap-6 mb-6">
            <CountdownUnit value={nextMatchTime.days} label="أيام" />
            <CountdownUnit value={nextMatchTime.hours} label="ساعات" />
            <CountdownUnit value={nextMatchTime.minutes} label="دقائق" />
            <CountdownUnit value={nextMatchTime.seconds} label="ثواني" />
          </div>
          <div className="text-xl">
            🆚 برشلونة vs ريال مدريد - الدوري الإسباني
          </div>
        </div>

        {/* بطاقات المباريات */}
        <div className="boxsmatchesfcm">
          {datmatchfcballs.datMatchFcB.matches.slice(0, 3).map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
}

const CountdownUnit = ({ value, label }) => {
  return (
    <div className="text-center">
      {/* <div className="bg-black bg-opacity-30 rounded-lg py-3 px-4 text-3xl font-bold min-w-[80px] backdrop-blur-sm stlbtntymtomatch"> */}
      <div className="stlbtntymtomatch">
        {value || 0}
      </div>
      <div className="text-yellow-300 mt-2 font-semibold">{label}</div>
    </div>
  );
}

const MatchCard = ({ match }) => {
  return (
    <div className="boxtoshowdatmatch hover:-translate-y-2">
      <div className="p-6">
        {/* الفريقان */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">
              <img style={{ width: '55px', height: '55px' }} src={match.homeTeam.crest} alt={match.homeTeam.name} />
            </div>
            <div className="font-bold text-green-900 titelsectrionplayers">{match.homeTeam.name}</div>
          </div>
          
          <div className="text-2xl font-bold text-gray-500">
            <img className='logotypemasth' src={match.competition.emblem} alt={match.competition.type} />
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">
              <img style={{ width: '55px', height: '55px' }} src={match.awayTeam.crest} alt={match.awayTeam.name} />
            </div>
            <div className="font-bold text-green-900 titelsectrionplayers">{match.awayTeam.name}</div>
          </div>
        </div>

        {/* معلومات المباراة */}
        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-2 text-yellow-600">
            <span>📅</span>
            <span>{getArabicTimeRemaining(match.utcDate)}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-green-600">
            <span> جولة: </span>
            <span>{match.matchday}</span>
          </div>
            <span className='titelsectrionplayers'>{match.competition.type}</span>
        </div>
      </div>
    </div>
  );
}