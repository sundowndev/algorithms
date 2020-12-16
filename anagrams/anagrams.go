package anagrams

import (
	"fmt"
	"sort"
	"strings"
)

func Anagrams(input string, variants []string) []string {
	found := []string{}
	chars := []string{}

	for i := len(input) - 1; i >= 0; i-- {
		chars = append(chars, string(input[i]))
	}

	sort.Strings(chars)

	for _, v := range variants {
		chars2 := []string{}

		for i := len(v) - 1; i >= 0; i-- {
			chars2 = append(chars2, string(v[i]))
		}

		sort.Strings(chars2)

		if strings.Join(chars2, "") == strings.Join(chars, "") {
			found = append(found, v)
		}
	}

	fmt.Println(2, found)

	return found
}
