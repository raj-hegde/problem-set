package main

import "fmt"

func main() {
	n := 1
	flowerbed := []int{0, 0, 1, 0, 0}
	fmt.Println(canPlaceFlowers(flowerbed, n))
}

func canPlaceFlowers(flowerbed []int, n int) bool {
	length := len(flowerbed)
	if length == 0 {
		return false
	} else if length == 1 && flowerbed[0] == 0 {
		return true
	}

	if flowerbed[0] == 0 && flowerbed[1] == 0 {
		flowerbed[0] = 1
		n--
	}

	if flowerbed[length-1] == 0 && flowerbed[length-2] == 0 {
		flowerbed[length-1] = 1
		n--
	}
	if length > 4 {
		for i := 1; i < length && n > 0; i++ {
			if flowerbed[i-1] == 0 && flowerbed[i] == 0 && flowerbed[i+1] == 0 {
				flowerbed[i] = 1
				n--
			}
		}
	}
	if n <= 0 {
		return true
	} else {
		return false
	}
}

// func canPlaceFlowers(fbed []int, n int) bool {
// 	length := len(fbed)
// 	for i := 0; i < length && n > 0; i++ {
// 		if fbed[i] != 0 {
// 			continue
// 		}
// 		left := (i == 0 || fbed[i-1] == 0)
// 		right := (i == len(fbed)-1 || fbed[i+1] == 0)
// 		if left && right {
// 			//fbed[i] = 1
// 			i++
// 			n--
// 		}
// 	}
// 	return n == 0
// }
