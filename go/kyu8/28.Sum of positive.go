package kata

func PositiveSum(numbers []int) int {
	total := 0
	for i := 0; i < len(numbers); i++ {
		if numbers[i] > 0 {
			total += numbers[i]
		}
	}
	return total
}
