// Print the Elements of a Linked List
function printLinkedList(head) {
  console.log(head.data)
  if (head.next) printLinkedList(head.next)
}
