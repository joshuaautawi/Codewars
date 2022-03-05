package kata

func Maps(x []int) []int {
	var result []int
	for i := 0; i < len(x); i++ {
		result = append(result, x[i]*2)
	}
	return result
}
