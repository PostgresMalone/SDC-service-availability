const getMonthDayYear = (datestring) => {
  const arr = datestring.split('/');
  arr[0]--; // zero-index months
  return arr;
};

export default getMonthDayYear;