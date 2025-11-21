export function getTimeRemaining(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);
  const difference = target - now;

  // إذا انتهى الوقت
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPast: true
    };
  }

  // حساب الأيام، الساعات، الدقائق، الثواني
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    isPast: false
  };
}

// دالة لتحويل التاريخ إلى تنسيق عربي جميل
export function formatArabicDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  return date.toLocaleDateString('ar-SA', options);
}

// دالة للحصول على نص الوقت المتبقي بالعربية
export function getArabicTimeRemaining(targetDate) {
  const time = getTimeRemaining(targetDate);
  
  if (time.isPast) {
    return "انتهت المباراة";
  }

  const parts = [];
  
  if (time.days > 0) {
    parts.push(`${time.days} يوم`);
  }
  
  if (time.hours > 0) {
    parts.push(`${time.hours} ساعة`);
  }
  
  if (time.minutes > 0) {
    parts.push(`${time.minutes} دقيقة`);
  }

  if (parts.length === 0) {
    return `${time.seconds} ثانية`;
  }

  return parts.join(' و ');
}