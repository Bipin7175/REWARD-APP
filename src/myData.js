export const myData = {
    customerA: { JAN: [160, 150, 30], FEB: [320, 240], MAR: [450, 100, 760] },
    customerB: { JAN: [350, 90], FEB: [220, 140], MAR: [250, 100, 560, 111] },
    customerC: { JAN: [480, 580, 90], FEB: [320, 240, 345], MAR: [250, 300, 760] }
  };
  
  export const calReward = num => {
    if (num > 100) {
      return 2 * (num - 100) + 50;
    } else if (num > 50) {
      return num - 50;
    } else {
      return 0;
    }
  };