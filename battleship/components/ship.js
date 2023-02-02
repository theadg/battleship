export default function Ship(len) {
  return {
    length: len,
    hits: 0,
    hit: function () {
      this.hits += 1;
    },
    isSunk: function () {
      return this.hits === this.length;
    },
  };
}
