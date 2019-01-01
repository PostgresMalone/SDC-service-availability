const getMonthDayYear = (datestring) => {
  const arr = datestring.split('/').map(el => Number(el));
  arr[0]--; // zero-index months

  return arr;
};

export default getMonthDayYear;