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
function longestZigZag(root: TreeNode | null): number {
  let longest: number = 0;

  const findLongestZigZag = (
    node: TreeNode | null,
    isLeft: boolean,
    h: number
  ) => {
    if (!node) return;

    if (isLeft) {
      findLongestZigZag(node.right, false, h + 1);
      findLongestZigZag(node.left, true, 1);
    } else {
      findLongestZigZag(node.left, true, h + 1);
      findLongestZigZag(node.right, false, 1);
    }

    longest = Math.max(h, longest);
  };

  findLongestZigZag(root, true, 0);
  findLongestZigZag(root, false, 0);

  return longest;
}
