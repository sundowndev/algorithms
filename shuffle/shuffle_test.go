package shuffle

import (
	assertTest "github.com/stretchr/testify/assert"
	"testing"
)

func TestShuffle(t *testing.T) {
	assert := assertTest.New(t)

	t.Run("should shuffle string", func(t *testing.T) {
		payload := "my payload to shuffle"

		assert.NotEqual(payload, shuffle(payload))
	})

	t.Run("should shuffle string", func(t *testing.T) {
		payload := "a"

		assert.Equal(payload, shuffle(payload))
	})

	t.Run("should shuffle string", func(t *testing.T) {
		payload := "ab"

		assert.Equal(payload, shuffle(payload))
	})
}
