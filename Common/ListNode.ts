export class ListNode {
  aVal: number;
  aNext: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.aVal = val === undefined ? 0 : val;
    this.aNext = next === undefined ? null : next;
  }

  get next(): ListNode | null {
    return this.aNext;
  }

  get val(): number {
    return this.aVal;
  }

  set next(n: ListNode | null) {
    this.aNext = n;
  }

  set val(v: number) {
    this.aVal = v;
  }
}
