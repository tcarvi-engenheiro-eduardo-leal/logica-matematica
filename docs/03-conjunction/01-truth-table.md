# Conjunction Truth Table
p  q  p ∧ q

T  T  T
T  F  F
F  T  F
F  F  F

## Conjunction Scripts
def and_operation(p, q):
    if p == 1 and q == 1:
        return 1
    elif p == 0 or q == 0:
        return 0
    else:
        return None

def or_operation(p, q):
    if p == 1 or q == 1:
        return 1
    elif p == 0 and q == 0:
        return 0
    else:
        return None

def not_operation(p):
    if p == 1:
        return 0
    elif p == 0:
        return 1
    else:
        return None

def implication_operation(p, q):
    if p == 1 and q == 0:
        return 0
    else:
        return 1

def equivalence_operation(p, q):
    if p == q:
        return 1
    else:
        return 0

p = 1
q = 0
print(and_operation(p, q))      # Output: 0
print(or_operation(p, q))       # Output: 1
print(not_operation(p))         # Output: 0
print(implication_operation(p, q)) # Output: 0
print(equivalence_operation(p, q))  # Output: 0
