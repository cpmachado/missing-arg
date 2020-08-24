# missing-arg

Missing argument problem, the name I gave it.

I was proposed a technical challenge, which is as follows:

For a given unordered set of integers, whose elements are unique, and from 1
to the size of the set. Assume the set is in an array, and that one of the
entries is set to null.

How can you know which element was set to null?

Quickly remembered that for a given series of integers, the sum is **n * (n+1)
/ 2**.

Thus using this fact, I quickly solved it.

It's the solution documented in **lib/wise.js**.

The instant after I remembered there might be another solution in linear time,
which is as follows:

- Add the even numbers
- Subtract the odd numbers
- In case the set has an even length, subtract half the length to balance.
- Otherwise, add half the length.
- The answer is the absolute value after that adjustment.

This solution is implemented in **lib/adjusted.js**.


## TODO

- [ ] Proper analysis of the whole problem.
- [ ] Proper performance analysis of both solutions.

## LICENSE

Please do read the LICENSE file.
