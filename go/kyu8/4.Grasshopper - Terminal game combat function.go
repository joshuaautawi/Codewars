package kata

func combat(health, damage float64) float64 {
	r := health - damage
	if r < 0 {
		return 0
	}
	return r
}
