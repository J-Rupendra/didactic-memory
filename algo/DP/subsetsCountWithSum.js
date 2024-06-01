// given an array and sum, find the count of subsets with given sum.

/*
we an use the subsetsum program to find the count. in that code we are returning when we find the given sum at any cell,
so instead we can use a counter to track the count untill we iterate the entire matrix

in the other way, that code uses boolean to find the subsetsum existence
in such case we can use 1 and 0 instead of true and false respectively. and addition instead of or condition.
the final value in the last cell gives you the count.
matrix[i][j] -> count of subsets for sum j considering the i length of array(all the elements of length i might or might not be included).
*/