# python3 executor.py
import propositional_logic

def main():

    p = True
    q = True
    print('(p=',p,' conjunctionOperator q=',q,') = ',propositional_logic.conjunction(p, q), sep='') # Output: True

    p = True
    q = False
    print('(p=',p,' conjunctionOperator q=',q,') = ',propositional_logic.conjunction(p, q), sep='') # Output: False

    p = False
    q = True
    print('(p=',p,' conjunctionOperator q=',q,') = ',propositional_logic.conjunction(p, q), sep='') # Output: False

    p = False
    q = False
    print('(p=',p,' conjunctionOperator q=',q,') = ',propositional_logic.conjunction(p, q), sep='') # Output: False

    p = None
    q = False
    print('(p=',p,' conjunctionOperator q=',q,') = ',propositional_logic.conjunction(p, q), sep='') # Output: None

    p = None
    q = True
    print('(p=',p,' conjunctionOperator q=',q,') = ',propositional_logic.conjunction(p, q), sep='') # Output: None

    p = True
    q = None
    print('(p=',p,' conjunctionOperator q=',q,') = ',propositional_logic.conjunction(p, q), sep='') # Output: None

    p = False
    q = None
    print('(p=',p,' conjunctionOperator q=',q,') = ',propositional_logic.conjunction(p, q), sep='') # Output: None

    p = None
    q = None
    print('(p=',p,' conjunctionOperator q=',q,') = ',propositional_logic.conjunction(p, q), sep='') # Output: None


if __name__ == "__main__":
    main()

