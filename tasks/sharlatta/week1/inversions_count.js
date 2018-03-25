const arr = [99, 67, 4, 5, 0, 9, 77, 8, 5, 6, 7, 12, 77, 11, 2, 9];

const inversionsCount = (arr1, arr2) => {

};
const merge = (arr1, arr2) => {

  let L1 = arr1.length;
  let L2 = arr2.length;
  let i1 = 0, i2 = 0;
  let res = [];
  while (i1 < L1&&i2 < L2) {
    if (arr1[i1] < arr2[i2]) {
      res = [...res, arr1[i1]];
      i1++;
    }
    else {
      res = [...res, arr2[i2]];
      i2++;
    }
  }
  if (i1 < L1&&i2 === L2) {
    res = [...res, ...arr1.slice(i1)];
  }

  if (i2 < L2&&i1 === L1) {
    res = [...res, ...arr2.slice(i2)];
  }

  return res;
};

const mergeSort = (arr) => {
  let res1, res2;
  const middle = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, middle);
  const secondHalf = arr.slice(middle);
  if (firstHalf.length === 1) {
    res1 = firstHalf;
  } else {
    res1 = mergeSort(firstHalf);
  }
  if (secondHalf.length === 1) {
    res2 = secondHalf;
  }
  else {
    res2 = mergeSort(secondHalf);
  }

  return merge(res1, res2);
};

console.log(mergeSort(arr));