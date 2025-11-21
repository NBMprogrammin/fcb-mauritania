'use client';
import { useState, useEffect } from 'react';

const achievements = [
  { competition: "دوري أبطال أوروبا", trophies: 5, color: "from-blue-500 to-purple-600" },
  { competition: "الدوري الإسباني", trophies: 27, color: "from-green-500 to-blue-500" },
  { competition: "كأس الملك", trophies: 31, color: "from-red-500 to-orange-500" },
  { competition: "كأس السوبر الإسباني", trophies: 15, color: "from-yellow-500 to-red-500" },
  { competition: "كأس السوبر الأوروبي", trophies: 5, color: "from-gray-500 to-blue-300" },
  { competition: "كأس العالم للأندية", trophies: 3, color: "from-green-600 to-yellow-500" }
];

export default function AchievementsSection() {
  const [animatedTrophies, setAnimatedTrophies] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedTrophies({
        total: 88,
        animated: true
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="stylcolodbggpold py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="titelsectrionplayers text-4xl font-bold text-center mb-4 text-green-900">
          🏆 خزينة الألقاب
        </h2>
        <p className="titelsectrionplayers text-center text-gray-600 mb-12">
          إنجازات برشلونة عبر التاريخ
        </p>

        {/* العدد الإجمالي */}
        <div className="text-center mb-12">
          <div className="text-6xl md:text-8xl font-bold text-yellow-500 mb-4 animate-pulse">
            {animatedTrophies.animated ? '+' + '88' : '0'}
          </div>
          <p className="text-2xl text-green-800 font-bold">لقباً قياسياً</p>
          <p className="text-gray-600 mt-2 titelsectrionplayers">Més que un club - أكثر من مجرد ناد</p>
        </div>

        {/* مخطط الإنجازات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <TrophyCard 
              key={achievement.competition}
              achievement={achievement}
              delay={index * 200}
            />
          ))}
        </div>

        {/* شعار */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-yellow-500 text-white text-2xl font-bold py-4 px-8 rounded-full inline-block animate-pulse-glow">
            🔵🔴 برشلونة - موريتانيا ... اتحاد العاطفة والهوية 🔴🔵
          </div>
        </div>
      </div>
    </section>
  );
}

const TrophyCard = ({ achievement, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = achievement.trophies / 50;
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= achievement.trophies) {
          setCount(achievement.trophies);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [achievement.trophies, delay]);

  return (
    <div style={{ backgroundColor: '#3F51B5', }} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white text-2xl`}>
        🏆
      </div>
      
      <h3 className="titelsectrionplayers text-xl font-bold text-center text-green-900 mb-2">
        {achievement.competition}
      </h3>
      
      <div className="text-3xl font-bold text-center text-yellow-600 mb-4">
        {count}
      </div>
      
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(achievement.trophies / 35) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}