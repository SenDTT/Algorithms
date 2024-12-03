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
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;
  let result: TreeNode | null = null;

  if (root.val == val) return root;

  if (root.left) result = searchBST(root.left, val);

  if (result) return result;

  if (root.right) result = searchBST(root.right, val);

  return result;
}
