package kata

import (
	"strings"
)

func AbbrevName(name string) string {
	//your code here
	s := strings.Split(name, " ")
	r := ""
	for i := 0; i < len(s); i++ {
		r += (strings.ToUpper(s[i][0:1]) + ".")
	}
	return r[0 : len(r)-1]
}
