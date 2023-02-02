// TODO: find a better way to create a 10x10 array
const board = () => {
  // create a 10 x 10 gameboard here
  const arr = [];

  for (let i = 0; i < 10; i++) {
    const newArr = [];
    for (let j = 0; j < 10; j++) {
      newArr.push(0);
    }

    arr.push(newArr);
  }

  return arr;
};

// TODO: refactor naming
export default function GameBoard() {
  const gb = board();

  return {
    gb,
  };
}
