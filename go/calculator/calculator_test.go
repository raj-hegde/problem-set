package calculator_test

import (
	"calculator"
	"math"
	"testing"
)

func TestAdd(t *testing.T) {
	t.Parallel()
	type testCase struct {
		a, b float64
		want float64
	}

	// This is called as slice
	testCases := []testCase{
		{a: 2, b: 2, want: 4},
		{a: 1, b: 1, want: 2},
		{a: 5, b: 0, want: 5},
	}

	// Loop over the above slice
	for _, tc := range testCases {
		got := calculator.Add(tc.a, tc.b)
		if tc.want != got {
			t.Errorf("Add(%f, %f): want %f, got %f", tc.a, tc.b, tc.want, got)
		}
	}

	// var want float64 = 4
	// got := calculator.Add(2, 2)
	// if want != got {
	// 	t.Errorf("want %f, got %f", want, got)
	// }
}

func TestSubtract(t *testing.T) {
	t.Parallel()
	type testCase struct {
		a, b float64
		want float64
	}

	testCases := []testCase{

		{a: 3, b: 2, want: 1},
		{a: 1, b: 1, want: 0},
		{a: 3, b: -2, want: 5},
	}

	for _, tc := range testCases {
		got := calculator.Subtract(tc.a, tc.b)
		if tc.want != got {
			t.Errorf("Add(%f, %f): want %f, got %f", tc.a, tc.b, tc.want, got)
		}
	}
}

func TestMultiply(t *testing.T) {
	t.Parallel()
	type testCase struct {
		a, b float64
		want float64
	}

	testCases := []testCase{
		{a: 5, b: 2, want: 10},
		{a: 1, b: 1, want: 1},
		{a: 3, b: -2, want: -6},
	}

	for _, tc := range testCases {
		got := calculator.Multiply(tc.a, tc.b)
		if tc.want != got {
			t.Errorf("Add(%f, %f): want %f, got %f", tc.a, tc.b, tc.want, got)
		}
	}
}

func TestDivide(t *testing.T) {
	t.Parallel()
	type testCase struct {
		a, b float64
		want float64
	}

	testCases := []testCase{
		{a: 2, b: 2, want: 1},
		{a: -1, b: -1, want: 1},
		{a: 10, b: 2, want: 5},
	}

	for _, tc := range testCases {
		got, err := calculator.Divide(tc.a, tc.b)
		if err != nil {
			t.Fatalf("want no error for valid input, got %v", err)
		}
		if tc.want != got {
			t.Errorf("Divide(%f, %f): want %f, got %f", tc.a, tc.b, tc.want, got)
		}
	}
}

func TestDivideInvalid(t *testing.T) {
	t.Parallel()

	_, err := calculator.Divide(1, 0)
	if err == nil {
		t.Error("want error for invalid input, got nil")
	}
}

// This is for floating point precision

func TestSqrt(t *testing.T) {
	t.Parallel()
	type testCase struct {
		a    float64
		want float64
	}

	testCases := []testCase{
		{a: 2, want: 1.4142},
		{a: 16, want: 4},
		{a: 4, want: 2},
	}

	for _, tc := range testCases {
		got, err := calculator.Sqrt(tc.a)
		if err != nil {
			t.Fatalf("want no error for valid input, got %v", err)
		}
		if !closeEnough(tc.want, got, 0.01) {
			t.Errorf("Sqrt(%f): want %f, got %f", tc.a, tc.want, got)
		}
	}
}

func closeEnough(a, b, tolerance float64) bool {
	return math.Abs(a-b) <= tolerance
}
func TestSqrtInvalid(t *testing.T) {
	t.Parallel()

	_, err := calculator.Sqrt(-1)
	if err == nil {
		t.Error("want error for invalid input, got nil")
	}
}

