function printDiamond(rows) {
    // Upper part
    for (let i = 1; i <= rows; i++) {
      let output = ' '.repeat(rows - i);
      for (let j = 1; j <= (2 * i - 1); j++) {
        output += '*';
      }
      console.log(output);
    }
    
    // Lower part
    for (let i = rows - 1; i >= 1; i--) {
      let output = ' '.repeat(rows - i);
      for (let j = 1; j <= (2 * i - 1); j++) {
        output += '*';
      }
      console.log(output);
    }
  }
  
printDiamond(5);
  