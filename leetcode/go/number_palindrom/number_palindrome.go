package main

import "fmt"

func isPalindrome(n int) bool {
	t := n
	var s int
	for n != 0 {
		r := n % 10
		s = s*10 + r
		n = n / 10
	}
	if s == t {
		return true
	} else {
		return false
	}
}

func main() {
	fmt.Println(isPalindrome(1234))
}
