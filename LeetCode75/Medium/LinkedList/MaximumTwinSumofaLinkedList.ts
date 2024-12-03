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
import { ListNode } from "../../../Common/ListNode";
function pairSum(head: ListNode | null): number {
  if (head == null) return 0;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast != null && fast.next != null) {
    slow = slow ? slow.next : null;
    fast = fast.next.next;
  }

  let prev: ListNode | null = null;
  let cur: ListNode | null = slow;

  while (cur != null) {
    let next: ListNode | null = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  let maxSum: number = 0;
  while (prev != null && head) {
    maxSum = Math.max(maxSum, prev.val + head.val);
    prev = prev.next;
    head = head.next;
  }

  return maxSum;
}
