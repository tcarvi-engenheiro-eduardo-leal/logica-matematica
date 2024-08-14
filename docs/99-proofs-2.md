For the last mathematical sentence, I would design the following proof. Is that correct?

hypothesis:
h: The sum of squares of the first integers in position n is equal to n*(n+1)*(2*n+1)/6

Statements:
q: "a" belongs to the set of integers
r: By the principle of order, proved by the method of induction, we can say that there are n integers of position and that each of them follows the antecedent by the sum of the element 1.

That said,
I would like to prove that the following conditional statement is true:
if q and r then h
Or, using logic symbols, q ^ r -> h
From the truth table of the conditional operator, we know the following truth table:
q^r h (q^r)->h
T T T
T F F
F T F
F F T

I considered that q^r is always true, so I need to prove that:
1) The statement h is always true by what is said in the logical sentence q^r.
3) And we would like to say that what is said in "h" follows from what is said in "q^r". That the antecedent "q^r" implies the consequent "h".