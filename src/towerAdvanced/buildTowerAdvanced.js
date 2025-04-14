export function towerBuilder(nFloors, nBlockSz) {
  const [blockWidth, blockHeight] = nBlockSz;
  const tower = [];
  const totalWidth = (2 * nFloors - 1) * blockWidth;

  for (let i = 0; i < nFloors; i++) {
    const numBlocks = 1 + 2 * i;
    const floorWidth = numBlocks * blockWidth;
    const padding = " ".repeat((totalWidth - floorWidth) / 2);
    const block = "*".repeat(blockWidth);
    const floorStr = padding + block.repeat(numBlocks) + padding;

    for (let j = 0; j < blockHeight; j++) {
      tower.push(floorStr);
    }
  }

  return tower;
}

// Example 1:
const nFloors1 = 3;
const blockSize1 = [2, 3];
const result1 = towerBuilder(nFloors1, blockSize1);
console.log(result1);
/*
[
  '    ** ',
  '    ** ',
  '    ** ',
  '  ****** ',
  '  ****** ',
  '  ****** ',
  '**********',
  '**********',
  '**********'
]
*/

// Example 2:
const nFloors2 = 6;
const blockSize2 = [2, 1];
const result2 = towerBuilder(nFloors2, blockSize2);
console.log(result2);
/*
[
  '          ** ',
  '        ****** ',
  '      ********** ',
  '    ************** ',
  '  ****************** ',
  '**********************'
]
*/
