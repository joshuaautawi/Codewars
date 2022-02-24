package kata

func OddCount(n int) int {
	//your code here
	c := 0
	for i := 0; i < n; i++ {
		if i%2 != 0 {
			c++
		}
	}
	return c
}
