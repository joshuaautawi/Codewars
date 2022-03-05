package kata

func SmallestIntegerFinder(numbers []int) int {
	n := numbers[0]
	for i := 1; i < len(numbers); i++ {
		if numbers[i] < n {
			n = numbers[i]
		}
	}
	return n
}
