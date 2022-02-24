package kata

import "strconv"

func countSheep(num int) string {
	// Your code here!
	str := ""
	for i := 0; i < num; i++ {
		str += strconv.Itoa(i+1) + " sheep..."
	}
	return str
}
