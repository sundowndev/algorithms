#!/usr/bin/python3

import math
import random
import unittest

def shuffle(n):
  arr = list(n)

  for i in range(0, len(arr)):
    j = math.floor(random.random() * (1 + i))
    tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp

  return ''.join(arr)

class TestStringMethods(unittest.TestCase):

    def test_shuffle(self):
        string = 'my passphrase to shuffle'
        self.assertNotEqual(shuffle(string), string)

    def test_shuffle2(self):
        string = 'a'
        self.assertEqual(shuffle(string), string)

    def test_shuffle3(self):
        string = 'a b'
        self.assertIn(shuffle(string), ['a b', 'b a', ' ba', 'ba ', 'ab ', ' ab'])

if __name__ == '__main__':
    unittest.main()
