'use client';
import { useRef } from 'react';

const celebrities = [
  { id: 1, name: "Sileye Djiby Sow", profession: "إعلامية", image: "/Sileye_Djiby_Sow.jpg", social: { facebook: "https://www.facebook.com/profile.php?id=61581911201591&mibextid=rS40aB7S9Ucbxw6v"} },
  { id: 2, name: "EL Abbass", profession: "رياضي سابق", image: "/EL_Abbass.jpg", social: { facebook: "https://www.facebook.com/ahmedou.karlos?mibextid=rS40aB7S9Ucbxw6v", tiktok: "https://www.tiktok.com/@elabbas06?_r=1&_t=ZM-91aj7yUHzwW" } },
  { id: 3, name: "يعقوب محمد لمين", profession: "فنان تشكيلي", image: "/يعقوب_محمد_لمين.jpg", social: { facebook: "https://www.facebook.com/yacoub.mouhamed.79", tiktok: "https://www.tiktok.com/@yacoub_katloni?_r=1&_t=ZM-91aiyMdVpV6", } },
  { id: 4, name: "مصطفى بيداه", profession: "مستحفي و طالب ج", image: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c37366752e2d30313508908faf3a08df~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=7a870628&x-expires=1763985600&x-signature=P1HeKau%2FyMcweT57uSz0g4erTgw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva", social: { tiktok: 'https://www.tiktok.com/@moustefa2?_r=1&_t=ZM-91bxpjHQLee' } },
  { id: 5, name: "بشامه", profession: "محلل", image: "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/571356990_122143455008932437_1763361656803553576_n.jpg?stp=c447.0.1154.1154a_dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_ohc=9QYZ1aesx4gQ7kNvwFbBO5Z&_nc_oc=AdkoU6PEkQspqeRlv5B7sO5a4hSl7pq0RqAJgEE-OltK9S4bi3TYJyQE_HYkKoyS7eI&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=u8eG-LsBn2jrZ-SMJn8xPw&oh=00_AfgtJf3ZPW8UUEU5y6LYSSAR_aJuWfxQ-RghnhETMhL6_w&oe=69277B38", social: {facebook: 'https://www.facebook.com/profile.php?id=61577973134638&sk=photos',  tiktok: 'https://www.tiktok.com/@bouchama99?_r=1&_d=eailgh9l4egil3&sec_uid=MS4wLjABAAAAstTlqHY2EKLGyvd3uhEnOjcSBj8N_v3fs9VB8L2KHT2iLIv9CR4B_GJL6BHd9bei&share_author_id=7105382953136440325&sharer_language=ar&source=h5_m&u_code=e729hgmjc3e9d5&timestamp=1763813157&user_id=7212221846619538438&sec_user_id=MS4wLjABAAAA2i_x2uyKwwEMVmbGS4e4yMRgaJr0DG7PanLX9f7ymJrPM19qkHL-Up3fRiBxvYRn&item_author_type=2&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7575320896405210891&share_link_id=4a59877d-ce1a-416e-8b7e-b1a4eb8b1d4d&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b9081%2Cb5836&social_share_type=5&enable_checksum=1' } },
  { id: 6, name: "احمد فك", profession: "ممثل", image: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0dc1599090240c6d208abd3c8260670b~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=ca7f22d8&x-expires=1763985600&x-signature=gHiLhunIA5WtpAVjoFLLaI%2Fbgz8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva", social: { tiktok: 'https://www.tiktok.com/@ahmedvek?_r=1&_t=ZM-91c0HNEsne8' } },
  { id: 7, name: "Isselkou Isselkou", profession: "كاتب", image: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/be1f81729f5d240a576e9409190588c9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=a0eed8e3&x-expires=1763989200&x-signature=llQ%2B9Ioj1r5bJWMxk45r4kiqFOY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva", social: { facebook: 'https://www.facebook.com/iselkou.isselkou', tiktok: 'https://www.tiktok.com/@isse.lkou?_r=1&_t=ZM-91c56Y8hJWN' } },
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
    <div className="cardusersplfcb relative group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-transparent hover:border-yellow-400 hover:bg-white/20 transition-all duration-400 transform hover:scale-102 shadow-lg">
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