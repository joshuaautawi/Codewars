package kata

import (
	"fmt"
	"strconv"
)

func MultiTable(number int) string {
	//good luck
	result := ""
	for i := 0; i < 10; i++ {
		result += "" + strconv.Itoa(i+1) + " * " + strconv.Itoa(number) + " = " + strconv.Itoa((i+1)*number) + "\n"
	}
	fmt.Println(result)
	return result[0 : len(result)-1]
}
