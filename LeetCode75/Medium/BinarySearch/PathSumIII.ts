/**
 * Definition for a binary tree node.
 *
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  let count: number = 0;

  const findPath = (node: TreeNode | null, sum: number) => {
    if (!node) return;

    if (node.val === sum) count++;

    findPath(node.left, sum - node.val);
    findPath(node.right, sum - node.val);
  };

  const traverseTree = (node: TreeNode | null) => {
    if (!node) return;

    findPath(node, targetSum);

    traverseTree(node.left);
    traverseTree(node.right);
  };

  traverseTree(root);

  return count;
}
