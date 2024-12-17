/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
  let oddDummy: ListNode = new ListNode(0);
  let evenDummy: ListNode = new ListNode(0);
  let odd = oddDummy;
  let even = evenDummy;

  let index = 1;

  while (head) {
    if (index % 2 === 0) {
      even.next = head;
      even = even.next;
    } else {
      odd.next = head;
      odd = odd.next;
    }
    head = head.next;
    index++;
  }
  even.next = null;

  odd.next = evenDummy.next;

  return oddDummy.next;
}
