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

import { TreeNode } from "./PathSumIII";

function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  let lastVal = root.val;
  const countGoodNodes = (node: TreeNode | null, lastVal) => {
    if (!node) return 0;

    let isGoodNode: number = 0;
    if (node.val >= lastVal) {
      lastVal = node.val;
      isGoodNode = 1;
    }

    return (
      isGoodNode +
      countGoodNodes(node.left, lastVal) +
      countGoodNodes(node.right, lastVal)
    );
  };

  return countGoodNodes(root, lastVal);
}
