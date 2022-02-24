package kata

func Xor(a, b bool) bool {
	// your code here:
	if a && b {
		return false
	} else if !a && !b {
		return false
	}
	return true
}
