package anagrams

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestAnagrams(t *testing.T) {
	t.Run("should succeed", func(t *testing.T) {
		result := Anagrams("abba", []string{"aabb", "abcd", "bbaa", "dada"})
		assert.Equal(t, []string{"aabb", "bbaa"}, result)
	})

	t.Run("should succeed", func(t *testing.T) {
		result := Anagrams("laser", []string{"lazing", "lazy", "lacer"})
		assert.Equal(t, []string{}, result)
	})

	t.Run("should succeed", func(t *testing.T) {
		result := Anagrams("racer", []string{"crazer", "carer", "racar", "caers", "racer"})
		assert.Equal(t, []string{"carer", "racer"}, result)
	})
}
