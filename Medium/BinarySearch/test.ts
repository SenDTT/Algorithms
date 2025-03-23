export class TreeNodeOfTags {
  val: Record<string, number>;
  left: TreeNodeOfTags | null;
  right: TreeNodeOfTags | null;
  constructor(
    val?: Record<string, number>,
    left?: TreeNodeOfTags | null,
    right?: TreeNodeOfTags | null
  ) {
    this.val = val === undefined ? {} : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function findAmountOfTag(root: TreeNodeOfTags | null, keyword: string): number {
  if (!root) return 0;
  let result: number = 0;

  if (keyword in root.val) return root.val[keyword];

  if (root.left) result = findAmountOfTag(root.left, keyword);

  if (result) return result;

  if (root.right) result = findAmountOfTag(root.right, keyword);

  return result;
}
let inputTree = new TreeNodeOfTags({ Music: 5 });
inputTree.right = new TreeNodeOfTags({ Jazz: 5 });
inputTree.left = new TreeNodeOfTags({ Rock: 10 });
inputTree.left.left = new TreeNodeOfTags({ "Hard Rock": 10 });
console.log(findAmountOfTag(inputTree, "Rock"));
