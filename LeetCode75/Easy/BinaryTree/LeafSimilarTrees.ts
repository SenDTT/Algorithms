/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../../Medium/BinarySearch/PathSumIII";

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let leaf1: number[] = [];
  let leaf2: number[] = [];

  const findLeaf = (r: TreeNode | null, arr: number[]) => {
    if (!r) return;

    if (!r.left && !r.right) arr.push(r.val);

    if (r.left) findLeaf(r.left, arr);
    if (r.right) findLeaf(r.right, arr);
  };

  findLeaf(root1, leaf1);
  findLeaf(root2, leaf2);

  if (leaf1.length != leaf2.length) return false;

  for (let i = 0; i < leaf1.length; i++) {
    if (leaf1[i] != leaf2[i]) return false;
  }

  return true;
}
