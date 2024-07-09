package main

import (
	"fmt"
	"slices"
)

func altitude(gain []int) int {
	alt := []int{0}
	var i int
	for _, val := range gain {
		x := val + alt[i]
		alt = append(alt, x)
		i++
	}
	return slices.Max(alt)
}

func main() {
	fmt.Println(altitude([]int{-4, -3, -2, -1, 4, 3, 2}))
}
