import dynamic from "next/dynamic";

// استيراد المكونات بشكل ديناميكي للأداء أفضل
const HeroSection = dynamic(() => import("./components/HeroSection"));
const MatchesSection = dynamic(() => import("./components/MatchesSection"));
const PlayersSection = dynamic(() => import("./components/PlayersSection"));
const CelebritiesSection = dynamic(() =>
  import("./components/CelebritiesSection")
);
const AchievementsSection = dynamic(() =>
  import("./components/AchievementsSection")
);
import Footer from "./components/Footer";

let datplayers = [];
let datMatchFcB = [];
export default async function Home() {
  // Her Start Get Data Match Clup
  try {
    const responseMatch = await fetch(
      "https://api.football-data.org/v4/teams/81/matches?status=SCHEDULED",
      {
        headers: {
          "X-Auth-Token": "eb8f6e61d5d84618a8b3201bcc5ecb07",
        },
        next: {
          // revalidate: 18000, // ✅ 5 ساعات
          revalidate: 600, // ✅  10 دقايق
        },
      }
    );

    if (responseMatch.ok) {
      datMatchFcB = await responseMatch.json();
    }
  } catch (error) {
    console.error("Error fetching players data:", error);
    datMatchFcB = []; // ✅ بيانات افتراضية في حالة الخطأ
  } //== End Get Data Match Clup ==//

  // Start Get Data Players For Fc Barcelone
  try {
    const response = await fetch(
      "https://api-fcb.pulselive.com/content/fcbarcelona/bio/fr",
      {
        next: {
          revalidate: 90 * 24 * 60 * 60, // ✅ 3 أشهر = 7,776,000 ثانية
        },
      }
    );

    if (response.ok) {
      datplayers = await response.json();
    }
  } catch (error) {
    console.error("Error fetching players data:", error);
    datplayers = []; // ✅ بيانات افتراضية في حالة الخطأ
  } //== End Get Data Players For Fc Barcelone ==//

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      <HeroSection />
      <MatchesSection datMatchFcB={datMatchFcB} />
      <PlayersSection datplayers={datplayers} />
      <CelebritiesSection />
      <AchievementsSection />
      <Footer />
    </main>
  );
}
