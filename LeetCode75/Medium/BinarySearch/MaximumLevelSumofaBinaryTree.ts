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
function maxLevelSum(root: TreeNode | null): number {
  let max: number = -Infinity;
  let level: number = 0;

  const result: number[][] = [];
  const sumNode = (node: TreeNode | null, level: number) => {
    if (!node) return;

    if (!result[level]) {
      result[level] = [node.val];
    } else {
      result[level].push(node.val);
    }

    sumNode(node.left, level + 1);
    sumNode(node.right, level + 1);
  };

  sumNode(root, 0);
  let sum: number;
  for (let i = 0; i < result.length; i++) {
    sum = result[i].reduce((sum, cur) => sum + cur, 0);
    if (sum > max) {
      max = sum;
      level = i;
    }
  }

  return level + 1;
}
