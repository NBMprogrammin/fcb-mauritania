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