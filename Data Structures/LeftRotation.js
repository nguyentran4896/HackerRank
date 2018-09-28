// Left Rotation
function main() {
  const nd = readLine().split(' ');

  const n = parseInt(nd[0], 10);

  const d = parseInt(nd[1], 10);

  const arr = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

  let length = arr.length
  for (let i = 0; i < d; i++) {
    arr.push(arr[i])
  }
  arr.splice(0, d)
  // return arr
  console.log(arr.toString().replace(/,/g, ' '))
}
