//given an array and difference. divide array into two subsets and fund the number of those two subsets which has given difference


/*
we can reduce the above statement into a related problem
S1-S2 = diff (sum of subset 1 - S1 and sum of subset2 S2)
S1+S2=totalSum
by adding above equations
2*S1=diff + totalSum
S1= (diff + totalSum)/2 -> all the rightside values are known

so we get S1 value. if we count number of subsets with value S1 is present we will get count
so we can use subsetCountWithSum method for that.
*/


// Note: this same question can be asked in a different way
// given an array and a sum. assign +/- to each value in array so that adding all elements will give the targent sum.
// find the count of how many times we can change those signes for all the arrays to get the same sum

/*
if we assign +/- to each element, according to bodmas rule all the + elements will be added once and subtraction will done once and then combined
it is basically two subsets sums with difference +++ - ++++
S1(sum of all positive nums) and S2(sum of all negative elements) and difference between these two will be the expected sum
S1-S2=sum
which is similar to previous problem.
*/