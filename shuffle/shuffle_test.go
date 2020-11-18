package shuffle

import (
	assertTest "github.com/stretchr/testify/assert"
	"testing"
)

func TestShuffle(t *testing.T) {
	assert := assertTest.New(t)

	t.Run("should Shuffle string", func(t *testing.T) {
		payload := "my payload to Shuffle"

		assert.NotEqual(payload, Shuffle(payload))
	})

	t.Run("should Shuffle string", func(t *testing.T) {
		payload := "a"

		assert.Equal(payload, Shuffle(payload))
	})

	t.Run("should Shuffle string", func(t *testing.T) {
		payload := "ab"

		result := Shuffle(payload)

		assert.Contains(result, "a")
		assert.Contains(result, "b")
	})
}
