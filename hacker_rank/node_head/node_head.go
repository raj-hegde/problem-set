package main

import (
	"fmt"
)

type node struct {
	data int
	next *node
}

type list struct {
	head *node
}

func (l *list) insert(value int) {
	newNode := &node{data: value}

	if l.head == nil {
		l.head = newNode
		return
	}

	old := l.head
	l.head = newNode
	l.head.next = old
}

func main() {
	arr := []int{5, 383, 484, 392, 975, 321}
	list := &list{}

	for i := 1; i < len(arr); i++ {
		list.insert(arr[i])
	}
	PrintList(list)

}

func PrintList(l *list) {
	curr := l.head
	for curr != nil {
		fmt.Printf("%d\n", curr.data)
		curr = curr.next
	}
}
