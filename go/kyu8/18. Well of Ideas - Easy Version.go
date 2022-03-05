package kata

func Well(x []string) string {
	// Your solution!
	n := 0
	for i := 0; i < len(x); i++ {
		if string(x[i]) == "good" {
			n++
		}
	}
	if n > 2 {
		return "I smell a series!"
	}
	if n > 0 {
		return "Publish!"
	}
	return "Fail!"
}
