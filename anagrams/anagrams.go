package anagrams

import (
	"fmt"
	"sort"
	"strings"
)

func Anagrams(input string, variants []string) []string {
	found := []string{}
	chars := map[string]int{}

	for _,v := range input {
		char := string(v)

		if _,ok := chars[char]; !ok {
		    chars[char] = 1
		} else {
		    chars[char]++;
		}
	}

	for _, word := range variants {
		var valid bool = true
		chars2 := chars
		
		if len(input) != len(word) {
			continue
		}

		for _,v := range word {
			char := string(v)

			if _, ok := chars2[char]; ok {
			    chars2[char]--
			    if chars2[char] < 0 {
				valid = false
			    }
			} else {
			    valid = false
			}
		}
		if valid {
			found = append(found, word)
		}
	}
    
	return found
}
