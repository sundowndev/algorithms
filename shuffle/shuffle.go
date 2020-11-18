package shuffle

import (
	"math/rand"
	"strings"
)

// Shuffle returns a shuffled version of the given string
//
//		Shuffle("rtfm") -> fmrt
func Shuffle(arr string) string {
	var result = make([]string, len(arr))

	for k, v := range strings.Split(arr, "") {
		j := rand.Intn(len(arr) - 0)

		tmp := v

		result[k] = result[j]
		result[j] = tmp

	}

	return strings.Join(result, "")
}
