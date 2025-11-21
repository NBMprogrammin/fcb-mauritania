export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-6 mb-6">
          <div className="w-18 h-18 bg-yellow-500 rounded-full flex items-center justify-center">
            <img style={{ width: '55px', height: '55px' }} src="https://resources.fcbarcelona.pulselive.com/badges/club/88/BCN.png" alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img  style={{ width: '65px', height: '65px' }} src="/fcbmr.jpg" alt="" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-yellow-400">
          رابطة مشجعي برشلونة في موريتانيا
        </h3>
        
        <p className="text-lg mb-4 opacity-90">
          🔵🔴 اتحاد العاطفة الكروية والهوية الوطنية 🔴🔵
        </p>
        
        <div className="border-t border-green-700 pt-6 mt-6">
          <p className="text-yellow-300">
            ⚽ تأسست 2025 - بمناسبة الذكرى 65 للاستقلال المجيد 🇲🇷
          </p>
          <p className="text-sm opacity-75 mt-2">
            Més que un club - أكثر من مجرد ناد
          </p>
        </div>
      </div>
    </footer>
  );
}