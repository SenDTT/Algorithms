/**
 * Definition for a binary tree node.
 *
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function findTilt(root: TreeNode | null) {
  const recursiveTree = (node: TreeNode | null) => {
    if (!node) return 0;

    let leftVal = 0;
    if (node.left) {
      leftVal = recursiveTree(node.left);
    }
    let rightVal = 0;
    if (node.right) {
      rightVal = recursiveTree(node.right);
    }

    node.val = Math.abs(leftVal - rightVal);

    return node.val;
  };

  recursiveTree(root);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

findTilt(root);
console.log(root);
