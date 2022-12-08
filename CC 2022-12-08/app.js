// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list2 === null) {
    return list1;
  }
  if (list1 === null) {
    return list2;
  }

  const head = new ListNode();
  console.log(head);
  let current = head;
  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      current.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      current.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1) {
    current.next = list1;
  }
  if (list2) {
    current.next = list2;
  }

  return head.next;
};
