// given an array. Find the minimum subset difference.
// input: 1 6 11 5 output: 1

/*
we can solve by taking the possible sum rage which is
0,1,6,7,11,12,17,18,22 -> possible subset sums in ascending order.
s2-s1=minimum // consider s1<s2
s2=totalarraysum-s1 -> if we diving array into two subsets then s1+s2 = totalsumofarray
hence minimum= totalSumArr-2s1

as the matrix last row will give the possible sums range with all the array elements. we can consider half range from it
because adding 2 s1 will always be less than half the range because there will be some minimum left

construct matrix using array and total array sum.
loop over the last row until half range of sum and create an array using the above formula minimum = totalSumArr-2s1
with all the minimum elements take the min value and return it

*/