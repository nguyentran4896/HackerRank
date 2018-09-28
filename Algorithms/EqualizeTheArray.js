// Equalize the Array
function equalizeArray(arr) {
  var frequency = {};  // array of frequency.
  var max = 0;  // holds the max frequency.
  var result;   // holds the max frequency element.
  for (var v in arr) {
    frequency[arr[v]] = (frequency[arr[v]] || 0) + 1; // increment frequency.
    if (frequency[arr[v]] > max) { // is this frequency > max so far ?
      max = frequency[arr[v]];  // update max.
      result = arr[v];          // update result.
    }
  }
  return arr.filter(x => x !== result).length
}
