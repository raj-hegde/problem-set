package main

import "fmt"

func main() {
	x := []int{2, 2, 1}
	var unique int

	for i := 0; i < len(x); i++ {
		unique ^= x[i]
	}
	fmt.Println(unique)
}
