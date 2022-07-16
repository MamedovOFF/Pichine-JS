//  В этой задаче нужно будет написать алгоритм поиска, который скажет, можно ли найти входное слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.

const diagonalProduct = (arr, x, y) => {
  let product = [];
  for(let i = 0; i < arr.length; i++){
     for(let j = 0; j < arr[i].length; j++){
        if(i+ y === j + x){
           product.push(arr[i][j]);
        };
     };
  };
  return product;
};

function searchSubString(puzzle, word) {
  const output = puzzle[0].map((_, colIndex) => puzzle.map(row => row[colIndex]));
  for (let i = 0; i < puzzle.length; i++) {
    if (puzzle[i].join('').includes(word) || puzzle[i].join('').includes(word.split('').reverse().join('')))
      return true
  }
  for (let i = 0; i < output.length; i++) {
    if (output[i].join('').includes(word) || output[i].join('').includes(word.split('').reverse().join('')))
      return true
  }
  for (let i = 0; i < output[0].length; i++) {
    const dioganal = diagonalProduct(puzzle, i, 0)
    for (let i = 0; i < dioganal.length; i++) {
      if (dioganal.join('').includes(word) || dioganal.join('').includes(word.split('').reverse().join('')))
      return true
    }
  }
  for (let i = 0; i < output[0].length; i++) {
    const dioganal = diagonalProduct(puzzle, 0, i)
    for (let i = 0; i < dioganal.length; i++) {
      if (dioganal.join('').includes(word) || dioganal.join('').includes(word.split('').reverse().join('')))
      return true
    }
  }
  return false
}

const examplePuzzle = [
  ["b", "l", "g", "o", "l", "d", "s"],
  ["x", "k", "q", "w", "i", "j", "p"],
  ["a", "n", "w", "k", "k", "p", "n"],
  ["h", "e", "e", "e", "k", "i", "l"],
  ["q", "e", "k", "a", "y", "q", "a"],
  ["h", "u", "h", "a", "e", "a", "u"],
  ["k", "q", "j", "c", "c", "m", "r"],
];

// Level 1
searchSubString(examplePuzzle, "like"); // true
searchSubString(examplePuzzle, "gold"); // true
searchSubString(examplePuzzle, "queen"); // true

// Level 2
searchSubString(examplePuzzle, "cake"); // true
searchSubString(examplePuzzle, "wki"); // true

