// Insertion Sort - Part 1
function insertionSort1(n, arr) {
  let i = n - 1
  let store = arr[i]
  i--
  while (i >= 0 && arr[i] >= store) {
    arr[i + 1] = arr[i]
    console.log(arr.toString().replace(/,/g, ' '))
    i--
  }
  arr[i + 1] = store
  console.log(arr.toString().replace(/,/g, ' '))
}
