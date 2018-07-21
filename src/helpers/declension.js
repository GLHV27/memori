const declension = (num, dict = []) => {
    let numeral = ' '+num;
    let tens = numeral.substr(-2,1);
    let ones = numeral.substr(-1,1);

    if ('' + num === '0') {
      numeral = (typeof(dict['zero']) !== 'undefined') ? 'zero' : 'many';
    } else if (tens === '1') {
      numeral = 'many';
    } else {
      switch (ones) {
        case '1':
          numeral = 'one';
          break;
        case '2':
        case '3':
        case '4':
          numeral = 'some';
          break;
        default:
          numeral = 'many';
          break;
      }
    }

    return (''+dict[numeral]).replace(/%num%/gim, num);
};

export default declension;
