package main

import (
	"fmt"
	"math/rand"
)

func guess(num int) int {
	pick := 6
	if num > pick {
		return -1
	} else if num < pick {
		return 1
	} else {
		return 0
	}
}

func guessnumber(n int) int {
	high := n
	low := 1
	for {
		pick := rand.Intn(high-low) + low
		switch guess(pick) {
		case -1:
			high = pick
		case 1:
			low = pick
		default:
			return pick
		}

	}
}

func main() {
	fmt.Println(guessnumber(10))
}
