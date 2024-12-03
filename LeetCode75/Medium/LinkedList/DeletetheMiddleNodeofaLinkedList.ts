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

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  // find middle
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let result: ListNode | null = null;

  while (fast && fast.next) {
    result = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }

  if (result) {
    result.next = slow!.next;
  }

  return head;
}
