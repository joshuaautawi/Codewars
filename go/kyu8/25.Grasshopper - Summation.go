package kata

func Summation(n int) int {
	// the sleeper must awaken!
	total := 0
	for i := 0; i < n; i++ {
		total += i + 1
	}
	return total
}
