package kata

import (
	"strings"
)

func ReverseWords(str string) string {
	split := strings.Split(str, " ")
	res := ""
	for i := len(split); i > 0; i-- {
		res += " " + split[i-1]
	}
	return res[1:]
}
