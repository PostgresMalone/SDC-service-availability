const makeStar = (stars) => {
  let str = ''
  while (stars > 0) {
    str += '★';
    stars--;
  }
  return str;
};

export default makeStar;