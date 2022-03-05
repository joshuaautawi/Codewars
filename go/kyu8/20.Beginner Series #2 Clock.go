package kata

func Past(h, m, s int) int {
	// your code here
	hour := h * 3600000
	minutes := m * 60000
	second := s * 1000
	return hour + minutes + second
}
