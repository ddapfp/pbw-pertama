const calculator = {
    add: (...numbers) => numbers.reduce((acc, num) => acc + num, 0),
    subtract: (...numbers) => numbers.reduce((acc, num) => acc - num),
    multiply: (...numbers) => numbers.reduce((acc, num) => acc * num, 1),
    divide: (...numbers) => numbers.reduce((acc, num) => {
      if (num === 0) {
        return 'Error';
      }
      return acc / num;
    }),
    percentage: (total, percent) => (total * percent) / 100
  };
  
  // Contoh penggunaan dan sudah di coba di console
  console.log(calculator.add(10, 20, 30));        // 60
  console.log(calculator.subtract(100, 20, 10));  // 70
  console.log(calculator.multiply(2, 3, 4));      // 24
  console.log(calculator.divide(100, 2, 5));      // 10
  console.log(calculator.percentage(200, 15));    // 30