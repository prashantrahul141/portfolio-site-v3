export const chunkArrayInGroups = <ArrayType>(
  arr: Array<ArrayType>,
  size: number
) => {
  const result = [];
  let temp = [];

  for (let a = 0; a < arr.length; a++) {
    temp.push(arr[a]);
    if (a % size === size - 1) {
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length > 0) result.push(temp);

  return result;
};
