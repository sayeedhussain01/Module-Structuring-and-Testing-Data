function getOrdinalNumber(num) {
  // return "1st";

  const lastOneDigit = num % 10;
  const lastTwoDigit = num % 100;
  if (lastTwoDigit == 11 || lastTwoDigit == 12 || lastTwoDigit == 13) {
    return `${num}th`;
  }

  if (lastOneDigit == 1) {
    return `${num}st`;
  }

  if (lastOneDigit == 2) {
    return `${num}nd`;
  }
  if (lastOneDigit == 3) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}

// console.log(getOrdinalNumber(22));

module.exports = getOrdinalNumber;
