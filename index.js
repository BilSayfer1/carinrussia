function calculate(total, broken) {
    let proportion = (broken * 100) / total;
    return Math.round(proportion) + '%';
  }
  let carsinrussia = [
    [10000, 5052],
  ];
  carsinrussia.forEach(([total, broken]) => {
    console.log(`Для числа ${total} и ${broken} процент составляет: ${calculate(total, broken)}`);
  });