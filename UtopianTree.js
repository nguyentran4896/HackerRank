// Utopian Tree
function utopianTree(n) {
  if (!n) return 1
  if (n % 2) return 2 * utopianTree(n - 1)
  return 1 + utopianTree(n - 1)
}
