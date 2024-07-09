package main

import "fmt"

func main() {
	answer := [][]int{}
	nums1 := []int{1, 2, 3, 3}
	nums2 := []int{1, 1, 2, 2}

	answer = append(answer, findDifference(nums1, nums2))
	answer = append(answer, findDifference(nums2, nums1))

	fmt.Println(answer)
}

func findDifference(nums1, nums2 []int) (diff []int) {
	map1 := make(map[int]bool)
	map2 := make(map[int]bool)

	for _, item := range nums1 {
		map1[item] = true
	}
	for _, item := range nums2 {
		map2[item] = true
	}

	for key := range map1 {
		if _, ok := map2[key]; !ok {
			diff = append(diff, key)
		}
	}
	return
}
