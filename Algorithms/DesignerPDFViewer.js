// Designer PDF Viewer
function designerPdfViewer(h, word) {
  return Math.max(...word.split('').map(x => h[x.charCodeAt() - 97])) * word.length
}
