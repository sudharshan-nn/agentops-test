import unittest
from calculate import add_numbers

class TestCalculate(unittest.TestCase):
    def test_add_positive_numbers(self):
        self.assertEqual(add_numbers(1, 2), 3)

    def test_add_negative_numbers(self):
        self.assertEqual(add_numbers(-1, -1), -2)

    def test_add_positive_and_negative_numbers(self):
        self.assertEqual(add_numbers(1, -1), 0)

    def test_add_zeros(self):
        self.assertEqual(add_numbers(0, 0), 0)

if __name__ == '__main__':
    unittest.main()