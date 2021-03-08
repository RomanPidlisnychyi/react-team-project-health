export default function generateCurrentDate() {
  const nowDate = new Date();
  const year = nowDate.getFullYear().toString();
  const month = (nowDate.getMonth() + 1).toString();
  const day = nowDate.getDate().toString();

  const trDay = day.length === 2 ? day : '0' + day;
  const trMonth = month.length === 2 ? month : '0' + month;

  const newDate = trDay + '-' + trMonth + '-' + year;

  return newDate;
}
