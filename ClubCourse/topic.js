var topic = [
    "寫歌作曲編舞",
    "專輯MV錄製",
    "畫報拍攝準備",
    "專輯上市+MV Release",
    "Showcase",
    "Comeback Stage"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0)
    startDate.setMinutes(0);
    startDate.setSeconds(0);    
}

setMonthAndDay(4,1);