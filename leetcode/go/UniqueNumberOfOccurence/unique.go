package main

import "fmt"

func uniqueOccurences(arr []int) bool {
	freq := make(map[int]int)
	seen := make(map[int]bool)
	for _, val := range arr {
		freq[val]++
	}
	for _, val := range freq {
		if _, ok := seen[val]; ok {
			return false
		}
		seen[val] = true
	}
	return true
}

func main() {
	fmt.Println(uniqueOccurences([]int{1, 2, 1, 2, 2}))
}
