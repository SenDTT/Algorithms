import { ListNode } from "../../Common/ListNode.ts";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let result: ListNode | null = head;
  while (result.next) {
    if (result.next.val == result.val) {
      result.next = result.next.next;
    } else {
      result = result.next;
    }
  }

  return head;
}

const testCase1 = new ListNode(1, new ListNode(1, new ListNode(2)));
console.log(deleteDuplicates(testCase1));

const testCase2 = new ListNode(1);
testCase2.next = new ListNode(1);
testCase2.next.next = new ListNode(2);
testCase2.next.next.next = new ListNode(3);
testCase2.next.next.next.next = new ListNode(3);
console.log(deleteDuplicates(testCase2));
