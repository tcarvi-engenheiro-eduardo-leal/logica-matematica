// swiftc -c main.swift propositional_logic.swift -module-name executorSwift
// swiftc -emit-executable main.o propositional_logic.o -o executorSwift
// executorSwift
var statementTrue: Bool? = true
var statementFalse: Bool? = false
var statementNil: Bool?

public func printConjunction(first: Bool?, second: Bool?){
    let first = first;
    let second = second;
    var conjunction: Any = conjunction(p, p);
    print("(p=", first,"conjunction q=", second,")=",conjunction);
}

printConjunction(statementTrue, statementTrue);
printConjunction(statementTrue, statementFalse);
printConjunction(statementFalse, statementTrue);
printConjunction(statementFalse, statementFalse);
printConjunction(statementNil, statementTrue);
printConjunction(statementNil, statementFalse);
