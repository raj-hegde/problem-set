package reverselinkedlist

func main() {

}

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	node := nil
	if head == nil {
		return nil
	}

	for head != nil {
		temp := head.Next
		head.Next = node
	}

	return head
}
