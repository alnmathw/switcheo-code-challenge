/* 
  Here, we assume that the input to the sum functions are integers (not a fractional number)
  so we do not need to write an assertion against that case.
  However, integers can be either positive, zero or negative:
    positive case: should add the sum of the first n integers from 0 to n 
    zero case: should add the sum of the first 0 integers, which is just 0 
    negative case: one can debate on what should happen if the input is a negative integer
      1) should add the first n integers from 0 to -n 
      2) throw an error as computing the sum of the first n negative integers might 
      not be the intended feature specified by the project manager - semantic error. 
*/ 

var sum_to_n_a = function(n) {
  if (n < 0) {
    throw Error('Assert failed: input should be greater or equal to 0');
  };
  
  return (n + 1) * n / 2;
};

var sum_to_n_b = function(n) {
  if (n < 0) {
    throw Error('Assert failed: input should be greater or equal to 0');
  }

  if (n == 0) {
    return n;
  }
  else {
    return n + sum_to_n_b(n-1);
  }
};

var sum_to_n_c = function(n) {
  if (n < 0) {
    throw Error('Assert failed: input should be greater or equal to 0');
  }

  let sum = 0 
  for (i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

// testing functions with some cases 
var test_sum_a_1 = sum_to_n_a(100) == 5050
var test_sum_b_1 = sum_to_n_b(100) == 5050
var test_sum_c_1 = sum_to_n_a(100) == 5050

console.log(test_sum_a_1)
console.log(test_sum_b_1)
console.log(test_sum_c_1)

var test_sum_a_2 = sum_to_n_a(0) == 0
var test_sum_b_2 = sum_to_n_b(0) == 0
var test_sum_c_2 = sum_to_n_a(0) == 0

console.log(test_sum_a_2)
console.log(test_sum_b_2)
console.log(test_sum_c_2)
