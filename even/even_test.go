package even

import "testing"

func TestEven(t *testing.T) {
	suite := map[int]bool{
		2:                  true,
		1:                  false,
		824:                true,
		200:                true,
		52:                 true,
		1785616589187:      false,
		0:                  true,
		100000000000000000: true,
	}

	for k, v := range suite {
		if output := isEven(k); output != v {
			t.Errorf("input: %d - expected: %v, got: %v", k, v, output)
		}
	}
}
