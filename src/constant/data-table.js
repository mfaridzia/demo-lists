export const columns = [{
  name: 'Komoditas'
},{
  name: 'Harga',
  sort: {
    compare: (a, b) => {
      if (a > b) {
        return 1;
      } else if (b > a) {
        return -1;
      } else {
        return 0;
      }
    }
  }
},{
  name: 'Ukuran',
  sort: {
    compare: (a, b) => {
      if (a > b) {
        return 1;
      } else if (b > a) {
        return -1;
      } else {
        return 0;
      }
    }
  }
},{
  name: 'Area'
},{
  name: 'Tanggal'
}];