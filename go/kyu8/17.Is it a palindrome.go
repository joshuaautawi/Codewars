package kata

import (
	"strings"
)

func IsPalindrome(str string) bool {
	r := ""
	str = strings.ToLower(str)
	for i := len(str); i > 0; i-- {
		r += string(str[i-1])
	}
	if r == str {
		return true
	}
	return false
}
