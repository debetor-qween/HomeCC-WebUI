export default class Common {
  getId() {
      let mask = 'xxxxxxxxxx', map = '0123456789abcdef';
      const length = map.length;
      return mask.replace(/x/g, () => map[Math.floor((Math.random() * length))]);
  }
  
}
